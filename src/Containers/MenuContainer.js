import React, { Component } from 'react'
import { Input, Menu, Segment, Container } from 'semantic-ui-react'
import ToDoContainer from './ToDoContainer'
import ToDoForm from '../Components/ToDoForm'
import Home from '../Components/Home'

export default class MenuContainer extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  changeViewToAllTodos =() => this.setState({ activeItem: 'toDos' })
  changeViewToHome =() => this.setState({ activeItem: 'home' })



  render() {
    const { activeItem } = this.state
    const componentToRender = () => {
      if (activeItem === 'home') {
        return <Home logIn={this.props.logIn} />
      } else if (activeItem === 'toDos') {
        return <ToDoContainer changeViewToAllTodos={this.changeViewToAllTodos} changeViewToHome={this.changeViewToHome} user={this.props.user} />
      } else {
        return <ToDoForm changeViewToAllTodos={this.changeViewToAllTodos} user={this.props.user} />
      }
    }

    return (
      <Container user={this.props.user}>
        <Menu pointing>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='toDos'
            active={activeItem === 'toDos'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='newToDo'
            active={activeItem === 'newToDo'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <p>{this.props.user ? 'Hi ' + this.props.user.first_name : null}</p>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
          {componentToRender()}
        </Segment>
      </Container>
    )
  }
}
