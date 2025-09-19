import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartReducer";

function ProductCard({product, viewProduct=true}) {

    const dispatch = useDispatch();
    
    function handleAddToCart() {
        dispatch(addToCart(product, 1));
    }

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            {/* Product Image */}
            <div className="h-48 bg-gray-200 flex items-center justify-center">
                {product.imageUrl ? (
                    <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="text-gray-400 text-center p-4">
                        <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        <span>No Image Available</span>
                    </div>
                )}
            </div>
            
            {/* Product Content */}
            <div className="p-4 flex-grow">
                {/* Product Title */}
                <h3 className="text-lg font-semibold mb-2 bg-blue-500 text-white p-2 rounded">
                    {product.name}
                </h3>
                
                {/* Product Description */}
                <p className="text-gray-700 mb-2 line-clamp-2 text-sm">
                    {product.description}
                </p>
                
                {/* Product Details */}
                <div className="mt-3">
                    <div className="flex items-center mb-2">
                        <span className="text-gray-500 text-sm">Category:</span>
                        <span className="ml-2 bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                            {product.category}
                        </span>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-3">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg 
                                    key={i} 
                                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`} 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                            <span className="ml-1 text-sm text-gray-500">({product.rating})</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Price and Action */}
            <div className="p-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold text-lg">
                        ${product.price.toFixed(2)}
                    </span>
                </div>
                
                {/* Buttons */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                    <button 
                        onClick={handleAddToCart}
                        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors text-sm font-medium flex items-center justify-center"
                    >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to Cart
                    </button>
                    
                    {viewProduct &&
                        (<Link 
                            to={`/products/${product.id}`} 
                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center"
                        >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View Product
                        </Link>)
                    }

                    {!viewProduct &&
                        (<Link 
                            to={`/cart`} 
                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center"
                        >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
                            Go To Cart
                        </Link>)
                    }
                </div>
            </div>
        </div>
    );
}
export default ProductCard;