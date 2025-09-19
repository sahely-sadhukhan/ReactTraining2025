import { Link } from 'react-router-dom';

function CartItem({item, onRemove, onUpdate}) {
    
    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            onUpdate(item.id, value);
        }
    };

    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            {/* Product Image with Placeholder */}
            <div className="w-full sm:w-24 h-24 mb-4 sm:mb-0 mr-0 sm:mr-6 flex-shrink-0">
                {item.imageUrl ? (
                    <img 
                        src={item.imageUrl}
                        alt={item.name} 
                        className="w-full h-full object-cover rounded-md"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Product Details */}
            <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-blue-600 font-medium">${item.price.toFixed(2)}</p>
                <div className="mt-3 flex flex-wrap items-center gap-4">
                    {/* Quantity Control */}
                    <div className="flex items-center">
                        <label htmlFor={`quantity-${item.id}`} className="mr-2 text-sm text-gray-600">
                            Quantity:
                        </label>
                        <div className="flex border border-gray-300 rounded overflow-hidden">
                            <button
                                type="button"
                                onClick={() => item.quantity > 1 && onUpdate(item.id, item.quantity - 1)}
                                className="px-2 py-1 bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                                -
                            </button>
                            <input 
                                type="number" 
                                id={`quantity-${item.id}`}
                                onChange={handleQuantityChange}
                                value={item.quantity || 1} 
                                min="1"
                                className="w-12 text-center border-x border-gray-300 focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={() => onUpdate(item.id, (item.quantity || 1) + 1)}
                                className="px-2 py-1 bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* View Product Link */}
                    <Link 
                        to={`/products/${item.id}`} 
                        className="bg-blue-600 text-white py-1.5 px-3 rounded hover:bg-blue-700 transition-colors text-sm font-medium flex items-center"
                    >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View
                    </Link>
                    
                    {/* Item Total */}
                    <div className="text-gray-700">
                        <span className="font-medium">Subtotal:</span> ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </div>
                </div>
            </div>

            {/* Remove Button */}
            <button 
                onClick={() => onRemove(item.id)} 
                className="ml-0 mt-3 sm:ml-4 sm:mt-0 text-red-500 hover:text-red-700 flex items-center text-sm font-medium"
                aria-label="Remove item"
            >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Remove
            </button>
        </div>
    );
}

export default CartItem;