import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import MenuContainer from './Containers/MenuContainer'
import AdminPage from './Components/AdminPage'

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
      <Switch>
        <Route path='/admin' component={AdminPage}/>
        <Route path='/' component={routerProps => <MenuContainer {...routerProps} logIn={this.logIn} logOut={this.logOut} user={this.state.user}/>}/>
      </Switch>
      </div>
    );
  }
}

export default App;
