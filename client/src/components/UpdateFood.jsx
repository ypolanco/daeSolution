import React, { Component } from 'react'

export default class UpdateFood extends Component {
  state = {
    name: ""
  }

  // Our update component is very similar to our Create
  // component except that we have additional methods to
  // set the form data for the item in state that we want to update.

  // componentDidMount will set our form data when the component renders
  // however if we refresh the page on the form, the food wont exist yet.
  // This is why we only setFoodForm inside of the conditional.
  componentDidMount() {
    if (this.props.food) {
      this.setFoodForm();
    }
  }
  
  // componentDidUpdate only gets triggered when we refresh the page on the form.
  // the food props wont be there when the component first mounts but will
  // "arrive" a moment later. componentDidUpdate will see this and then setFoodForm.
  componentDidUpdate(prevProps) {
    if (prevProps.food !== this.props.food) {
      this.setFoodForm();
    }
  }

  // setFoodForm just grabs the food passed from props and sets state
  setFoodForm = () => {
    const { name } = this.props.food;
    this.setState({ name })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  }

  render() {
    const { name } = this.state;
    const { putFood, history, food } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        putFood(food.id, this.state);
        history.push('/foods');
        this.setState({
          name: ""
        })
      }}>
        <hr />
        <h3>Update Food</h3>
        <label htmlFor="name">Name:</label>
        <input
          id="id"
          type="text"
          value={name}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
