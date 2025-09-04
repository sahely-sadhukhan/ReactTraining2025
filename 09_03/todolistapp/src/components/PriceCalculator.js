import { useState } from "react";

function PriceCalculator() {
    const [product, setProduct] = useState({ name: "", price: 0, quantity: 0, finalTotal: 0 });

    function calcuateTotal(event) {
        event.preventDefault();

        let total = product.price * product.quantity;
        let discount = total >= 20000 ? 0.2 : total >= 15000 ? 0.15 : total >= 10000 ? 0.1 : total >= 5000 ? 0.05 : 0;;
        setProduct({ ...product, finalTotal: total - (total * discount) });
    }

    return (
        <>
        <br />
        <div className="max-w-md mx-auto bg-green-50 p-6 rounded-lg shadow-md border border-green-100">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Price Calculator</h2>
            
            <form onSubmit={calcuateTotal} className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                    <div>
                        <label className="block text-sm font-medium text-green-700 mb-1">Product Name:</label>
                        <input 
                            type="text" 
                            onChange={(e) => { product.name = e.target.value }}
                            className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-green-700 mb-1">Price:</label>
                        <input 
                            type="number" 
                            onChange={(e) => { product.price = parseFloat(e.target.value) }}
                            className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-green-700 mb-1">Quantity:</label>
                        <input 
                            type="number" 
                            onChange={(e) => { product.quantity = parseInt(e.target.value) }}
                            className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                        />
                    </div>
                </div>
                
                <button 
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Calculate Total
                </button>
                
            </form>
            
            <div className="mt-6 pt-4 border-t border-green-200">
                <h3 className="text-xl font-medium text-green-800">
                    Total Price: <span className="font-bold text-green-600">${product.finalTotal.toFixed(2)}</span>
                </h3>
            </div>
        </div>
        </>
    );
}
export default PriceCalculator;