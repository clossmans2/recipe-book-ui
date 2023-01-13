import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import withRouter from '../Utils/RouterWrapper';

class StepEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            Id: 0,
            Text: "",
            Order: ""
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleOrderChange = this.handleOrderChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      componentDidMount() {
        //console.log(this.props.params);
        axios.get("https://localhost:7112/api/steps/" + this.props.router.params.stepId).then((response) => {
          this.setState({ 
            Id: response.data.id,
            Text: response.data.text,
            Order: response.data.order
          });
        });
      }

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
        axios.put("https://localhost:7112/api/steps/" + this.state.Id, {
            id: this.state.Id,
            name: this.state.Text,
            quantity: this.state.Order,
            email: this.state.Email
        }).then((response) => {
            this.props.router.navigate("/steps");            
        });
      }
    
      render() {
        return (
          <>
            <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Step Details</h1>
              </div>
            </div>
            <div className="container mb-2">
                <form onSubmit={this.handleSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="stepId" className="col-sm-2 col-form-label fw-bolder">Id</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="stepId" value={this.state.Id} disabled readOnly />
                        </div>
                    </div>
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
                    <Link to="/steps" className="btn btn-primary">Back to Steps</Link>
                    <button type="submit" className="btn btn-success">Save</button>
                </form>                
            </div>
            
          </>
        );
      }
    }
    
    export default withRouter(StepEdit);