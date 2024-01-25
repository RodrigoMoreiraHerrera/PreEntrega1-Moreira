import React from 'react'
import './ItemListContainer.css'


const ItemListContainer = (props) => {
    return (
        <div className='conteiner'>
            <h2 id='greeting'>{props.greeting}</h2>
        </div>
    )
}

export default ItemListContainer;
