import React from 'react'
import "../styles/Calculator.css"
import Button from './Button';
import Input from './Input';
import { useState } from 'react'

const Calculator = () => {
	const [text, setText] = useState("");
	const [result, setResult] = useState("0");

	var num1 = 0;
	var num2 = 0;
	let sum = text;

	const actions = ['/', '*', '+', '-', '.'];
	const addtoText = (val) =>{
		const limit =  40;
		if(
			actions.includes(val) & text === '' ||
			actions.includes(val) & actions.includes(text.slice(-1))
		){
			return;
		}
		if(text.toString().length > limit -1){
			return;
		}
		setText(text + val);
	}

	const resetInput = () =>{
		setText("");
		setResult("0");
	}

	const hexToDecimal = hex => parseInt(hex, 16);

	const re = /[/*+-.]/g;

	const setValue = () =>{
		if(text === ''){
			setResult("Input needed");
			return;
		}
		let value = text.split(re);

		num1 = value[0];
		num2 = value[1];

		num1 = hexToDecimal(num1);
		num2 = hexToDecimal(num2);

		if(text.includes('+')){
			sum =  num1 + num2;
		}
		else if(text.includes('/')){
			if(num2 !== 0){
				sum =  num1 / num2;
			}
			else{
				sum = "ERROR";
			}
		}
		else if(text.includes('*')){
			sum =  num1 * num2;
		}
		else if(text.includes('-')){
			sum =  num1 - num2;
		}
		sum = sum.toString(16).toUpperCase() ;
		sum = handleMax(sum);
		setResult(sum);
		setText(sum);
	}

	const handleMax = event => {
		const limit = 15;
		if(event.length <= limit){
			return event;
		}
		event = "ERROR";
		return event;
	};



	return (
		<div className="calculator">
			<div className="wrapper">
			<Input text={text} result={result}  />
			<div className="row1">
					<Button symbol="=" handleClick={setValue} />
					<Button symbol="/" handleClick={addtoText} />
					<Button symbol="*" handleClick={addtoText} />
					<Button symbol="+" handleClick={addtoText} />
					<Button symbol="-" handleClick={addtoText} />
				</div>
			<div className="row">
					<Button symbol="A" handleClick={addtoText} />
					<Button symbol="B" handleClick={addtoText} />
					<Button symbol="C" handleClick={addtoText} />
					<Button symbol="D" handleClick={addtoText} />
					<Button symbol="E" handleClick={addtoText} />
					<Button symbol="F" handleClick={addtoText} />
				</div>
				<div className="row">
					<Button symbol="5" handleClick={addtoText} />
					<Button symbol="6" handleClick={addtoText} />
					<Button symbol="7" handleClick={addtoText} />
					<Button symbol="8" handleClick={addtoText} />
					<Button symbol="9" handleClick={addtoText} />
				</div>
				<div className="row">
					<Button symbol="0" handleClick={addtoText} />
					<Button symbol="1" handleClick={addtoText} />
					<Button symbol="2" handleClick={addtoText} />
					<Button symbol="3" handleClick={addtoText} />
					<Button symbol="4" handleClick={addtoText} />
				</div>
				<div className="row">
					<div className="column">
					<Button symbol="." handleClick={addtoText} />
					</div>
					<div className="Clear">
					<Button symbol="Clear" handleClick={resetInput} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Calculator