import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

import { Menu, Segment, Container, Button } from 'semantic-ui-react'
import ToDoContainer from './ToDoContainer'
import ToDoForm from '../Components/ToDoForm'
import Home from '../Components/Home'
import AdminPage from '../Components/AdminPage'
import firebase from "firebase"

class MenuContainer extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  changeViewToAllTodos =() => this.setState({ activeItem: 'toDos' })
  changeViewToHome =() => this.setState({ activeItem: 'home' })

  render() {
    const { activeItem } = this.state
    const componentToRender = () => {
      if (activeItem === 'home') {
        return <Home logIn={this.props.logIn} user={this.props.user} />
      } else if (activeItem === 'toDos') {
        return <ToDoContainer changeViewToAllTodos={this.changeViewToAllTodos} changeViewToHome={this.changeViewToHome} user={this.props.user} />
      } else {
        return <ToDoForm changeViewToAllTodos={this.changeViewToAllTodos} user={this.props.user} />
      }
    }
    const ifLoggedInShowFullMenu = () => {
    return this.props.user ? <React.Fragment><Menu.Item name='toDos' active={activeItem === 'toDos'} onClick={this.handleItemClick}/> <Menu.Item name='newToDo' active={activeItem === 'newToDo'} onClick={this.handleItemClick} /><Menu.Item><Link to={'/admin'}><Button   color='blue'>Admin</Button></Link></Menu.Item> </React.Fragment> : null}

    const handleAdminClick = (event) => {
      this.props.history.push('./admin')
    }

    return (
      <Container user={this.props.user}>
        <Menu pointing>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          {ifLoggedInShowFullMenu()}
          <Menu.Menu position='right'>
              {this.props.user ? <React.Fragment><Menu.Item><p>Hi {this.props.user.first_name}</p></Menu.Item><Menu.Item> <Button size='massive' color='blue' compact onClick={()=>{
                firebase.auth().signOut()
                this.props.logOut()
                this.changeViewToHome()
              }}>Logout</Button> </Menu.Item></React.Fragment>: null}
          </Menu.Menu>
        </Menu>

        <Segment>
          {componentToRender()}
        </Segment>
      </Container>
    )
  }
}

export default MenuContainer
