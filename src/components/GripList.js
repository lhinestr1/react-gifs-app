import React from 'react'
import { useGif } from '../hooks/useGif'
import GripCard from './GripCard'


const GripList = ({category}) => {
    
    const data_gifs =  useGif(category);

    return (
        <div>
            <div className="alert alert-success text-center p-0" role="alert">
                <h1 className='p-0'>{category}</h1>
            </div>
            {
                data_gifs.isLoading ? <p>Cargando...</p> : ""
            }
            {/* animate__fadeIn */}
            <div className="card-columns animate__animated animate__fadeInDown">
            {
                data_gifs.data.length === 0 ? <p>No se encontraron registros</p> : "" 
            }
            {
                data_gifs.data.map( value => {
                    return <GripCard key={value.id} title={value.title} img={value.images.original.url}></GripCard>
                })
            }
            </div>
        </div>
    )
}

export default GripList
