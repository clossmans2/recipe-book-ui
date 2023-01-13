import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import withRouter from "../Utils/RouterWrapper";
import { NewStepModal } from "../Shared";

class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        Id: 0,
        Name: "",
        Description: "",
        PrepTime: ""
    };
  }

  componentDidMount() {
    //console.log(this.props.params);
    axios.get("https://localhost:7112/api/recipes/" + this.props.router.params.recipeId).then((response) => {
      this.setState({ 
        Id: response.data.id,
        Name: response.data.name,
        Description: response.data.description,
        PrepTime: response.data.prepTime
      });
    });
  }

  render() {

    return (
      <>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">{this.state.Name}</h1>
            <div className="col-lg mx-auto">
              <p className="lead mb-4">{this.state.Description}</p>
              <p className="lead mb-4"><strong>Prep Time:</strong> {this.state.PrepTime}</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to={`/recipes/${this.state.Id}/edit`} className="btn btn-warning btn-lg px-4 gap-3">Edit</Link>
                <Link to="/recipes" className="btn btn-outline-secondary btn-lg px-4 gap-3">Back to Recipes</Link>
                <NewStepModal recipeId={this.state.Id} />
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-2">
            <h2>Ingredients</h2>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
                </table>
          
            <br />
            <hr />
            <br />
            <h2>Steps</h2>
            <table className="table table-striped table-hover table-bordered">
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Text</th>
                      <th>Order</th>
                  </tr>
              </thead>
              <tbody>
                  
              </tbody>
            </table>
        </div>
      </>
    );
  }
}

export default withRouter(RecipeDetails);
