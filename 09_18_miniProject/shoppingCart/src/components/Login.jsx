import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productService from '../services/productService';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginFailure, loginSuccess } from '../redux/authReducer';
import { store } from '../redux/store';

function Login() {

    const [username, setUsername] = useState("");  
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    
    let navigate = useNavigate(); // for navigation using code
    let location = useLocation(); // for reading query string params

    //const User = useSelector((state) => state.auth.user);
    //const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    async function handleLoginClick(e) {
        e.preventDefault();
        setIsError(false);
        
        if( username.length === 0 || password.length === 0 ) {
            setIsError(true);
            return;
        }

        const queryString = location.search;
        let strReturnUrl = new URLSearchParams(queryString).get('returnUrl');
        if (strReturnUrl === null) strReturnUrl = '/';
        console.log(`Login.js: handleLoginClick: returnUrl=${strReturnUrl}`);
        
        try {
            const response = await productService.login(username, password);
            if (response !== null) {
                dispatch(loginSuccess(response));
                const currentState = store.getState();
                console.log("User after dispatch:", currentState.auth.user);
                console.log("isLoggedIn after dispatch:", currentState.auth.isLoggedIn);
                navigate(strReturnUrl);
            }
            else {
                console.error("Login failed");
                dispatch(loginFailure("Login failed. Please try again."));
                setIsError(true);
            }
        } catch (error) {
            console.error("Login error:", error);
            const errorMessage = error.response?.data?.message || 
                         error.message || 
                         "An unexpected error occurred";
                         
            dispatch(loginFailure(errorMessage));
            setIsError(true);
        }
    }

    return (
        <div className="w-full min-h-[calc(100vh-4rem)] bg-gradient-to-b from-blue-50 to-gray-100 flex justify-center items-center px-4">
            <div className="w-full max-w-lg mx-auto">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                    <div className="bg-blue-600 p-6 text-center">
                        <h2 className="text-white text-2xl font-bold">Welcome to Tiktok Store</h2>
                        <p className="text-blue-100 mt-2">Sign in to continue to your account</p>
                    </div>
                    
                    <div className="p-8">
                        <form>
                            <div className="mb-5">
                                <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">
                                    Username
                                </label>
                                <input 
                                    type="text" 
                                    value={username} 
                                    onChange={(event) => setUsername(event.target.value)} 
                                    id="username" 
                                    name="username" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Enter your username"
                                />
                            </div>
                        
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                                    Password
                                </label>
                                <input 
                                    type="password" 
                                    value={password} 
                                    onChange={(event) => setPassword(event.target.value)} 
                                    id="password" 
                                    name="password" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Enter your password"
                                />
                            </div>
                        
                            {isError && 
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded" role="alert">
                                    <p className="font-medium">Error</p>
                                    <p>Please enter valid credentials</p>
                                </div>
                            }
                        
                            <button 
                                onClick={handleLoginClick}
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                            >
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
                
                <p className="text-center text-gray-500 text-xs mt-6">
                    &copy; 2025 Tiktok Store. All rights reserved.
                </p>
            </div>
        </div>
    );
}
export default Login;