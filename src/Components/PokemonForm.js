import React, { useState } from 'react'

const PokemonForm = ({setSelectedPokemon}) => {

    const [inputPokemonName, setInputPokemonName] = useState()

    const handleFormSubmit = (e) => {
        e.preventDefault()

        try{
            fetch("/api/pokemon/"+inputPokemonName)
            .then(res => res.json())
            .then(json => setSelectedPokemon(json))
            
        }
        catch (error){
            console.log(error)
        }

        
    }

    return (
        <div className='pokemon_form'>
            <form onSubmit={handleFormSubmit} className='pokemon_form__contents'>
                <input onChange={(e) => setInputPokemonName(e.target.value)} type="text" placeholder="Pokemon Name"></input>
                <div className='pokemon_form__btnSubmit'>
                    <button type='submit'>Search</button>
                </div>
            </form>

        </div>
    )
}

export default PokemonForm