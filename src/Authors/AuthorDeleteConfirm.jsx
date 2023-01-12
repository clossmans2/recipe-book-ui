import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import withRouter from "../Utils/RouterWrapper";

class AuthorDeleteConfirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: 0,
      FirstName: "",
      LastName: "",
      Email: "",
    };
    
    this.handleDeleteConfirmClick = this.handleDeleteConfirmClick.bind(this);
  }

  handleDeleteConfirmClick(event) {
    axios
      .delete("https://localhost:7112/api/authors/" + this.state.Id)
      .then(() => {
        this.props.router.navigate("/authors");
      });
  }

  componentDidMount() {
    //console.log(this.props.params);
    axios
      .get(
        "https://localhost:7112/api/authors/" +
          this.props.router.params.authorId
      )
      .then((response) => {
        this.setState({
          Id: response.data.id,
          FirstName: response.data.firstName,
          LastName: response.data.lastName,
          Email: response.data.email,
          Recipes: response.data.recipes,
        });
      });
  }

  render() {
    return (
      <>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">
              Are you sure you want to delete the following record?
            </h1>
          </div>
        </div>
        <div className="container mb-2">
          <div className="row">
            <div className="col-sm-3">
              <Link to="/authors" className="btn btn-info">
                Back to Authors
              </Link>
            </div>
            <div className="col-sm-3">
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.handleDeleteConfirmClick}
              >
                Confirm Delete
              </button>
            </div>
          </div>
          <div className="col-4">
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Id: </strong> {this.state.Id}
              </li>
              <li className="list-group-item">
                <strong>First Name: </strong> {this.state.FirstName}
              </li>
              <li className="list-group-item">
                <strong>Last Name: </strong> {this.state.LastName}
              </li>
              <li className="list-group-item">
                <strong>Email: </strong> {this.state.Email}
              </li>
            </ul>
          </div>
          <br />
          <hr />
          <br />
        </div>
      </>
    );
  }
}

export default withRouter(AuthorDeleteConfirm);
