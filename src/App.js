import Radium, { StyleRoot } from 'radium';
import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'p01', race: 'Asian', species: 'Dog' },
      { id: 'p02', race: 'Balck', species: 'Nigga' },
      { id: 'p03', race: 'White', species: 'Wigga' },
      { id: 'p04', race: 'Person', species: 'Person' }
    ],
    showPerson: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.race = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

  }

  deletePersonHandler = (personIndex) => {
    //const person = this.state.persons.splice();
    const person = [...this.state.persons]
    person.splice(personIndex, 1);
    this.setState({ persons: person });
  }

  togglePersons = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid #ccc',
      padding: '8px',
      cursor: 'pointer',
      marginBottom: '16px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let People = null

    if (this.state.showPerson) {
      People = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              race={person.race}
              species={person.species}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    else {
      People = (
        <div>
          <h3>Press the Toggle Person button.</h3>
        </div>
      )
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length > 2) {
      classes.push('green');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi I am a React App</h1>
          <p className={classes.join(' ')}>Status</p>
          <button
            style={style}
            onClick={this.togglePersons}>Toggle Persons</button>
          {People}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
