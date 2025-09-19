import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authReducer';
import { clearCart } from '../redux/cartReducer';

function Header() {
    
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const user = useSelector((state) => state.auth.user);
    
    // Create a more specific selector to ensure updates trigger re-renders
    const cartItems = useSelector((state) => state.cart.products);
    const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Debug useEffect to monitor cart changes
    // useEffect(() => {
    //     console.log("Cart updated in Header:", cartItems);
    //     console.log("New cart count:", cartCount);
    // }, [cartItems, cartCount]);
    
    

    function handleLogout(e) {
        e.preventDefault();
        dispatch(logout());
        dispatch(clearCart());
        navigate("/");
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 h-16 flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/" className="text-white text-2xl font-bold tracking-tight flex-shrink-0 hover:text-blue-100 transition-colors">
                        <span className="bg-white text-blue-600 px-2 py-1 rounded-md mr-1">T</span>
                        <span>Tiktok Store</span>
                    </Link>
                </div>

                <div className="flex items-center">
                    {isLoggedIn && user && user.name && (
                        <div className="mr-8 bg-blue-700 px-4 py-1.5 rounded-full flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">Welcome, {user.name}</span>
                        </div>
                    )}
                    
                    <nav className="flex space-x-8">
                        {!isLoggedIn && (
                            <Link to="/login" className="text-white hover:text-blue-200 transition-colors font-medium flex items-center">
                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                Login
                            </Link>
                        )}
                        <Link to="/" className="text-white hover:text-blue-200 transition-colors font-medium">
                            Home
                        </Link>
                        <Link to="/products" className="text-white hover:text-blue-200 transition-colors font-medium">
                            Products
                        </Link>
                        <div className="relative">
                            <Link to="/cart" className="text-white hover:text-blue-200 transition-colors font-medium flex items-center">
                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Cart
                            </Link>
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                        {isLoggedIn && (
                            <button 
                                className="text-white hover:text-blue-200 transition-colors font-medium flex items-center"
                                onClick={handleLogout}
                            >
                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                Logout
                            </button>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;