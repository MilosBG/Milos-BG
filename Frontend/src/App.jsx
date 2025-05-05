import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './components/layout/UserLayout';
import {Toaster} from 'sonner';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Conditions from './pages/Conditions';
import Contact from './pages/Contact';
import MentionsLégales from './pages/MentionsLégales';
import Politiques from './pages/Politiques';
import Profile from './pages/Profile';
import Outfits from './pages/Outfits';
import MilosBG from './pages/MilosBG';
import ProductDetails from './components/products/ProductDetails';
import Checkout from './components/cart/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import OrderDetails from './pages/OrderDetails';
import MyOrdersPage from './pages/MyOrdersPage';
import SizesGuide from './pages/SizesGuide';
import AdminLayout from './components/admin/AdminLayout';
import AdminHome from './pages/AdminHome';
import UserManagement from './components/admin/UserManagement';
import ProductManagement from './components/admin/ProductManagement';
import EditProduct from './components/admin/EditProduct';
import OrderManagement from './components/admin/OrderManagement';

import { Provider } from "react-redux";
import store from './redux/store';
import ProtectedRoute from './components/common/ProtectedRoute';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter future={{v7_startTransition: true , v7_relativeSplatPath: true }} >
        <Toaster position="top-right" />
        <Routes>
          {/* USER LAYOUT LINKS */}
          <Route path="/" element={<UserLayout/>}>
          {/* HOME */}
            <Route index element={<Home/>} />
          {/* HOME */}
            <Route path='milos-bg' element={<MilosBG/>} />
          {/* FOOTER LINKS */}
            <Route path='conditions' element={<Conditions/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='mentions-légales' element={<MentionsLégales/>} />
            <Route path='politiques' element={<Politiques/>} />
          {/* USER LINKS */}
            <Route path='login' element={<Login/>} />
            <Route path='register' element={<Register/>} />
            <Route path='profile' element={<Profile/>} />
          {/* SHOP LINKS */}
            <Route path='outfits/:outfit' element={<Outfits/>} />
            <Route path='product/:id' element={<ProductDetails/>} />
            <Route path='checkout' element={<Checkout/>} />
            <Route path='order-confirmation' element={<OrderConfirmation/>} />
            <Route path='order/:id' element={<OrderDetails/>} />
            <Route path='my-orders' element={<MyOrdersPage/>} />
            <Route path='sizes-guide' element={<SizesGuide/>} />
  
          </Route>
          
          {/* ADMIN LAYOUT LINKS */} 
          <Route path='/admin' element={
          <ProtectedRoute role="admin">
            <AdminLayout/>
          </ProtectedRoute>}> 

              <Route index element={<AdminHome/>}/> 
              <Route path='users' element={<UserManagement/>}/>
              <Route path='products' element={<ProductManagement/>}/>
              <Route path='orders' element={<OrderManagement/>}/>
              <Route path='products/:id/edit' element={<EditProduct/>}/>
          </Route>
        
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
