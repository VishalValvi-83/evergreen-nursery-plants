import React, { useEffect, useState } from 'react'
import './home.css'
import PlantCard from '../../components/PlantCards/PlantCard'
import axios from 'axios'
import toast from 'react-hot-toast'

function Home() {
    const [plants, setPlants] = useState([])

    const loadPlants = async () => {
        toast.loading("Loading")
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`)
        setPlants(response.data.data)
        toast.dismiss()
        toast.success("Loaded")
    }

    useEffect(() => {
        loadPlants()
    }, [])

    return (
        <div className=''>
            <div className='row'>
             {plants.map((plant, i) => {
                const {
                    _id,
                    name,
                    image,
                    price,
                    description
                } = plant
                return (  <PlantCard
                    key={i}
                    _id={_id}
                    name={name}
                    image={image}
                    price={price}
                    description={description}
                />)
            })}
            </div> 
        </div>
    )
}

export default Home