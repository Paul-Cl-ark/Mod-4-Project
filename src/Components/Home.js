import React, { Component, Image } from 'react';
import LogInForm from './LogInForm'
import RegisterForm from './RegisterForm'
import Divider from './Divider'


class Home extends Component {



  render() {

    const componentToRender = () => {
    return this.props.user ? <img src='https://media.giphy.com/media/l1ughbsd9qXz2s9SE/giphy.gif' /> : <React.Fragment><LogInForm logIn={this.props.logIn} /> <RegisterForm /> <Divider /> </React.Fragment>
    }


    return (
      <div>
        <h1>Welcome</h1>
        <p>This is Paul and Paolo's To-Do app written in React.js</p>
        {componentToRender()}
      </div>
    );
  }
}

export default Home;
