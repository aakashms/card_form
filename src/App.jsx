import { useState } from 'react';

import './css/App.css'
import navImg1 from './assets/bg-card-back.png';
import navImg2 from './assets/bg-card-front.png';
import cardImg1 from './assets/card-logo.svg';
import cardImg2 from './assets/icon-complete.svg';

function App() {
  const [content, setContent] = useState(true);
  const [cardno,setCardno] = useState("0000 0000 0000 0000");
  const [holder,setHolder] = useState("Jane Appleseed");
  const [mm,setMm] = useState("00");
  const [yy,setYy] = useState("00");
  const [cvc,setCvc] = useState("000");

  const formatCardNumber = (value) => {

    const formattedValue = value.replace(/\D/g, '');

    const regex = /(\d{4})(?=\d)/g;
    return formattedValue.replace(regex, '$1 ');
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    const formattedValue = formatCardNumber(value);
    setCardno(formattedValue);
  };

  const handleSubmit = () =>{
    setContent(false);
    
  }

  return (
    
    <div className='page'>
      <header className='header'>
        <img src={navImg1}  className='nav-img-back'/>
        <p className='bk-img-text'>{cvc}</p>
        <img src={navImg2}  className='nav-img-front'/>
        <img src={cardImg1} className='card-img' />
        <p className='card-no'>{cardno}</p>
        <p className='holder' >{holder}</p>
        <p className='expiry'>{mm}/{yy}</p>

      </header>

      <main>

      { content?  (
        <form onSubmit={handleSubmit} >
        <label for='holder-name'>Cardholder Name</label>
        <input type='text' placeholder='e.g. Jane Appleseed' name='name' id='holder-name' onChange={(e)=> setHolder(e.target.value)} required/>
        <label for='card-num'>Card Number</label>
        <input type='text' placeholder='e.g. 1234 5678 9123 0000' name='card-no' id='card-num' maxLength={19} onChange={handleCardNumberChange} pattern="\d{4} \d{4} \d{4} \d{4}"
              title="Wrong format, numbers only" required/>
        

        <div className='expire-field'>
          <div>
            <label for='card-num'>Exp. Date (MM/YY)</label>
              <div className='nowrap' >
                <input type='text' placeholder='MM' name='expire' id='expire-mm' onChange={(e)=>setMm(e.target.value)} pattern="(0[1-9]|1[0-2])"
                    title="Can't be blank (01 to 12)" required/>
                <input type='text' placeholder='YY' name='expire' id='expire-yy' onChange={(e)=>setYy(e.target.value)} pattern="\d{2}"
                    title="Can't be blank (00 to 99)" required/>
              </div>
          </div>

          <div className='cvc'>
            <label for='card-num'>cvc</label>
            <input type='text' placeholder='e.g. 123' name='expire' id='cvc' onChange={(e)=>setCvc(e.target.value)} pattern="\d{3}"
                  title="Can't be blank (3 digits)" required/>
          </div>
          
        </div>
        <button type='submit' className='btn'>Confirm</button>
        </form>
      ):(
        <div className='success'>
          <img src={cardImg2} />
          <h1>THANK YOU!</h1>
          <p id='msg'>We've added your card details</p>
          <button className='btn ctn' onClick={()=>{setContent(true)}}>Continue</button>
        </div>
      )
      }
      
      </main>
    </div>
  )
}

export default App
