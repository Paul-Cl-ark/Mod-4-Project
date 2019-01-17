import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import ToDoContainer from '../Containers/ToDoContainer'
import ToDoForm from './ToDoForm'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const componentToRender = () => {
      if (activeItem === 'home') {
        return <div><h1>Welcome</h1> <p>This is a To Do app written in React.js</p></div>
      } else if (activeItem === 'toDos') {
        return <ToDoContainer />
      } else {
        return <ToDoForm />
      }
    }

    return (
      <div>
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
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
          {componentToRender()}
        </Segment>
      </div>
    )
  }
}
