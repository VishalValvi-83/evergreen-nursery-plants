import React from 'react'
import './PlantCard.css'

function PlantCard({ _id, name, image, description, price }) {
    return (
        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
            <div className="card">
                <div className="image-container">
                    <img src={image} className="card-image img-fluid" alt={name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">₹{price}</h5>
                    <span className='name fw-bold'>{name}</span>
                    <p className="card-text">{description}</p>
                    <button href="/" className="btn btn-primary">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

    )
}

export default PlantCard