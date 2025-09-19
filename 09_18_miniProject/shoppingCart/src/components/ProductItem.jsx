import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productService from "../services/productService";
import ProductCard from "./ProductCard";

function ProductItem() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchProduct();
    }, [id]);

    async function fetchProduct() {
        setIsLoading(true);
        try {
            const response = await productService.getById(id);
            if (response.status == 200 && response.data) {
                console.log("Product fetched:", response.data);
                setProduct(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch product:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Back to Products Link */}
                <div className="mb-6">
                    <Link to="/products" className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Products
                    </Link>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                    </div>
                ) : product ? (
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6 bg-blue-600 text-white">
                            <h1 className="text-2xl font-bold">{product.name}</h1>
                            <p className="text-blue-100 mt-1">Product Details</p>
                        </div>
                        
                        <div className="md:flex">
                            {/* Card Container - Limited width for better appearance */}
                            <div className="md:w-1/2 p-6">
                                <ProductCard key={product.id} product={product} viewProduct={false}/>
                            </div>
                            
                            {/* Additional Product Information */}
                            <div className="md:w-1/2 p-6 bg-gray-50 border-l border-gray-200">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">More Information</h2>
                                
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-500 mb-1">PRODUCT DESCRIPTION</h3>
                                    <p className="text-gray-700">{product.description}</p>
                                </div>
                                
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-500 mb-1">CATEGORY</h3>
                                    <p className="text-gray-700">{product.category}</p>
                                </div>
                                
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-500 mb-1">PRODUCT ID</h3>
                                    <p className="text-gray-700">{product.id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                        <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">Product Not Found</h2>
                        <p className="text-gray-600 mt-2">Sorry, we couldn't find the product you're looking for.</p>
                        <Link to="/products" className="mt-6 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                            Browse Products
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;