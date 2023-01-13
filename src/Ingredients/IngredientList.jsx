import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class IngredientList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ingredientRows: [] };
    }

    componentDidMount() {
        axios.get("https://localhost:7112/api/ingredients")
            .then(response => {
                let ingredients = response.data;
                this.setState({ ingredientRows: ingredients.map(ingredient => {
                    return (
                    <tr key={ingredient.id}>
                      <td>{ingredient.id}</td>
                      <td>{ingredient.name}</td>
                      <td>{ingredient.quantity}</td>
                      <td>
                        <Link to={`/ingredients/${ingredient.id}`}>
                            <i className="bi bi-file-text"></i>
                        </Link>
                        &nbsp; | &nbsp;
                        <Link to={`/ingredients/${ingredient.id}/edit`}>
                            <i className="bi bi-pencil-square"></i>
                        </Link>
                        &nbsp; | &nbsp;
                        <Link to={`/ingredients/${ingredient.id}/delete`}>
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
                    <h1 className="display-5 fw-bold">Ingredients</h1>
                </div>
                </div>
                <div className="container mb-2">
                <Link to="/ingredients/new" className="btn btn-success mb-2">Create A New ingredient</Link>
                <table  className="table table-striped table-hover table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.ingredientRows}
                    </tbody>
                </table>
                </div>
            </>
          );
    }
}

export default IngredientList;