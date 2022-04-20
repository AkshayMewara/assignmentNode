import axios from "axios";
import React, { useState } from "react"

import './App.css';

function App() {
const [ sent, setSent ] = useState(false)
const [ text, setText ] = useState("")

const handleSend = async() => {
  // setSent(true)
  try {
    setSent(true);
    await axios.post("http://localhost:4000/api/v1/send-email",
    {
      text,
    });
  }
  catch(error){
    console.log(error)
  }
};

  return (
    <div className="App">
      { !sent ?  (
      <form onSubmit={handleSend}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value) }/>
        <button type="submit">Send</button>
      </form>
      ) : (
          <h1>Email Sent</h1>
      )
    }
    

    </div>
  );
}

export default App;
