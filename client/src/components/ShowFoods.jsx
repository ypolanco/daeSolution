import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowFoods(props) {
  const { foods, currentUser, destroyFood, history } = props;
  return (
    <>
      <hr />
      <h3>Foods</h3>
      {
        foods.map(food => (
          <React.Fragment key={food.id}>
            {/* small change:  we made the p tags into links to the food item route */}
            <Link to={`/foods/${food.id}`}>{food.name}</Link>
            {
              currentUser && currentUser.id === food.user_id && (
                <>
                  {/* our edit button just needs to route us to the edit component */}
                  {/* we also need to interpolate the id in the route */}
                  <button onClick={() => history.push(`/food/${food.id}/edit`)}>edit</button>
                  <button onClick={() => destroyFood(food.id)}>delete</button>
                </>
              )
            }
            <br/>
          </React.Fragment>
        ))
      }
      <br />
      <Link to='/new/food'><button>Create</button></Link>
    </>
  )
}
