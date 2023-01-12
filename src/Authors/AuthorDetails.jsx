import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import withRouter from "../Utils/RouterWrapper";

class AuthorDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { author: {
        Id: 0,
        FirstName: "",
        LastName: "",
        Email: "",
        Recipes: []
    } };
  }

  componentDidMount() {
    //console.log(this.props.params);
    axios.get("https://localhost:7112/api/authors/" + this.props.router.params.authorId).then((response) => {
      this.setState({ author: {
        Id: response.data.id,
        FirstName: response.data.firstName,
        LastName: response.data.lastName,
        Email: response.data.email,
        Recipes: response.data.recipes
      }});
    });
  }

  render() {
    let recipeList = this.state.author.Recipes.map((recipe) => {
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
            <Link to="/authors" className="btn btn-primary">Back to Authors</Link>
            <ul className="list-group">
                <li className="list-group-item"><strong>Id: </strong> {this.state.author.Id}</li>
                <li className="list-group-item"><strong>First Name: </strong> {this.state.author.FirstName}</li>
                <li className="list-group-item"><strong>Last Name: </strong> {this.state.author.LastName}</li>
                <li className="list-group-item"><strong>Email: </strong> {this.state.author.Email}</li>
            </ul>
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
