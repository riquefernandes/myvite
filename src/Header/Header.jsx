import { useState, useEffect } from 'react'
import './Header.css'

function Header() {

    const [name, setName] = useState("seu nome")

    useEffect(() => {
        const namePrompt = prompt("Qual é o seu nome?")
        if (namePrompt) {
            setName(namePrompt)
        }
    }, [])

    return (

        <header className='header' >
            <div className='options' >
                <ul className='ul' >
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">App</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
            <div className='search' >

                <input id='searchBar' type="text" placeholder='Busque o seu produto' />

            </div>
            <div className='profile' >
                <span>{name}</span>



            </div>


        </header>


    )
}


export default Header