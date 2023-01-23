import React from 'react'
import "../styles/Button.css"

const Button = ({symbol, handleClick }) => {
  return (
	<div 
	onClick={() => handleClick(symbol)}
	className="button-wrapper">
		{symbol}
	</div>
  )
}

export default Button