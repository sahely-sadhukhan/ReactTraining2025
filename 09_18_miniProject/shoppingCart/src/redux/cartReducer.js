const initialState = {
    products: (!!sessionStorage.getItem('AUTH_TOKEN') && sessionStorage.getItem('cart'))
        ? JSON.parse(sessionStorage.getItem('cart')) : []};

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export const addToCart = (product, quantity = 1) => ({
    type: ADD_TO_CART,
    payload: { product, quantity }
});

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId
});

export const clearCart = () => ({
    type: CLEAR_CART
});

export const updateQuantity = (productId, quantity) => ({
    type: UPDATE_QUANTITY,
    payload: {productId, quantity}
});

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART: {
            const { product, quantity } = action.payload;
            const existingProductIndex = state.products.findIndex(p => p.id === product.id);
            
            if (existingProductIndex >= 0) {
                const updatedProducts = [...state.products];
                updatedProducts[existingProductIndex] = {
                    ...updatedProducts[existingProductIndex],
                    quantity: updatedProducts[existingProductIndex].quantity + quantity
                };
                sessionStorage.setItem('cart', JSON.stringify(updatedProducts));
                return {
                    ...state,
                    products: updatedProducts
                };
            } else {
                // Product doesn't exist, add it with the specified quantity
                sessionStorage.setItem('cart', JSON.stringify([...state.products, { ...product, quantity }]));
                return {
                    ...state,
                    products: [...state.products, { ...product, quantity }]
                };
            }
        }
        
        case REMOVE_FROM_CART:
            const updatedProducts = state.products.filter(p => p.id !== action.payload);
            sessionStorage.setItem('cart', JSON.stringify(updatedProducts));
            return {
                ...state, 
                products: updatedProducts
            };
            
        case CLEAR_CART:
            sessionStorage.removeItem('cart');
            return {
                ...state, 
                products: []
            };
            
        case UPDATE_QUANTITY:
            return {
                ...state,
                products: state.products.map(p => 
                    p.id === action.payload.productId 
                        ? {...p, quantity: action.payload.quantity} 
                        : p
                )
            };
            
        default:
            return state;
    }
};