function StoreInfo() {
    let store = { location: "San Francisco, CA", founded: 2023, rating: 4.8 }
    
    return (
        <div className="bg-green-50 p-4 rounded-lg shadow-md max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Store Information</h3>
            <div className="space-y-2">
                <p className="flex items-center">
                    <span className="font-medium text-green-700 w-32">Location:</span> 
                    <span className="text-gray-700">{store.location}</span>
                </p>
                <p className="flex items-center">
                    <span className="font-medium text-green-700 w-32">Founded:</span> 
                    <span className="text-gray-700">{store.founded}</span>
                </p>
                <p className="flex items-center">
                    <span className="font-medium text-green-700 w-32">Customer Rating:</span> 
                    <span className="text-yellow-600 font-semibold">{store.rating} 
                        <span className="text-yellow-500 ml-1">★★★★★</span>
                    </span>
                </p>
            </div>
        </div>
    );
}
export default StoreInfo;