import React, { useState } from 'react'
import './Addplant.css'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Addplant() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)

    const toAddPlant = async () => {

        if (!name || !image || !description || !price) {
            toast.error('All fields are required')
            return
        }
        toast.loading("Loading")

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/plant`, {
            name: name,
            image: image,
            description: description,
            price: price
        })

        toast.dismiss()
        toast.success(response.data.message)

        setDescription("")
        setName("")
        setPrice(0)
        setImage("")
    }
    return (
        <div className='form-container pt-4 container shadow'>
            <h2 className='form-title'>Add New Plant</h2>
            <div className='form-floating mb-3'>
                <input type="text" className='mb-3 form-control'
                    value={name} placeholder="Name"
                    onChange={(e) => setName(e.target.value)} />
                <label className='form-label'>Name</label>
            </div>
            {/* show preview image only when the url given othervise none */}


            <div className='preview-img-container'>
                {image && <img className='img-fluid preview-img' src={image} alt={name} />}
            </div>
            <div className='form-floating mb-3'>
                <input type="text" className='mb-3 form-control' value={image} placeholder="Image URL eg. https://example.com/images.jpg" onChange={(e) => setImage(e.target.value)} />
                <label className='form-label'>Image URL</label>
            </div>
            <div className='form-floating mb-3'>
                <textarea className='mb-3 form-control' rows='3' value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                <label className='form-label'>Description</label>
            </div>
            <div className='form-floating mb-3'>
                <input type="number" className='mb-3 form-control' value={price}
                    placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
                <label className='form-label'>Price</label>
            </div>
            <div className='d-flex px-2 justify-content-between' >
                <button onClick={toAddPlant} className='btn'>Add Plant</button>
                <Link to="/" className='btn'>Visit All Plants</Link>
            </div>
        </div>
    )
}

export default Addplant