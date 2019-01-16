import React from 'react'
import { Form } from 'semantic-ui-react'

class ToDoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = (data) => {
    this.setState({
      [data.name]: data.value
    })
  }

  handleSubmit = (event) => {
    console.log(event)
      // event.preventDefault()
      // fetch('http://localhost:3000/pokemon', {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json"
      //   },
      //   body:JSON.stringify({
      //     name: this.state.name,
      //     sprites: {
      //       back:this.state.backUrl,
      //       front: this.state.frontUrl
      //     },
      //     stats: [{
      //       name: "hp",
      //       value: this.state.hp
      //     }]
      //   })
      // })
      // .then(resp => resp.json())
      // .then(pokemon => this.props.addPokemon(pokemon))
  }

  render() {
    return (
      <div>
        <h3>Add a To Do!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="title" placeholder="title" name="title" />
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="description" placeholder="description" name="description" />

          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default ToDoForm
