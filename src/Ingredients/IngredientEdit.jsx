import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import withRouter from '../Utils/RouterWrapper';

class IngredientEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            Id: 0,
            Name: "",
            Quantity: ""
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

      handleNameChange(event) {
        this.setState({ 
            Name: event.target.value
        });
      }

      handleQuantityChange(event) {
        this.setState({ 
            Quantity: event.target.value
        });
      }

      handleSubmit(event) {
        event.preventDefault();
        axios.put("https://localhost:7112/api/ingredients/" + this.state.Id, {
            id: this.state.Id,
            name: this.state.Name,
            quantity: this.state.Quantity,
            email: this.state.Email
        }).then((response) => {
            this.props.router.navigate("/ingredients");            
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
                <form onSubmit={this.handleSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="ingredientId" className="col-sm-2 col-form-label fw-bolder">Id</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="ingredientId" value={this.state.Id} disabled readOnly />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="ingredientName" className="col-sm-2 col-form-label fw-bolder">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="ingredientName" value={this.state.Name} onChange={this.handleNameChange} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="ingredientQuantity" className="col-sm-2 col-form-label fw-bolder">Quantity</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="ingredientQuantity" value={this.state.Quantity} onChange={this.handleQuantityChange} />
                        </div>
                    </div>
                    <Link to="/ingredients" className="btn btn-primary">Back to Ingredients</Link>
                    <button type="submit" className="btn btn-success">Save</button>
                </form>                
            </div>
            
          </>
        );
      }
    }
    
    export default withRouter(IngredientEdit);