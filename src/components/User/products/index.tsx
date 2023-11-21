import React from 'react'
import LoadingBar from '../../../ui/Loading/LoadingBar'
import { useGetProductsQuery } from '../../../store/products/RTKProductSlice'
import ProductItem from './productItem/ProductItem'
import './style.css'
import { useAppSelector } from '@/hooks/useAppSelector'

function ProductList() {
  const { data, error, isLoading } = useGetProductsQuery()
  const user = useAppSelector((state) => state.auth.user?.user)

  return (
    <div className="master-wrapper-content mx-auto p-0">
      {isLoading ? (
        <LoadingBar height={'80vh'} size={50} />
      ) : !isLoading && error ? (
        <div
          className="text-center"
          style={{ fontWeight: 600, fontSize: '30px' }}
        >
          Error while getting the products
        </div>
      ) : (
        <div
          className="item-grid grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5 position-relative w-100 p-0"
          style={{ marginLeft: '1px' }}
        >
          {!isLoading &&
            data?.length &&
            data.map((product) => (
              <ProductItem
                id={product.id}
                category={product.category}
                title={product.title}
                images={product.images}
                stock={product.stock}
                brand={product.brand}
                ratingsQuantity={product.ratingsQuantity}
                description={product.description}
                price={product.price}
                priceDiscount={product.priceDiscount}
                summary={product.summary}
                details={product.details}
                imageCover={product.imageCover || ''}
                ratingsAverage={product.ratingsAverage}
                discount={product.discount}
                isNew={product.isNew}
                tfTransport={product.tfTransport}
                warranty={product.warranty}
                hasAccess={user?.role === 'admin'}
              />
            ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
