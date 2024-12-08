import React from 'react';

function Pop({close, offerAccepted}) {

    function handelBox(e){
        if(e.target.className === 'modal'){
        close()
        }
    }

    
    return (
        <div className='modal' onClick={handelBox}>
            <div className='offer-pop'>
                <button 
                onClick={close}
                className='cls-btn'
                >X</button>
                <div className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <button onClick={offerAccepted} className='act-btn'>Accept Offer</button>
            </div>

        </div>
    );
}

export default Pop;