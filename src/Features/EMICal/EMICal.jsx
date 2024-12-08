import React, { useEffect, useState } from 'react';
import './EMICal.css';

function EMICal() {
    const [emi, setEmi] = useState(0);
    const [principal, setPrincipal] = useState(0);
    const [interest, setInterest] = useState(0);
    const [loanLength, setLoanLength] = useState(0);

    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === 'Principal') {
            setPrincipal(Number(value));
        } else if (id === 'Interest') {
            setInterest(Number(value));
        } else if (id === 'Length') {
            setLoanLength(Number(value));
        }
    };

    function calculateValue() {
        if (principal > 0 && interest > 0 && loanLength > 0) {
            const r = interest / 12 / 100; 
            const n = loanLength*12; 
            const denominator = Math.pow(1 + r, n) - 1;
            if (denominator !== 0) {
                const emiValue = (principal * r * Math.pow(1 + r, n)) / denominator;
                setEmi(Math.round(emiValue)); 
            } else {
                setEmi(0);
            }
        } else {
            setEmi(0); 
        }
    }
    

    useEffect(() => {
        calculateValue();
    }, [principal, loanLength, interest]);

    return (
        <div className='container'>
            <div className='box-Contenor'>
                <div className='heading'>
                    <h1>EMI Calculator</h1>
                </div>
                <div className='InputDiv'>
                    <label htmlFor='Principal'>Principal loan amount</label>
                    <input onChange={handleChange} type='number' id='Principal' />
                    <label htmlFor='Interest'>Interest rate (%)</label>
                    <input onChange={handleChange} type='number' id='Interest' />
                    <label htmlFor='Length'>Length of loan (Years)</label>
                    <input onChange={handleChange} type='number' id='Length' />
                </div>
                <div className='resultEMI'>
                    <span>Your monthly EMI payment will be: {emi}</span>
                </div>
            </div>
        </div>
    );
}

export default EMICal;
