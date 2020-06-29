import React from 'react';

const GripCard = ({ title, img }) => {

    console.log(img);
    
    return (
        <div className="card">
            <img className="card-img-top" src={img} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    )
}

export default GripCard;


 