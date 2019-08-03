import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const EditarGenero = ({match}) => {
    const [name, setName] = useState('')
    const [sucess, setSucess] = useState(false)

    useEffect(() => {
        axios
        .get('/api/genres/' + match.params.id)
        .then(res => {
            setName(res.data.name)
        })

    },[match.params.id])

    const onChange = evt => {
        setName(evt.target.value)
    }
    const save = () => {
        axios
        .put('/api/genres/' + match.params.id, {
        name
        })
        .then (res => setSucess(true))
    }

    if(sucess) {
        return <Redirect to = '/generos'/>
    }

    return (
        <div className = 'container'>
            <h1>Editar Gênero</h1>
            <form>
                <div class='form-group'>
                    <label Htmlfor='name'>Nome</label>
                    <input type='text' value = {name} onChange = {onChange} className='form-control' id='name' placeholder='Nome do Gênero'/>
                </div>
                <button type = 'button' onClick = {save} className = 'btn btn-primary'>Salvar</button>
            </form>
        </div>
    )
}

export default EditarGenero