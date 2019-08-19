import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { race: 'Asian', species: 'Dog' },
      { race: 'Balck', species: 'Nigga' },
      { race: 'White', species: 'Wigga' },
      { race: 'Person', species: 'Person' }
    ]
  }

  switchNamesHandler = (newRace, newSpecies) => {
    //console.log('Was clicked.');
    this.setState({
      persons: [
        { race: 'Prajwol', species: 'Dog' },
        { race: 'Roshit', species: 'Nigga' },
        { race: 'Erin', species: 'Wigga' },
        { race: newRace, species: newSpecies }
      ]
    }
    )
  }

  changeNamesHandler = (event) => {
    //console.log('Was clicked.');
    this.setState({
      persons: [
        { race: 'Prajwol', species: 'Dog' },
        { race: event.target.value, species: 'Nigga' },
        { race: 'Erin', species: 'Wigga' },
        { race: event.target.value, species: 'Species' }
      ]
    }
    )
  }

  render() {
    const style = {
      backgroundColor: '#eee',
      font: 'inherit',
      border: '1px solid #ccc',
      padding: '8px',
      cursor: 'pointer',
      marginBottom: '16px'
    };

    return (
      <div className="App">
        <h1>Hi I am a React App</h1>
        <button
          style={style}
          onClick={this.switchNamesHandler.bind(this, 'Person', 'Person')}>Switch names</button>
        <Person
          race={this.state.persons[0].race}
          species={this.state.persons[0].species}
          click={this.switchNamesHandler.bind(this, 'Pedo', 'Dog')}
          changed={this.changeNamesHandler}></Person>
        <Person
          race={this.state.persons[1].race}
          species={this.state.persons[1].species}
          click={this.switchNamesHandler.bind(this, 'God', 'Nigga')}></Person>
        <Person
          race={this.state.persons[2].race}
          species={this.state.persons[2].species}
          click={this.switchNamesHandler.bind(this, 'Dildo', 'Baggins')}>I am not racist</Person>
        <Person
          race={this.state.persons[3].race}
          species={this.state.persons[3].species} />
      </div>
    );
  }
}

export default App;
