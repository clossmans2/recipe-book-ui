import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { recipeRows: [] };
    }

    componentDidMount() {
        axios.get("https://localhost:7112/api/recipes")
            .then(response => {
                let recipes = response.data;
                this.setState({ recipeRows: recipes.map(recipe => {
                    return (
                    <tr key={recipe.id}>
                      <td>{recipe.id}</td>
                      <td>{recipe.name}</td>
                      <td>{recipe.description}</td>
                      <td>{recipe.prepTime}</td>
                      <td>
                        <Link to={`/recipes/${recipe.id}`}>
                            <i className="bi bi-file-text"></i>
                        </Link>
                        &nbsp; | &nbsp;
                        <Link to={`/recipes/${recipe.id}/edit`}>
                            <i className="bi bi-pencil-square"></i>
                        </Link>
                        &nbsp; | &nbsp;
                        <Link to={`/recipes/${recipe.id}/delete`}>
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
                    <h1 className="display-5 fw-bold">Recipes</h1>
                </div>
                </div>
                <div className="container mb-2">
                <Link to="/recipes/new" className="btn btn-success mb-2">Create A New Recipe</Link>
                <table  className="table table-striped table-hover table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Prep Time</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.recipeRows}
                    </tbody>
                </table>
                </div>
            </>
          );
    }
}

export default RecipeList;