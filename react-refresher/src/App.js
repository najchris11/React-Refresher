import {useState} from 'react'

import Welcome from "./welcome";


function App() {
  // use state gives two values, a state value, and the method to change that state value
  const [show, setShow] = useState(true)
  const names = ['Jim', 'Jordan', 'Jared']
  
function toggle() {
  setShow(!show)
  console.log(show)
}

  return (
    <>
      <button onClick={toggle}> Show / Hide</button> 
      {
        show ?
        <div>
          {names.map((name, i) => <Welcome firstName = {name} key = {i} />)}
        </div>
        : null
      }
    </>
    
  );
}

export default App;
