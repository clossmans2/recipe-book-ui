import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import withRouter from "../Utils/RouterWrapper";

class AuthorDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        Id: 0,
        FirstName: "",
        LastName: "",
        Email: "",
        Recipes: []
    };

  }

  componentDidMount() {
    //console.log(this.props.params);
    axios.get("https://localhost:7112/api/authors/" + this.props.router.params.authorId).then((response) => {
      this.setState({ 
        Id: response.data.id,
        FirstName: response.data.firstName,
        LastName: response.data.lastName,
        Email: response.data.email,
        Recipes: response.data.recipes
      });
    });
  }

  render() {
    let recipeList = this.state.Recipes.map((recipe) => {
        return (
          <tr key={recipe.id}>
            <td>{recipe.id}</td>
            <td><Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link></td>
            <td>{recipe.description}</td>
            <td>{recipe.prepTime}</td>
          </tr>
        );
        });
    return (
      <>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Author Details</h1>
          </div>
        </div>
        <div className="container mb-2">
            <div className="row">
                <div className="col-sm-3">
                    <Link to="/authors" className="btn btn-info">Back to Authors</Link>
                </div>
                <div className="col-sm-1">
                    <Link to={`/authors/${this.state.Id}/edit`} className="btn btn-warning">Edit</Link>
                </div>
            </div>
            <div className="col-4">
                <ul className="list-group clearfix pull-left">
                    <li className="list-group-item"><strong>Id: </strong> {this.state.Id}</li>
                    <li className="list-group-item"><strong>First Name: </strong> {this.state.FirstName}</li>
                    <li className="list-group-item"><strong>Last Name: </strong> {this.state.LastName}</li>
                    <li className="list-group-item"><strong>Email: </strong> {this.state.Email}</li>
                </ul>
            </div>
            <br />
            <hr />
            <br />
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Prep Time</th>
                    </tr>
                </thead>
                <tbody>
                    {recipeList}
                </tbody>
                </table>
        </div>
      </>
    );
  }
}

export default withRouter(AuthorDetails);
