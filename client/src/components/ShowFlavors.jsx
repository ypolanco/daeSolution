import React from 'react'

export default function ShowFlavors(props) {
  const { flavors } = props;
  return (
    <>
    <hr />
      <h3>Flavors</h3>
      {
        flavors.map(flavor => (
          <p key={flavor.id}>{flavor.name}</p>
        ))
      }
    </>
  )
}
