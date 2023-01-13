import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import withRouter from "../Utils/RouterWrapper";

class RecipeDeleteConfirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: 0,
      Name: "",
      Description: "",
      PrepTime: "",
    };

    this.handleDeleteConfirmClick = this.handleDeleteConfirmClick.bind(this);
  }

  handleDeleteConfirmClick(event) {
    axios
      .delete("https://localhost:7112/api/recipes/" + this.state.Id)
      .then(() => {
        this.props.router.navigate("/recipes");
      });
  }

  componentDidMount() {
    //console.log(this.props.params);
    axios
      .get(
        "https://localhost:7112/api/recipes/" +
          this.props.router.params.recipeId
      )
      .then((response) => {
        this.setState({
          Name: this.state.Name,
          Description: this.state.Order,
          PrepTime: this.state.PrepTime,
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
              <Link to="/recipes" className="btn btn-info">
                Back to Recipes
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
                <strong>Name: </strong> {this.state.Name}
              </li>
              <li className="list-group-item">
                <strong>Description: </strong> {this.state.Description}
              </li>
              <li className="list-group-item">
                <strong>Prep Time: </strong> {this.state.PrepTime}
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

export default withRouter(RecipeDeleteConfirm);
