

import { useState, useEffect } from "react";


function Counter() {

  const [number, setNumber] = useState(40)
  // State Variable

  return (
    <div>Counter: {number}

      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <button onClick={() => setNumber(number - 1)}>Decrement</button>
    </div>
  )
}

export default Counter;