import React from 'react';
import axios from 'axios';


class AuthorList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authorRows: [] };
    }

    componentDidMount() {
        axios.get("https://localhost:7112/api/authors")
            .then(response => {
                let authors = response.data;
                this.setState({ authorRows: authors.map(author => {
                    return (
                    <tr key={author.id}>
                      <td>{author.id}</td>
                      <td>{author.firstName}</td>
                      <td>{author.lastName}</td>
                      <td>{author.email}</td>
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
                    <h1 className="display-5 fw-bold">Authors</h1>
                </div>
                </div>
                <div className="container mb-2">
                <table  className="table table-striped table-hover table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.authorRows}
                    </tbody>
                </table>
                </div>
            </>
          );
    }
}

export default AuthorList;