import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import withRouter from '../Utils/RouterWrapper';

class NewIngredient extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            Name: "",
            Quantity: "",
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      componentDidMount() { }

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
        axios.post("https://localhost:7112/api/ingredients/", {
            name: this.state.Name,
            quantity: this.state.Quantity,
        }).then((response) => {
            this.props.router.navigate("/ingredients");            
        });
      }
    
      render() {
        return (
          <>
            <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">New Ingredient</h1>
              </div>
            </div>
            <div className="container mb-2">
                <form onSubmit={this.handleSubmit}>
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
                    <Link to="/ingredients" className="btn btn-primary">Back to ingredients</Link>
                    <button type="submit" className="btn btn-success">Save</button>
                </form>                
            </div>
            
          </>
        );
      }
    }

export default withRouter(NewIngredient);