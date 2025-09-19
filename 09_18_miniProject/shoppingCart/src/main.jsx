import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import NotFound from './components/NotFound.jsx';
import ProductList from './components/ProductList.jsx';
import ProductItem from './components/ProductItem.jsx';
import Cart from './components/Cart.jsx';
import Login from './components/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

const routing = (
  <Provider store={store}>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow w-full pt-16">
          <div className="container mx-auto px-4">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={
                <ProtectedRoute returnUrl="/cart">
                  <Cart />
                </ProtectedRoute>
              } />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductItem />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  </Provider>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {routing}
  </StrictMode>
)
