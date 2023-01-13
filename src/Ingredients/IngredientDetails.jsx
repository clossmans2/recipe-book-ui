import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import withRouter from "../Utils/RouterWrapper";

class IngredientDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        Id: 0,
        Name: "",
        Quantity: ""
    };
  }

  componentDidMount() {
    //console.log(this.props.params);
    axios.get("https://localhost:7112/api/ingredients/" + this.props.router.params.ingredientId).then((response) => {
      this.setState({ 
        Id: response.data.id,
        Name: response.data.name,
        Quantity: response.data.quantity

      });
    });
  }

  render() {
    return (
      <>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Ingredient Details</h1>
          </div>
        </div>
        <div className="container mb-2">
            <div className="row">
                <div className="col-sm-3">
                    <Link to="/ingredients" className="btn btn-info">Back to Ingredients</Link>
                </div>
                <div className="col-sm-1">
                    <Link to={`/ingredients/${this.state.Id}/edit`} className="btn btn-warning">Edit</Link>
                </div>
            </div>
            <div className="col-4">
                <ul className="list-group clearfix pull-left">
                    <li className="list-group-item"><strong>Id: </strong> {this.state.Id}</li>
                    <li className="list-group-item"><strong>Name: </strong> {this.state.Name}</li>
                    <li className="list-group-item"><strong>Quantity: </strong> {this.state.Quantity}</li>
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

export default withRouter(IngredientDetails);
