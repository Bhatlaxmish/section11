import React from 'react'
import './Mealitem.css';
export default function MealItem(props) {
  return (
    <div className=".meal">
         <h3>{props.name}</h3>
      <div className=".description">
        {props.description}
      </div>
      <div className="price">
        {props.price}
      </div>
    </div>
  )
}
