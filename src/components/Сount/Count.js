import React, { Component } from 'react';
import './Count.css';

const Count = ({ onHandleChangeСurrency, onHandleSum, onHandleTax, total }) => {
	return (
		<div>
			<div>
				<select onChange={(e) => onHandleChangeСurrency(e)}>
					{/* <option>UAH</option> */}
					<option value="1">USD</option>
					<option value="2">EUR</option>
				</select>
			</div>
			<div>
				<input className="input" placeholder="sum" onChange={(e) => onHandleSum(e)} />
				<input className="input" placeholder="tax" onChange={(e) => onHandleTax(e)} />
				<input className="input" placeholder="total" />
				<div>{total}</div>
			</div>
		</div>
	);
};

export default Count;
