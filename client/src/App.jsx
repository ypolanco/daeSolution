import React from 'react'
import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import ProductCreate from './components/ProductCreate'
import ProductEdit from './components/ProductEdit'
import ProductDetail from './components/ProductDetail'
import FeatureBoard from './components/feature-board/FeatureBoard'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" render={props => <Home />} />
        <Route exact path="/products" render={props => <Products />} />
        <Route exact path="/add-product" render={props => <ProductCreate />} />
        <Route exact path="/products/:id/edit" component={ProductEdit} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/feature-board" render={props => <FeatureBoard />} />
      </Switch>
    </div>
  )
}

export default App