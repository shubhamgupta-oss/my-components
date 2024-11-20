import React, { useEffect, useRef, useState } from "react";
import './OtpScreen.css';

export default function OtpScreen() {
    const [input, setInput] = useState(new Array(4).fill(""));
    const[inputsArr, setInputArr] = useState(input);
    const ref = [useRef(), useRef(), useRef(), useRef()];
    const HandelInput = (e, index) => {
        const value =  e.target.value;
        if(!Number(value)){
            return;
        }
        const copy = [...inputsArr];
        copy[index] = value;
        setInputArr(copy)

        if(index < inputsArr.length-1){
        ref[index+1].current.focus(); 
        }

    }

    
    useEffect(()=>{
       ref[0].current.focus();

    },[])


    const handelKey = (e, index) =>{
        if(e.keyCode == 8){
            const copy  = [...inputsArr];
            copy[index] = "";
            setInputArr(copy);
            if(index > 0){
                ref[index-1].current.focus();
            }
        }
        if(e.keyCode == 39){
            if(index < inputsArr.length-1){
                ref[index+1].current.focus(); 
            }
        }
        if(e.keyCode == 37){
            if(index > 0){
                ref[index-1].current.focus(); 
            }
        }
    }


    return (
        <>
            <div className="mainBody">

                <div className="childBody">
                    <h2>ENTER YOUR OTP</h2>
                    {
                        input.map((curValue, index)=>{
                          return  <input maxLength="1" value={inputsArr[index]} ref={ref[index]} key={index} type="text" 
                          onChange={(e)=>{HandelInput(e, index)}}
                          onKeyDown={(e)=>handelKey(e, index)}/>
                        }) 
                    }
                   
                  <br />
                    <button>Submit</button><br />
                    <span>Resend in 60 sec</span>
                </div>

            </div>

        </>
    );
}
