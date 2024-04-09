import React, {useState, useEffect} from 'react'

const Effet = () => {
    const [count, setCount] = useState(0)
    const [othercount, setothercount]= useState(5);

    useEffect(()=>{
        document.title = `${othercount} new messages!`
    },[othercount]);
  return (
    <div>
        <h1>{count} New messages!</h1>
        <button onClick={()=>setCount(count+1)}>increase</button>
        <h3>othercount: {othercount}</h3>
        <button onClick={()=>setothercount(othercount +5)}>increase by 5</button>
    </div>
  )
}

export default Effet