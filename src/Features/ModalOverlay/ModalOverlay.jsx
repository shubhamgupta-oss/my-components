import React, { useState } from 'react';
import Pop from './Pop';
import './ModalOverlay.css'

function ModalOverlay(props) {
    const[isModal, setModal] = useState(false);
    const[offer, setOffer] = useState(false);


    function handelClickOffer(){
        setModal(true);
    }
    function handelClose(){
        setModal(false)
    }

    function handelAcceptoffer(){
        setOffer(true);
        setModal(false);
    }


    return (
        <div>

        <div className='container'>
            <div className="buttoncls">

            {offer ? <div className='offer-acp'>Offer Accepted</div> : <button onClick={handelClickOffer}>   Show Offer </button>}
            
            </div>
        </div>
        

        {
            isModal &&  <Pop close={handelClose} offerAccepted={handelAcceptoffer}/>
        }

        

   


        </div>
       
    );
}

export default ModalOverlay;