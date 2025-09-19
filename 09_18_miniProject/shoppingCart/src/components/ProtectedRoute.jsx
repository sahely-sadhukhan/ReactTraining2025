import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute(props) {

    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    //const [isAuthenticated, setIs] = useState(false); // Replace with actual authentication logic
    
    useEffect(() => {     
         checkUserToken();
     }, [isAuthenticated]);
 
 
     function checkUserToken()
     {		
         const userToken = sessionStorage.getItem('AUTH_TOKEN'); 
         if (!userToken || userToken === 'undefined') 
         {
            setIsAuthenticated(false);                
            return navigate('/login?returnUrl=' + props.returnUrl);
         }
         setIsAuthenticated(true);
     }
    
    // if (!isAuthenticated) {
    //     return <Navigate to="/Login" replace />;
    // }
    return (
        <>
            {
                isAuthenticated ? props.children : null
            }
        </>
    );
}
export default ProtectedRoute;