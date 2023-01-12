import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import withRouter from '../Utils/RouterWrapper';

class AuthorEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            Id: 0,
            FirstName: "",
            LastName: "",
            Email: ""
        };
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      componentDidMount() {
        //console.log(this.props.params);
        axios.get("https://localhost:7112/api/authors/" + this.props.router.params.authorId).then((response) => {
          this.setState({ 
            Id: response.data.id,
            FirstName: response.data.firstName,
            LastName: response.data.lastName,
            Email: response.data.email,
          });
        });
      }

      handleFirstNameChange(event) {
        this.setState({ 
            FirstName: event.target.value
        });
      }

      handleLastNameChange(event) {
        this.setState({ 
            LastName: event.target.value
        });
      }

      handleEmailChange(event) {
        this.setState({ 
            Email: event.target.value
        });
      }

      handleSubmit(event) {
        event.preventDefault();
        axios.put("https://localhost:7112/api/authors/" + this.state.Id, {
            id: this.state.Id,
            firstName: this.state.FirstName,
            lastName: this.state.LastName,
            email: this.state.Email
        }).then((response) => {
            this.props.router.navigate("/authors");            
        });
      }
    
      render() {
        return (
          <>
            <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Author Details</h1>
              </div>
            </div>
            <div className="container mb-2">
                <form onSubmit={this.handleSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="authorId" className="col-sm-2 col-form-label fw-bolder">Id</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="authorId" value={this.state.Id} disabled readOnly />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="authorFirstName" className="col-sm-2 col-form-label fw-bolder">First Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="authorFirstName" value={this.state.FirstName} onChange={this.handleFirstNameChange} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="authorLastName" className="col-sm-2 col-form-label fw-bolder">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="authorLastName" value={this.state.LastName} onChange={this.handleLastNameChange} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="authorEmail" className="col-sm-2 col-form-label fw-bolder">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="authorEmail" value={this.state.Email} onChange={this.handleEmailChange} />
                        </div>
                    </div>
                    <Link to="/authors" className="btn btn-primary">Back to Authors</Link>
                    <button type="submit" className="btn btn-success">Save</button>
                </form>                
            </div>
            
          </>
        );
      }
    }
    
    export default withRouter(AuthorEdit);