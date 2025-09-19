import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../redux/cartReducer";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
    const cartItems = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
    const cartTotal = cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0).toFixed(2);

    function onRemoveHandler(productId) {
        dispatch(removeFromCart(productId));
    }

    function onUpdateHandler(productId, quantity) {
        if (quantity < 1) {
            onRemoveHandler(productId);
            return;
        }
        dispatch(updateQuantity(productId, quantity));
    }

    function handleClearCart() {
        if (window.confirm('Are you sure you want to clear your cart?')) {
            dispatch(clearCart());
        }
    }

    function handleCheckout() {
        alert('Yippee! Checkout successful.');
        dispatch(clearCart());
    }

    return (
        <div className="max-w-4xl mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 pb-2 border-b border-gray-200">Shopping Cart</h2>
            
            {cartItems.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-gray-100">
                    <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="mt-4 text-lg text-gray-600">Your cart is empty.</p>
                    <Link to="/products" className="mt-6 inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div>
                    <div className="space-y-4 mb-8">
                        {cartItems.map(item => (
                            <CartItem 
                                key={item.id} 
                                item={item} 
                                onRemove={onRemoveHandler} 
                                onUpdate={onUpdateHandler} 
                            />
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-between items-center mt-8 pt-6 border-t border-gray-200">
                        <button 
                            onClick={handleClearCart}
                            className="mb-4 sm:mb-0 text-red-600 hover:text-red-800 transition-colors flex items-center"
                        >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Clear Cart
                        </button>

                        <div className="w-full sm:w-auto bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-gray-600">Subtotal ({cartCount} items):</span>
                                <span className="font-semibold">${cartTotal}</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-gray-600">Shipping:</span>
                                <span className="font-semibold">Free</span>
                            </div>
                            <div className="flex items-center justify-between border-t pt-2">
                                <span className="text-gray-800 font-bold">Total:</span>
                                <span className="text-blue-600 text-xl font-bold">${cartTotal}</span>
                            </div>
                            
                            <button className="w-full mt-4 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition-colors"
                            onClick={handleCheckout}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                        <Link to="/products" className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;