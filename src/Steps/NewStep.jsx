import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import withRouter from '../Utils/RouterWrapper';

class NewStep extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            Text: "",
            Order: "",
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleOrderChange = this.handleOrderChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      componentDidMount() { }

      handleTextChange(event) {
        this.setState({ 
            Text: event.target.value
        });
      }

      handleOrderChange(event) {
        this.setState({ 
            Order: event.target.value
        });
      }



      handleSubmit(event) {
        event.preventDefault();
        axios.post("https://localhost:7112/api/steps/", {
            text: this.state.Text,
            quantity: this.state.Order,
        }).then((response) => {
            this.props.router.navigate("/steps");            
        });
      }
    
      render() {
        return (
          <>
            <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">New Step</h1>
              </div>
            </div>
            <div className="container mb-2">
                <form onSubmit={this.handleSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="stepText" className="col-sm-2 col-form-label fw-bolder">Text</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="stepText" value={this.state.Text} onChange={this.handleTextChange} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="stepOrder" className="col-sm-2 col-form-label fw-bolder">Order</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="stepOrder" value={this.state.Order} onChange={this.handleOrderChange} />
                        </div>
                    </div>
                    <Link to="/steps" className="btn btn-primary">Back to steps</Link>
                    <button type="submit" className="btn btn-success">Save</button>
                </form>                
            </div>
            
          </>
        );
      }
    }

export default withRouter(NewStep);