import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class ConfirmModal extends Component {
  state = { open: false }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ result: 'confirmed', open: false })
  handleCancel = () => this.setState({ result: 'cancelled', open: false })

  render() {
    const { open } = this.state

    return (
      <div>
        <Button onClick={this.show}>Delete</Button>
        <Confirm
          open={open}
          onCancel={this.handleCancel}
          onConfirm={this.props.remove}
        />
      </div>
    )
  }
}

export default ConfirmModal;