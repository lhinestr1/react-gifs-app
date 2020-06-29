import React from 'react'
import { useGif } from '../hooks/useGif'
import GripCard from './GripCard'


const GripList = ({category}) => {
    
    const data_gifs =  useGif(category);

    return (
        <div>
            <div className="alert alert-success text-center p-0 animate__animated animate__fadeInUp" role="alert">
                <h1 className='p-0'>{category}</h1>
            </div>
            {
                data_gifs.isLoading ? <p>Cargando...</p> : ""
            }
            {/* animate__fadeIn */}
            <div className="card-columns animate__animated animate__fadeInUp">
            {
                data_gifs.data.map( value => {
                    return <GripCard key={value.id} title={value.title} img={value.images.original.url}></GripCard>
                })
            }
            {
                data_gifs.data.length === 0 && !data_gifs.isLoading ? <p>No se encontraron registros</p> : "" 
            }
            </div>
        </div>
    )
}

export default GripList
