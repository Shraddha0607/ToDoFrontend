import React from 'react'
import './Card.css'

interface Props extends React.PropsWithChildren {
}

function Card(props: Props) {
    return (
        <div className='card'>
            {props.children}
        </div>
    )
}

export default Card

