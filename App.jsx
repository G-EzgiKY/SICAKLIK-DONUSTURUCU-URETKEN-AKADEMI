import { useState } from 'react'

import './App.css'

function App() {
  
  const [count, setCount] = useState(0)

  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('Input değeri : ', event.target.value);

  }

  return (
    <>
      <h1 className='inputstill'>CELSIUS DEĞERİNİ AŞAĞIYA GİRİNİZ</h1>

      <input className='inputstillTwo'
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        
      />

      <br />
      <br />
      <br />
      <button className='still'>KELVIN</button>

      <h2 
      style={{textAlign:"center",
      backgroundColor:"lightcyan",
      border:"3px solid #cbcb", 
      borderRadius:"10px",
      color:"rgb(230, 116, 216)"}}
      >SONUÇ: {Number(message) +273} 
      </h2>

      <br />
      <br />
      
      <button  className='stillTwo'>FAHRENHEIT</button>
      <h2 
      style={{textAlign:"center",
      backgroundColor:"rgb(260, 160, 230)",
      border:"3px solid #cbcb", 
      borderRadius:"10px",
      color:"rgb(135, 237, 255)"}}
      >SONUÇ: {Number(message)*9/5+32}
      </h2>


      
        
    </>
  )
}

export default App
