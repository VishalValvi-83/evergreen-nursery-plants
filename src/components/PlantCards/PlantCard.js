import React from 'react'
import './PlantCard.css'

function PlantCard({ _id, name, image, description, price }) {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">₹{price}</h5>
                <span className='name fw-bold'>{name}</span>
                <p className="card-text">{description}</p>
                <button href="/" className="btn btn-primary">
                    Add to Cart
                </button>
            </div>
        </div>

    )
}

export default PlantCard