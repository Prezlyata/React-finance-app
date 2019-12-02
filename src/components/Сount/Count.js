import React, { Component } from 'react';
import './Count.css';

const Count = ({ onHandleChangeСurrency, onHandleSum, onHandleTax, total }) => {
	return (
		<div className="tableRate">
			<div className="select">
				<select onChange={(e) => onHandleChangeСurrency(e)}>
					<option value="0">UAH</option>
					<option value="1">USD</option>
					<option value="2">EUR</option>
				</select>
			</div>
			<div className='displayInput'>
				<input className="input" placeholder="sum" onChange={(e) => onHandleSum(e)} />
				<input className="input" placeholder="tax" onChange={(e) => onHandleTax(e)} />
				<div>{total}<span> UAH</span></div>
			</div>
		</div>
	);
};

export default Count;
