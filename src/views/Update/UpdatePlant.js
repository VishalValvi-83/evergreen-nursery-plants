import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

function UpdatePlant() {
  const { id } = useParams();
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)

  const toUpdatePlant = async () => {
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/plant/${id}`, {
      name,
      image,
      description,
      price
    })
    toast.loading("Loading")
    setTimeout(() => {
      toast.dismiss()
      toast.success(response.data.message)
    }, 1000)
  }
  const loadPlant = async (id) => {
    if (!id) {
      toast.error('Invalid ID')
      return
    }
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant/${id}`)

    const { name, image, price, description } = response.data.data
    setName(name)
    setImage(image)
    setPrice(price)
    setDescription(description)

  }
  useEffect(() => {
    loadPlant(id)
  }, [id])
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
        <button onClick={toUpdatePlant} className='btn'>Update Plant</button>
        <Link to="/" className='btn'>Visit All Plants</Link>
      </div>
    </div>
  )
}

export default UpdatePlant