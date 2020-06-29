import React, { useState, useRef } from 'react';
import './App.css';
import GripList from './components/GripList';
import GripForm from './components/GripForm';

function App() {

  const [categorys, setCategorys] = useState([])
  const add_category = useRef("")

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const scrollTop = () => {
    document.querySelector("#list").scrollTop = 0;
  }


  const handlerCategory = (e) => {
    e.preventDefault();

    scrollTop()

    const name = add_category.current.value
    const nameCapitalized = capitalize(name)

    setCategorys( (prevent) => [nameCapitalized,...prevent]  )
    add_category.current.value = "";
  }

  return (
    <div>
      <div className='header'>
        <h1 className='p-2 text-center title-app'>Buscador de Gift</h1>
        <GripForm handlerCategory={handlerCategory} add_category={add_category}></GripForm>
        {
          categorys.length === 0 
          ? <div class="alert alert-warning" role="alert">Agregue una categoria</div> 
          : ""
        }
      </div>
      <div id='list' className='pt-2'>
        {
          categorys.map( value => <GripList key={value} category={value}></GripList> )
        }
      </div>
    </div>
  );
}

export default App;
