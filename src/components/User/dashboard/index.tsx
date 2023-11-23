import React from 'react'
import ProductList from '../products'
import SmallBanner from '@/assets/images/smallBaner.png'
import DashboardSlider from '@/ui/Sliders/DashboardSlider'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="" style={{ background: '#f7f7f7', opacity: '1' }}>
        <DashboardSlider />
        <div
          className="small-banner master-wrapper-content mx-auto pl-0 pr-0 "
          style={{
            marginTop: '-40px',
            borderRadius: '.5rem',
            overflow: 'hidden',
          }}
        >
          <img src={SmallBanner} alt="" className="w-100" />
        </div>
        <div className="p-3">
          <ProductList />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
