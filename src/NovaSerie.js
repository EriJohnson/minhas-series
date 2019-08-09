import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovaSerie = () => {
    const [name, setName] = useState('')
    const [sucess, setSucess] = useState(false)

    const onChange = evt => {
        setName(evt.target.value)
    }
    const save = () => {
        axios
        .post('/api/series', {
        name
        })
        .then (res => setSucess(true))
    }

    if(sucess) {
        return <Redirect to = '/series' />
    }

    return (
        <div className = 'container'>
            <h1>Nova Serie</h1>
            <form>
                <div class='form-group'>
                    <label Htmlfor='name'>Nome</label>
                    <input type='text' value = {name} onChange = {onChange} className='form-control' id='name' placeholder='Título da Série'/>
                </div>
                <button type = 'button' onClick = {save} className = 'btn btn-primary'>Salvar</button>
            </form>
        </div>
    )
}

export default NovaSerie