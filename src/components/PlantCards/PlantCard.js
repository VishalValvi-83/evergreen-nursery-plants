import React from 'react'
import './PlantCard.css'
import Edit from './edit.png'
import Delete from './delete.png'
import axios from 'axios'
import toast from 'react-hot-toast'

function PlantCard({ _id, name, image, description, price }) {
    const deletePlant = async (id) => {
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plant/${id}`)
        toast.success(response.data.message)
        window.location.reload() 
    }
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
                    <button href="/" className="btn">
                        Add to Cart
                    </button>
                </div>
                <div className='config-bnt'>
                    <button className='edit-btn ' > <img className='' src={Edit} alt='' /></button>

                    <button className='delete-btn ms-2' onClick={()=>{
                        deletePlant(_id)
                    }} >
                        <img className='' src={Delete} alt='' />
                    </button>

                </div>
            </div>
        </div>

    )
}

export default PlantCard