import React, { Component } from 'react';
import './App.css';
import MenuContainer from './Containers/MenuContainer'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyCn1CxgNJv4wMM2IVMMlxPX9Yzti_rvHCM",
  authDomain: "mod4-project-6ac68.firebaseapp.com"
})

class App extends Component {
  state = {
    user: false,
  }

  uiConfig = {
   signInFlow: "popup",
   signInOptions: [
     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
   ],
   callbacks: {
     signInSuccess: () => false
   }
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
    firebase.auth().onAuthStateChanged(firebaseUser => {
      this.setState({user: firebaseUser})
    })
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
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    );
  }
}

export default App;
