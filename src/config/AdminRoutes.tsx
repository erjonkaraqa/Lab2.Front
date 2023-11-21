import React from 'react'
import CreateProduct from '@/components/Admin/product'
import Footer from '@/components/User/Footer'
import Header from '@/components/User/Header/Header'
import { useAppSelector } from '@/hooks/useAppSelector'
import { Routes, Route, Navigate } from 'react-router-dom'
import UpdateProduct from '@/components/Admin/product/updateProduct'
import ReturningRequests from '@/components/Admin/ReturningRequests'
import Orders from '@/components/Admin/Orders'

const AdminRoutes = () => {
  const { user } = useAppSelector((state) => state.auth)

  if (user?.user && user.user.role !== 'admin') {
    return <Navigate to="/access-denied" />
  }
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<h1 className="text-center p-5">Admin dashboard here</h1>}
        />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} />
        <Route path="/return-requests" element={<ReturningRequests />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </>
  )
}

export default AdminRoutes
