import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class StepList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { stepRows: [] };
    }

    componentDidMount() {
        axios.get("https://localhost:7112/api/steps")
            .then(response => {
                let steps = response.data;
                this.setState({ stepRows: steps.map(step => {
                    return (
                    <tr key={step.id}>
                      <td>{step.id}</td>
                      <td>{step.text}</td>
                      <td>{step.order}</td>
                      <td>
                        <Link to={`/steps/${step.id}`}>
                            <i className="bi bi-file-text"></i>
                        </Link>
                        &nbsp; | &nbsp;
                        <Link to={`/steps/${step.id}/edit`}>
                            <i className="bi bi-pencil-square"></i>
                        </Link>
                        &nbsp; | &nbsp;
                        <Link to={`/steps/${step.id}/delete`}>
                            <i className="bi bi-trash"></i>
                        </Link>
                      </td>
                    </tr>
                    );
                  })
            });
        });
    }

    render() {
        return (
            <>
                <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Steps</h1>
                </div>
                </div>
                <div className="container mb-2">
                <Link to="/steps/new" className="btn btn-success mb-2">Create A New Step</Link>
                <table  className="table table-striped table-hover table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Text</th>
                        <th scope="col">Order</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.stepRows}
                    </tbody>
                </table>
                </div>
            </>
          );
    }
}

export default StepList;