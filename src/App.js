import { Component } from 'react';
import './App.css';
import Member from './components/Member';
import Button from "./components/Button/Button";

const family = {
    member1: {
      id: 1,
      name: 'josé',
      age: 57,
    },
    member2: {
      id: 2,
      name: 'albert',
      age: 46,
    },
    member3: {
      id: 3,
      name: 'robert',
      age: 67,
    },
    member4: {
      id: 4,
      name:'Joy',
      age: 2
    },
  }

class App extends Component {
  state = {
    family,
    isShow: false
  }

  handleClick = (num) => {
    const family = { ...this.state.family }
    family.member1.age += num;
    this.setState({ family })
  }

  handleChange = (event, id) => {
    const family = { ...this.state.family }
    const name = event.target.value;
    family[id].name = name;
    this.setState({ family })
  }

  hideName = id => {
    const family = { ...this.state.family }
    family[id].name = ' ';
    this.setState({ family })
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow;
    this.setState({ isShow })
  }

  render () {
    const { title } = this.props;
    const { family, isShow } = this.state;

    let description = null;

    if (isShow) {
      description = <strong>Joyus grosse dinduss </strong>
    }

    const list = Object.keys(family)
      .map(member => (
        <Member
          key={member}
          hideName={() => this.hideName(member)}
          handleChange={event => this.handleChange(event, member)}
          age = {family[member].age}
          name= {family[member].name} />
      ))

    return (
      <div className='App'>
        <h1>{ title }</h1>
        { list }
        {/* {        <Member 
          age = {family.member4.age}
          name= {family.member4.name}> 
          { description }
          <button 
            onClick={this.handleShowDescription}>
            {
              isShow ? 'Hide' : 'Show'
            }
          </button>
        </Member>} 
        <Button
        vieillir={() => this.handleClick(2)}>

        </Button>*/}
      </div>
    )
  }
}

export default App;
