import React from 'react'
import './Button.css';
import CartIcon from '../components/CartIcon';
export default function Button() {
  return (
    <button className="button">
      <span className="icon"> <CartIcon/></span>
      <span className="badge">bag</span>
      <span className="bump">2354</span>
    </button>
  )
}
