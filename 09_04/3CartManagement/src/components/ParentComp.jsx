import { useState } from "react";
import ChildComp from "./ChildComp";

function ParentComp() {

    const [products, setProducts] = useState([
        { pcode: 101, pname: "Pen", price: 10 },
        { pcode: 102, pname: "Pencil", price: 5 },
        { pcode: 103, pname: "Eraser", price: 2 },
        { pcode: 104, pname: "Sharpener", price: 3 },
        { pcode: 105, pname: "Notebook", price: 20 },
        { pcode: 106, pname: "Marker", price: 15 }
    ]);

    const [cart, setCarts] = useState([]);

    function addToCart(pcode) {
        let pro = products.find(p => p.pcode === pcode);
        if (pro) {
            setCarts([...cart, pro]);
        }
    }

    function removeFromCart(pcode) {
        let index = cart.findIndex(p => p.pcode === pcode);
        if (index >= 0) {
            cart.splice(index, 1);
            setCarts([...cart]);
        } else {
            alert(`Product ${pcode} not found in cart!`);
        }
    }

    let allProducts = products.map(p => <ChildComp key={p.pcode} prod={p}
        onAddToCart={addToCart} onRemoveFromCart={removeFromCart} />);
    
        let cartItems = cart.map(c => (
            <li key={c.pcode} className="flex justify-between items-center py-2 border-b border-gray-100">
                <div>
                    <span className="font-medium">{c.pname}</span>
                    <span className="text-sm text-gray-500 ml-2">#{c.pcode}</span>
                </div>
                <div className="flex items-center">
                    <span className="font-bold text-blue-600">${c.price.toFixed(2)}</span>
                </div>
            </li>
        ));
    
        // Calculate total price
        const cartTotal = cart.reduce((total, item) => total + item.price, 0);
    
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
                    Shop whatever!
                </h1>
                
                <div className="bg-blue-100 rounded-lg p-4 mb-6 flex items-center justify-between">
                    <p className="text-lg font-medium text-blue-800">
                        Your Cart contains 
                        <span className="ml-2 px-3 py-1 bg-blue-600 text-white rounded-full">
                            {cart.length}
                        </span> 
                        <span className="ml-2">items!</span>
                    </p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Products Grid - Takes 2/3 of the space on larger screens */}
                    <div className="md:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {allProducts}
                        </div>
                    </div>
                    
                    {/* Cart Panel - Takes 1/3 of the space on larger screens */}
                    <div className="md:w-1/3">
                        <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                                Your Cart
                            </h2>
                            
                            {cart.length === 0 ? (
                                <div className="py-8 text-center">
                                    <p className="text-gray-500">Your cart is empty</p>
                                    <p className="text-sm text-gray-400 mt-1">Add some products to get started!</p>
                                </div>
                            ) : (
                                <>
                                    <ul className="divide-y divide-gray-100 mb-4">
                                        {cartItems}
                                    </ul>
                                    <div className="pt-3 border-t border-gray-200">
                                        <div className="flex justify-between items-center text-lg font-bold">
                                            <span>Total:</span>
                                            <span className="text-blue-600">${cartTotal.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default ParentComp;