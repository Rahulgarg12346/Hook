import React , {useState} from 'react'

const App = () => {
  const[counter, setCounter] = useState(0)
  const[name, setName] = useState("")
  const[details ,  setDetails] = useState({ counter:0, name:''})
  function increasecounter (){
    setDetails((prev)=>({
      ...prev,
      counter: prev.counter +1
    }))
    setCounter(counter +1)
  }
  console.log(details)
  return (
    <div>
      <input type='text'onChange={e =>setName( e.target.value)}/>
      <h1>{name} has clicked {details.counter} times!!</h1>
      <button onClick={increasecounter} >increase</button>
    </div>
  )
}

export default App