import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import { AuthorDetails, AuthorEdit, AuthorList, NewAuthor, AuthorDeleteConfirm } from "./Authors";
import { Layout } from "./Shared";
import IngredientList from './Ingredients/IngredientList';
import StepList from './Steps/StepList';
import RecipeList from './Recipes/RecipeList';
import NotFound from './Utils/NotFound';


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="authors/:authorId/delete" element={<AuthorDeleteConfirm />}></Route>
          <Route path="authors/:authorId/edit" element={<AuthorEdit />}></Route>
          <Route path="authors/:authorId" element={<AuthorDetails />}></Route>
          <Route path="authors/new" element={<NewAuthor />}></Route>
          <Route path="authors" element={<AuthorList />} />          
          <Route path="recipes" element={<RecipeList />} />
          <Route path="ingredients" element={<IngredientList />} />
          <Route path="steps" element={<StepList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
