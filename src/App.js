import { Component } from 'react';
import './App.css';
import Member from './components/Member';
import Button from "./components/Button/Button";

const family = {
    member1: {
      name: 'josé',
      age: 57,
    },
    member2: {
      name: 'albert',
      age: 46,
    },
    member3: {
      name: 'robert',
      age: 67,
    },
    member4: {
      name: 'Joy',
      age: 2
    },
  }

class App extends Component {
  state = {
    family
  }

  handleClick = (num) => {
    const family = { ...this.state.family }
    family.member1.age += num;
    this.setState({ family })
  }

  handleChange = event => {
    const family = { ...this.state.family }
    const name = event.target.value;
    family.member1.name = name;
    this.setState({ family })
  }

  render () {
    const { title } = this.props;
    const { family } = this.state;
    return (
      <div className='App'>
        <h1>{ title }</h1>
        <input value={family.member1.name} onChange={this.handleChange} type='text' />
        <Member 
          age = {family.member1.age}
          name= {family.member1.name} />
        <Member 
          age = {family.member2.age}
          name= {family.member2.name} />
        <Member 
          age = {family.member3.age}
          name= {family.member3.name} />
        <Member 
          age = {family.member4.age}
          name= {family.member4.name}> 
          <strong>Joyus grosse dinduss</strong>
        </Member>
        <Button
        vieillir={() => this.handleClick(2)}>

        </Button>
      </div>
    )
  }
}

export default App;
