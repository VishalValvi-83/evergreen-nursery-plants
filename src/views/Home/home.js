import React, { useEffect, useState } from 'react'
import './home.css'
import PlantCard from '../../components/PlantCards/PlantCard'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import AddIcon from "./AddIcon.png"

function Home() {
    const [plants, setPlants] = useState([])

    const loadPlants = async () => {
        toast.loading("Loading")
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`)
        setPlants(response.data.data)
        toast.dismiss()
        toast.success(response.data.message)
    }

    useEffect(() => {
        loadPlants()
    }, [])

    return (
        <div className='container'>
            <h1 className='main-heading mt-4'>The top 10 garden plants you should have for your collection</h1>

            <p className='sub-heading' >The size of your garden doesn't matter; there's always room for one more plant. Having a variety of colorful plants is favored by people when it comes to gardening plants. Perineal, shrubs, succulents, or trees that stay year-round are some of the best garden plants you can have.</p>

            <p className='sub-heading mb-4' >Below we are sharing with you a list of the top 10 garden plants, which we are sure every gardener will love -</p>
            <div className='row'>
                {plants.map((plant, i) => {
                    const {
                        _id,
                        name,
                        image,
                        price,
                        description
                    } = plant
                    return (<PlantCard
                        key={i}
                        _id={_id}
                        name={name}
                        image={image}
                        price={price}
                        description={description}
                    />)
                })}
            </div>
            <Link to='/add' className='add-icon rounded mt-4'>
                <img src={AddIcon} alt='add-icon' />
            </Link>
        </div>
    )
}

export default Home