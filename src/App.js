import { Component } from 'react';
import './App.css';
import Member from './components/Member';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>React Application</h1>
        <Member/>
      </div>
    )
  }
}

export default App;
