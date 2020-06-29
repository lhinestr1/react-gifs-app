import React from 'react';

const GripCard = ({ title, img }) => {

    console.log(img);

    const copy_url = (url) => {
        // Crea un campo de texto "oculto"
        var aux = document.createElement("input");
        // Asigna el contenido del elemento especificado al valor del campo
        aux.setAttribute("value", url);
        // Añade el campo a la página
        document.body.appendChild(aux);
        // Selecciona el contenido del campo
        aux.select();
        // Copia el texto seleccionado
        document.execCommand("copy");
        // Elimina el campo de la página
        document.body.removeChild(aux);
    }
    
    return (
        <div className="card">
            <img className="card-img-top" src={img} alt={title} />
            <div className="card-body p-3">
                <h5 className="card-title mb-0">
                    <button className='btn btn-outline-primary' onClick={() => copy_url(img)} >Copiar al portapapeles</button>
                </h5>
            </div>
        </div>
    )
}

export default GripCard;


 