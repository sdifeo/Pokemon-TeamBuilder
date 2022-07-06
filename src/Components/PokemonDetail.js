import React from 'react'
import Abilities from './Abilities'

const PokemonDetail = ({ selectedPokemon }) => {
    return (

        <div className='pokemon_detail'>

            {selectedPokemon !== undefined ?
                
                <div className='pokemon_detail__content'>
                    <h2>{selectedPokemon.name}</h2>
                    <img src={selectedPokemon.sprites.front_default}></img>

                    {selectedPokemon.abilities.map((item) =>
                        <h2>{item.ability.name}</h2>)}
                    
                    <div className=''>
                        <button>Add to team</button>
                    </div>

                </div>
                :
                <h3>Select a Pokemon!</h3>}

        </div>
    )
}

export default PokemonDetail