import React from 'react';
import Actor from './Actor.js'

const ActorList = (props) =>
  <div className='list'>
    <h2>Game of Thrones</h2>
    <ul>
      {props.actors.map((actor, i) =>
        <Actor key={i} {...actor} borrar={props.onDeleteActor} />
        )}
    </ul>
  </div>;

export default ActorList;