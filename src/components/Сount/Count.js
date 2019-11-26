
import React, {Component} from 'react';
import './Count.css';

const Count =({onChangeСurrency, onHandleSum, onHandleTax, onTotal}) => {
    return ( 
        <div >
            <div>
                <select onChange={(e) => onChangeСurrency(e)}>
                    {/* <option>UAH</option> */}
                    <option value="1">USD</option>
                    <option value="2">EUR</option>
                </select>
                </div>
            <div>
                <input className="input" placeholder="sum" onChange={(e)=> onHandleSum(e)}/>
                <input className="input" placeholder="tax" onChange={(e) => onHandleTax(e)}/>
                <input className="input" placeholder="total" />
                <div>{onTotal}</div>
            </div>
        </div>
    );
}

export default Count;