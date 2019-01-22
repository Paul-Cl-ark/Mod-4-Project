import React from 'react'
import { Form } from 'semantic-ui-react'

class EditFormWithinModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.todo.id,
      header: props.todo.header,
      description: props.todo.description
    }
  }

  handleChange = (data) => {
    this.setState({
      [data.name]: data.value
    })
  }


  handleEdit = (editedToDo) =>{
    const token = localStorage.getItem('token')
    fetch(`http://localhost:3000/api/v1/to_dos/${editedToDo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Authorization': token
      },
      body: JSON.stringify(
        editedToDo
      )
    }).then( () => {
      this.props.handleClose()
      this.props.changeViewToIndex(editedToDo)
    }
    )

    // .then(r => {})

  }

  render() {
    return (
      <div>
        <Form onSubmit={()=>this.handleEdit(this.state)}>
          <Form.Group widths="equal">
            <Form.Input onChange={(event, data) => this.handleChange(data)} label="header" placeholder="header" name="header" value={this.state.header} />
            <Form.Input onChange={(event, data) => this.handleChange(data)} label="description" placeholder="description" name="description" value={this.state.description}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default EditFormWithinModal
