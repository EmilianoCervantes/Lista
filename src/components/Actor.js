import React from 'react';

const Actor = (props) => {

  const eliminar = e => {
      e.preventDefault();
      props.borrar(props.name);
  }

  return(
    <li>
      <button onClick={(e) => eliminar(e)}>Eliminar</button>
      <span className = 'photo'>
        <img src={props.photo} alt=""/>
      </span>
      <span className = 'name'>
        {props.name}
      </span>
      <span className = 'character'>
        {props.character}
      </span>
    </li>
  )
}

export default Actor;