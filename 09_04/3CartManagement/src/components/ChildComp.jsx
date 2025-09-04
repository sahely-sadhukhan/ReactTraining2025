function ChildComp({ prod, onAddToCart, onRemoveFromCart }) {
    
    return (
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{prod.pname}</h3>
            
            <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600">
                    <span className="font-medium">Code:</span> {prod.pcode}
                </p>
                <p className="text-lg font-bold text-blue-600">
                    ${prod.price.toFixed(2)}
                </p>
            </div>
            
            <div className="flex space-x-2 mt-4">
                <button 
                    onClick={() => onAddToCart(prod.pcode)}
                    className="bg-green-200 hover:bg-green-300 text-green-800 py-1 px-3 rounded-md flex-1 transition-colors duration-200"
                >
                    Add to Cart
                </button>
                <button 
                    onClick={() => onRemoveFromCart(prod.pcode)}
                    className="bg-pink-200 hover:bg-pink-300 text-pink-800 py-1 px-3 rounded-md flex-1 transition-colors duration-200"
                >
                    Remove
                </button>
            </div>
        </div>
    );
}
export default ChildComp;