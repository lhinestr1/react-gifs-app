import React from 'react'

const GripForm = ({handlerCategory, add_category}) => {
    return (
        <form onSubmit={handlerCategory} className='mb-4 px-1'>
            <div className='row m-0'>
            <div className='col-6 col-sm-4 col-md-2'>
                <input className='form-control' ref={add_category} name='categoria' placeholder='agregue categoria' autoComplete='off' />
            </div>
            <div className='col-6 col-sm-4 col-md-2'>
                <button type='submit' className='btn btn-outline-success btn-block'>Guardar</button>
            </div>
            </div>
        </form>
    )
}

export default GripForm
