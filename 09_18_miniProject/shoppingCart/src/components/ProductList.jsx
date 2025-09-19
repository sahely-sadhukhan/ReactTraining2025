import { use, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import productService from "../services/productService";
import ProductCard from "./ProductCard.jsx";

function ProductList() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        setIsLoading(true);
        try {
            const response = await productService.getAll();
            if (response.status == 200 && response.data.length > 0) {
                setProducts(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setIsLoading(false);
        }
    }
    let productsArray = products.map( (prod) => <ProductCard key={prod.id} product={prod} viewProduct={true}/> );

    return (
        <div className="py-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Our Products</h2>

            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {productsArray}
                </div>
            )}
        </div>
    );
}
export default ProductList;