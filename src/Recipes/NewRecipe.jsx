import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import withRouter from '../Utils/RouterWrapper';

class NewRecipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            Name: "",
            Description: "",
            PrepTime: ""
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePrepTimeChange = this.handlePrepTimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      componentDidMount() { }

      handleNameChange(event) {
        this.setState({ 
            Name: event.target.value
        });
      }

      handleDescriptionChange(event) {
        this.setState({ 
            Description: event.target.value
        });
      }

      handlePrepTimeChange(event) {
        this.setState({ 
            PrepTime: event.target.value
        });
      }

      handleSubmit(event) {
        event.preventDefault();
        axios.post("https://localhost:7112/api/recipes/", {
            name: this.state.Name,
            description: this.state.Order,
            prepTime: this.state.PrepTime
        }).then((response) => {
            this.props.router.navigate("/recipes");            
        });
      }
    
      render() {
        return (
          <>
            <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">New Recipe</h1>
              </div>
            </div>
            <div className="container mb-2">
                <form onSubmit={this.handleSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="recipeName" className="col-sm-2 col-form-label fw-bolder">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="recipeName" value={this.state.Name} onChange={this.handleNameChange} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="recipeDescription" className="col-sm-2 col-form-label fw-bolder">Description</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="recipeDescription" value={this.state.Description} onChange={this.handleDescriptionChange} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="recipePrepTime" className="col-sm-2 col-form-label fw-bolder">Prep Time</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="recipePrepTime" value={this.state.PrepTime} onChange={this.handlePrepTimeChange} />
                        </div>
                    </div>
                    <Link to="/recipes" className="btn btn-primary">Back to recipes</Link>
                    <button type="submit" className="btn btn-success">Save</button>
                </form>                
            </div>
            
          </>
        );
      }
    }

export default withRouter(NewRecipe);