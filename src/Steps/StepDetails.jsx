import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import withRouter from "../Utils/RouterWrapper";

class StepDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        Id: 0,
        Text: "",
        Order: ""
    };
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

  render() {
    return (
      <>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Step Details</h1>
          </div>
        </div>
        <div className="container mb-2">
            <div className="row">
                <div className="col-sm-3">
                    <Link to="/steps" className="btn btn-info">Back to Steps</Link>
                </div>
                <div className="col-sm-1">
                    <Link to={`/steps/${this.state.Id}/edit`} className="btn btn-warning">Edit</Link>
                </div>
            </div>
            <div className="col-4">
                <ul className="list-group clearfix pull-left">
                    <li className="list-group-item"><strong>Id: </strong> {this.state.Id}</li>
                    <li className="list-group-item"><strong>Text: </strong> {this.state.Text}</li>
                    <li className="list-group-item"><strong>Order: </strong> {this.state.Order}</li>
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

export default withRouter(StepDetails);
