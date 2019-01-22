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
    trigger={<Button onClick={this.handleOpen} inverted color='green' compact size='small'> Edit </Button>}
    open={this.state.modalOpen}
    onClose={this.handleClose}
    >

    <Modal.Content image>
      <Image
        wrapped
        size='medium'
        src='https://www.wallpaperup.com/uploads/wallpapers/2014/09/25/455922/1dee4df1af48f1fa9e6bd50618b4fbc9-700.jpg'
      />
      <Modal.Description>
        <EditFormWithinModal todo={this.props.todo} handleClose={this.handleClose} changeViewToIndex={this.props.changeViewToIndex}/>
      </Modal.Description>
    </Modal.Content>
  </Modal>

)
}

}
