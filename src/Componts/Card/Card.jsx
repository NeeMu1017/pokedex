import React from 'react'
import '../Card/Card.css'

const Card = ({ pokename }) => {

    return (

        <div className="row">

            {
                pokename.map((item,index) => {
                    return (
                        <div className='card col-2' key={index}  >
                            <div >
                                
                                <div className='left'>{item.name}</div>
                                <img
                                    height={138}
                                    width={128}
                                    className='right'
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${item.id }.png`} />

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card