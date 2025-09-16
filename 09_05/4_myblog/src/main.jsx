import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import NotFound from './NotFound.jsx';
import Blog from './components/blogs/Blog.jsx';
import Post from './components/blogs/Post.jsx';
import Contact from './components/Contact.jsx';


const routing = (
  <BrowserRouter>

    <Navbar />

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/blogs" element={<Blog />} >
        {/*<Route index element={<Profile />} /> */}
        <Route path="posts" element={<Post />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    {routing}
  </StrictMode>,
)
