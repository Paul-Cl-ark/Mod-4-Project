import React, { Component } from 'react';
import './App.css';
import MenuContainer from './Containers/MenuContainer'


class App extends Component {
  state = {
    user: false,
  }

  logIn = (user, token) => {
    this.setState({ user })
    localStorage.setItem('token', token)
  }

  logOut = () => {
    this.setState({ user: false })
    localStorage.removeItem('token')
  }

  componentDidMount () {
    // gets validation from server
    const token = localStorage.getItem('token')
    fetch('http://localhost:3000/api/v1/validate', {
      headers: {'Authorization': token},
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          console.error(data)
        } else {
          this.logIn(data.user, data.token)
        }
      })
      .catch(err => {
        console.error(err)
      })
  }


  render() {
    return (
      <div className="App">
        <MenuContainer logIn={this.logIn} logOut={this.logOut} user={this.state.user}/>
      </div>
    );
  }
}

export default App;
