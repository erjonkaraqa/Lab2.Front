import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Dashboard from '../components/User/dashboard'
import { useAppSelector } from '@/hooks/useAppSelector'
import ScrollToTop from '@/ui/ScrollToTop'
import LoginPage from '@/auth/pages/LoginPage'
import RegisterPage from '@/auth/pages/SignupPage'
import ForgotPassword from '@/auth/pages/ForgotPassword'
import ResetPassword from '@/auth/pages/ResetPassword'
import ProductItem from '@/pages/ProductItem/ProductItem'
import AccessDenied from '@/auth/pages/AccessDenied'
import ChangePassword from '@/auth/pages/ChangePassword'
import Cart from '@/Cart/pages/Cart'
import Wishlist from '@/components/User/Customer/DetailView/Wishlist'
import NotFound from '@/pages/NotFound'
import Footer from '@/components/User/Footer'
import Customer from '../pages/Costumer/Costumer'
import Header from '@/components/User/Header/Header'
import CheckoutCompleted from '@/pages/CheckoutCompleted'
import OnePageCheckout from '@/pages/OnePageCheckout'
import SearchComponent from '@/pages/SearchPage'
import SearchByCategory from '@/pages/SearchByCategory'

const UserRoutes = () => {
  const isUserAuthenticated = useAppSelector((state) => state.auth.user)
  const currentPath = useLocation().pathname

  const isLoginPage =
    currentPath.startsWith('/login') ||
    currentPath === '/register' ||
    currentPath.startsWith('/forgotPassword') ||
    currentPath.startsWith('/resetPassword') ||
    currentPath.startsWith('/changePassword')
  const showHeaderAndFooter = !isLoginPage
  return (
    <>
      {showHeaderAndFooter && <Header />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login/:type" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route path="/product/:id" element={<ProductItem />} />
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="/search" element={<SearchComponent />} />
        <Route
          path="/:categoryGroup?/:category?"
          element={<SearchByCategory />}
        />

        {isUserAuthenticated ? (
          <>
            <Route path="/checkout/completed" element={<CheckoutCompleted />} />
            <Route path="/onepagecheckout" element={<OnePageCheckout />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/customer/:type/:id?" element={<Customer />} />
          </>
        ) : (
          <Route path="*" element={<NotFound />} />
        )}
      </Routes>
      {showHeaderAndFooter && <Footer />}
    </>
  )
}

export default UserRoutes
