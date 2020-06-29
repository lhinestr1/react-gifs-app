import React from 'react'

const GripForm = ({handlerCategory, add_category}) => {
    return (
        <form onSubmit={handlerCategory} className='mb-4 p-2'>
            <div className='row'>
            <div className='col-6 col-sm-4 col-md-3'>
                <input className='form-control' ref={add_category} name='categoria' placeholder='agregue categoria' autoComplete='off' />
            </div>
            <div className='col-6 col-sm-4 col-md-3'>
                <button type='submit' className='btn btn-outline-success btn-block'>Guardar</button>
            </div>
            </div>
        </form>
    )
}

export default GripForm
