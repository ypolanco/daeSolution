import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { getAllFlavors } from '../services/flavors';
import { getAllFoods, createFood, deleteFood, updateFood } from '../services/foods';
import ShowFlavors from './ShowFlavors';
import ShowFoods from './ShowFoods';
import CreateFood from './CreateFood';
import UpdateFood from './UpdateFood';
import FoodItem from './FoodItem';

export default class Main extends Component {
  state = {
    flavors: [],
    foods: []
  }

  componentDidMount() {
    this.getFlavors();
    this.getFoods();
  }


  // ============================
  // ========== Flavors =========
  // ============================

  getFlavors = async () => {
    const flavors = await getAllFlavors();
    this.setState({ flavors });
  }

  // ============================
  // ========== Foods ===========
  // ============================

  getFoods = async () => {
    const foods = await getAllFoods();
    this.setState({ foods });
  }

  postFood = async (foodData) => {
    const newFood = await createFood(foodData);
    this.setState(prevState => ({
      foods: [...prevState.foods, newFood]
    }))
  }

  // Our putFood method shoudl follow a similar pattern that we're used to.
  // improt notes: we need an id and formData for our api call
  // For the setState, I referenced the frontend-CRUD-design lesson
  
  putFood = async (id, foodData) => {
    const updatedFood = await updateFood(id, foodData);
    this.setState(prevState => ({
      foods: prevState.foods.map(food => food.id === id ? updatedFood : food)
    }))
  }

  destroyFood = async (id) => {
    await deleteFood(id);
    this.setState(prevState => ({
      foods: prevState.foods.filter(food => food.id !== id)
    }))
  }

  render() {
    return (
      <main>
        <Route path='/user/login' render={(props) => (
          <Login
            {...props}
            handleLoginSubmit={this.props.handleLoginSubmit}
          />
        )} />
        <Route path='/user/register' render={(props) => (
          <Register
            {...props}
            handleRegisterSubmit={this.props.handleRegisterSubmit}
          />
        )} />
        <Route path='/flavors' render={() => (
          <ShowFlavors
            flavors={this.state.flavors}
          />
        )} />
        <Route exact path='/foods' render={(props) => (
          <ShowFoods
            {...props}
            foods={this.state.foods}
            currentUser={this.props.currentUser}
            destroyFood={this.destroyFood}
          />
        )} />
        <Route path='/new/food' render={(props) => (
          <CreateFood
            {...props}
            postFood={this.postFood}
          />
        )} />
        <Route path='/food/:id/edit' render={(props) => {
          // instead of implicitly returning righ away,
          // we are going to first grab the id of the food we want to update.
          // Then we are using the .find method to pull that food object
          // from our foods array in state. We can pass the whole food obj
          // to our UpdateFood component through props.
          const foodId = props.match.params.id;
          const food = this.state.foods.find(food => food.id === parseInt(foodId));
          return <UpdateFood
            {...props}
            food={food}
            putFood={this.putFood}
          />
        }} />
        <Route path='/foods/:id' render={(props) => {
          // similar to edit, we will grab the foodId 
          // from match.params. This time, we will
          // get the food from the backend with an
          // api call in order to get the associated
          // flavors
          const foodId = props.match.params.id;
          return <FoodItem
            foodId={foodId}
            flavors={this.state.flavors}
            currentUser={this.props.currentUser}
          />
        }} />
      </main>
    )
  }
}
