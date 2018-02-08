import React, { Component } from 'react';
import Actorlist from './components/ActorList.js';
import AddActor from './components/AddActor.js';
import './css/App.css';

const actors = [
{
  name:"Emilia Clarke",
  character:"Daenerys Targaryen",
  photo:"https://images-na.ssl-images-amazon.com/images/M/MV5BNjg3OTg4MDczMl5BMl5BanBnXkFtZTgwODc0NzUwNjE@._V1_UX214_CR0,0,214,317_AL_.jpg"
},
{
  name:"Kit Harington",
  character:"Jon Snow",
  photo:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA2NTI0NjYxMTBeQTJeQWpwZ15BbWU3MDIxMjgyNzY@._V1_UX214_CR0,0,214,317_AL_.jpg"
},
{
  name:"Peter Dinklage",
  character:"Tyrion Lannister",
  photo:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1MTI5Mzc0MF5BMl5BanBnXkFtZTYwNzgzOTQz._V1_UY317_CR20,0,214,317_AL_.jpg"
}
];

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { actors }
    this.AddActor = this.AddActor.bind(this)
    this.deleteActor = this.deleteActor.bind(this)
  }
  
  AddActor(name, character, photo){
    const actors = [
      ...this.state.actors,
      {name, character, photo}
    ]
    this.setState({actors})
  }

  deleteActor(id){
    const actors = this.state.actors;

    const newActors = actors.filter(
      (a) => {
        return a.name !== id
      }
    );
    this.setState({actors: newActors})
  }
  
  render() {
    const { actors } = this.state
    return (
      <div className="App">
        <AddActor onNewActor={this.AddActor} />
        <Actorlist actors={actors} onDeleteActor={this.deleteActor} />
      </div>
    );
  }
}

export default App;