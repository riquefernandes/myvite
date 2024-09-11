import { useState } from 'react'
import './Section.css'


function Section(){

const [count, setCount] = useState(0)

const teste = ()=>{
    setCount(oi => oi + 1)
}

return (

    <>
    <button onClick={teste} >teste</button>
    <p>{count}</p>

    </>



)}


export default Section