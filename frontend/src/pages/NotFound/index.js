import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Page = () => {
    return(
        <div className="not-found">
            <h1>Página não encontrada</h1>
            <Link to="/">Voltar parra a Home</Link>
        </div>
    )
}

export default Page