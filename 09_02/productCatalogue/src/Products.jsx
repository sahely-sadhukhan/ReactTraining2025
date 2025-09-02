function Products() {

    let products = [
        {id: 1, name: "Aloe Vera", price: 150, category: "Succulent"},
        {id: 2, name: "Snake Plant", price: 200, category: "Succulent"},
        {id: 3, name: "Peace Lily", price: 250, category: "Flowering"},
        {id: 4, name: "Spider Plant", price: 100, category: "Air Purifying"},
        {id: 5, name: "Gardening Tools", price: 300, category: "Accessories"},
        {id: 6, name: "Fertilizer", price: 120, category: "Accessories"}
    ];

    let pRows = products.map( (a) => 
        <tr key={a.id} className="hover:bg-green-50"> 
            <td className="border px-4 py-2">{a.id}</td>
            <td className="border px-4 py-2">{a.name}</td>
            <td className="border px-4 py-2">{a.price}</td>
            <td className="border px-4 py-2">{a.category}</td>
        </tr>
    );

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-green-600 text-white">
                        <tr>
                            <th className="px-4 py-3">Product ID</th>
                            <th className="px-4 py-3">Product Name</th>
                            <th className="px-4 py-3">Product Price</th>
                            <th className="px-4 py-3">Product Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pRows}
                    </tbody>
                </table>
        </div>
    );
}
export default Products;