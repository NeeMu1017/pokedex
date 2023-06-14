import React from 'react'
import '../Card/Card.css'

const Card = ({ pokename }) => {

    return (
        
        <div className="row">

            {
                pokename.map((item) => {
                    return (
                        <div className='card col-3'  >
                            <div className="d-flex justify-content-between" >
                                <span>{item.id}</span>
                                <div className='left'>{item.name}</div>
                                <div className='right'>Img</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card