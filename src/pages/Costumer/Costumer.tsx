import React, { useEffect, useState } from 'react'
import './costumer.css'
import { useParams } from 'react-router-dom'
import Sidebar from '../../components/User/Customer/Sidebar'
import UserInfo from '../../components/User/Customer/DetailView/UserInfo'
import Addresses from '../../components/User/Customer/DetailView/Addresses'
import Orders from '../../components/User/Customer/DetailView/Orders'
import WrapperWIthSpacing from '../../ui/WrapperWIthSpacing'
import WrappingCard from '../../ui/WrappingCard'
import UserInfoHeader from '../../components/User/Customer/DetailView/Header/UserInfoHeader'
import AddressesHeader from '../../components/User/Customer/DetailView/Header/AddressesHeader'
import AddressForm from '../../components/User/Customer/DetailView/Addresses/AddressForm'
import OrderDetails from '../../components/User/Customer/DetailView/Orders/OrderDetails'
import ReturnRequests from '@/components/User/Customer/DetailView/ReturnRequests'
import ReturnedProducts from '@/components/User/Customer/DetailView/ReturnedProducts'
import ProductReview from '@/components/User/Customer/DetailView/ProductReview'
import Wishlist from '@/components/User/Customer/DetailView/Wishlist'

const Costumer = () => {
  const { type } = useParams()
  const [activeLink, setActiveLink] = useState<string>(type ?? '')

  const handleLinkClick = (link: string) => {
    setActiveLink(link)
  }

  let headerComponent
  let contentComponent

  switch (type) {
    case 'info':
      contentComponent = <UserInfo />
      headerComponent = <UserInfoHeader />
      break
    case 'addresses':
      contentComponent = <Addresses />
      headerComponent = <AddressesHeader />
      break
    case 'add-address':
      contentComponent = <AddressForm />
      headerComponent = 'Add new address'
      break
    case 'orders':
      contentComponent = <Orders />
      // headerComponent = <OrdersHeader />
      break
    case 'orderdetails':
      contentComponent = <OrderDetails />
      // headerComponent = <OrderDetailsHeader />
      break
    case 'wishlist':
      contentComponent = <Wishlist />
      break
    case 'return-requests':
      contentComponent = <ReturnRequests />
      break
    case 'productreviews':
      contentComponent = <ProductReview />
      break
    case 'returned-products':
      contentComponent = <ReturnedProducts />
      break
    default:
      contentComponent = <div>Invalid type</div>
  }
  return (
    <WrapperWIthSpacing>
      <div className="costumer-sidebar__container shadow-md">
        <WrappingCard padding="12px">
          <Sidebar onLinkClick={handleLinkClick} activeLink={activeLink} />
        </WrappingCard>
      </div>
      <div className="costumer-main ">
        {contentComponent.type.name === 'Orders' ||
        contentComponent.type.name === 'Addresses' ||
        contentComponent.type.name === 'OrderDetails'
          ? contentComponent
          : contentComponent}
      </div>
    </WrapperWIthSpacing>
  )
}

export default Costumer
