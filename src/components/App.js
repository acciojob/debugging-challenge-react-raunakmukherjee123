import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0)

  return (
    <div class="ball">
      <h1 classNmae="count" onDoubleClick={() => { alert("cant edit it") }}>{count}</h1>
      <button className='increment-button' onClick={() => { setCount(count + 1) }}>Increment</button>
    </div>
  )
}


export default App;
