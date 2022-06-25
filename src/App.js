import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

import './App.css';
// import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>  response.json())
      .then(users => this.setState( { robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>Guilhem's Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList robots={filteredRobots}/>
        </div>
      );
    }
  }
}

export default App;

// props are simply things coming out of STATE
