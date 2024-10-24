import React from 'react'
import Header from '../../Componets/Header/Header'
import Slider1 from '../../Componets/Slider/Slider'
import Card1 from '../../Componets/Card1/Card1'
import './Trendy.css'
import FeaturedCat from '../../Componets/FeaturedCat/FeaturedCat'
import AllProducts from '../../Componets/Products/AllProducts'
import { Footer } from 'antd/es/layout/layout'
import { FooterText } from '../../utilys/FooterText'

const Tendy = () => {
  return (
    <div className='container1' >
      <Header />
      
      <Slider1 />
      <Card1 />
      <FeaturedCat />
      <AllProducts />
     
    </div>
  )
}

export default Tendy
