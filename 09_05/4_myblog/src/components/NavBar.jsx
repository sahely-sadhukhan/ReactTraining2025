import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <h2>Welcome to My Blogs</h2>
            <Link to="/">Home Page</Link> | 
            <Link to="/blogs">Blogs</Link> | 
            <Link to="/contact">Contact Us</Link> | 
            <Link to="/Dashboard">Invalid</Link>
            <hr />
        </div>
    );
}
export default NavBar;