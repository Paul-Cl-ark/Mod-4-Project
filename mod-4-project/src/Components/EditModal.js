import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import EditFormWithinModal from './EditFormWithinModal'



export default class ModalModalExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { modalOpen: false }
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => {
    this.setState({ modalOpen: false })
  }

  render() {
    return (

  <Modal
    trigger={<Button onClick={this.handleOpen} className="ui teal basic button">Edit Modal</Button>}
    open={this.state.modalOpen}
    onClose={this.handleClose}
    >

    <Modal.Content image>
      <Image
        wrapped
        size='medium'
        src='https://s3.amazonaws.com/tribeca_cms_production/uploads/article/header_marquee/51ffb757852862a12b000002/large_Editor_at_Large_grey-final.jpg'
      />
      <Modal.Description>
        <EditFormWithinModal todo={this.props.todo} handleClose={this.handleClose} changeViewToIndex={this.props.changeViewToIndex}/>
      </Modal.Description>
    </Modal.Content>
  </Modal>

)
}

}
