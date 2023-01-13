import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";


class NewStepModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      recipeId: 0,
      text: "",
      order: 0
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleSaveChanges = this.handleSaveChanges.bind(this);
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  componentDidMount() {
    this.setState({ recipeId: this.props.recipeId });
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }
  handleOrderChange(event) {
    this.setState({ order: event.target.value });
  }

  handleClose(event) {
    this.setState({ show: false, recipeId: 0 });
  }
  handleShow(event) {
    this.setState({ show: true, recipeId: this.props.recipeId });
  }
  handleSaveChanges(event) {
    axios.post("https://localhost:7112/api/steps/" + this.state.recipeId, {
        text: this.state.text,
        order: this.state.order,
    }).then((response) => {
        this.setState({ show: false });
    });
  }

  render() {
    return (
      <>
        <Button variant="success" size="lg" onClick={this.handleShow}>
          Create A New Step
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Step</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formStepOrder">
                    <Form.Label>Step Order</Form.Label>
                    <Form.Control type="number" value={this.state.order} onChange={this.handleOrderChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStepText">
                    <Form.Label>Step Text</Form.Label>
                    <Form.Control as="textarea" value={this.state.text} onChange={this.handleTextChange} rows={3} />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSaveChanges}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default NewStepModal;
