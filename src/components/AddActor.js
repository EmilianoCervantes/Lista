import React from 'react';

const AddActor = ({onNewActor = f => f}) => {
  let _photo, _name, _character;
  const submit = e => {
    e.preventDefault();
    onNewActor( _name.value, _character.value, _photo.value);
    _name.value = '';
    _character.value = '';
    _photo.value = '';
    _photo.focus();
  }

  return (<div className="parteArriba">
    <h2>Agregar Actor</h2>
    <form onSubmit = {submit} >
      <input ref={input => _name = input} type="text" placeholder="Nombre del actor" required />
      <br/>
      <input ref={input => _character = input} type="text" placeholder="Personaje" required />
      <br/>
      <input ref={input => _photo = input} type="text" placeholder="Imagen" required />
      <br/>
      <button>Agregar</button>
    </form>
    </div>);
};

export default AddActor;