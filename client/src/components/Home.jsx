import React from 'react'
import './Home.css'
import ProductCards from './ProductCards'
import Layout from './shared/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <ProductCards />
      </div>
    </Layout>
  )
}

export default Home