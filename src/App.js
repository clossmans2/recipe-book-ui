import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import { AuthorDetails, AuthorEdit, AuthorList, NewAuthor, AuthorDeleteConfirm } from "./Authors";
import { IngredientDetails, IngredientEdit, IngredientList, NewIngredient, IngredientDeleteConfirm } from "./Ingredients";
import { StepDetails, StepEdit, StepList, NewStep, StepDeleteConfirm } from "./Steps";
import { RecipeDetails, RecipeEdit, RecipeList, NewRecipe, RecipeDeleteConfirm } from "./Recipes";
import { Layout } from "./Shared";
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
          <Route path="ingredients/:ingredientId/delete" element={<IngredientDeleteConfirm />}></Route>
          <Route path="ingredients/:ingredientId/edit" element={<IngredientEdit />}></Route>
          <Route path="ingredients/:ingredientId" element={<IngredientDetails />}></Route>
          <Route path="ingredients/new" element={<NewIngredient />}></Route>
          <Route path="ingredients" element={<IngredientList />} />
          <Route path="steps/:stepId/delete" element={<StepDeleteConfirm />}></Route>
          <Route path="steps/:stepId/edit" element={<StepEdit />}></Route>
          <Route path="steps/:stepId" element={<StepDetails />}></Route>
          <Route path="steps/new" element={<NewStep />}></Route>
          <Route path="steps" element={<StepList />} />           
          <Route path="recipes/:recipeId/delete" element={<RecipeDeleteConfirm />}></Route>
          <Route path="recipes/:recipeId/edit" element={<RecipeEdit />}></Route>
          <Route path="recipes/:recipeId" element={<RecipeDetails />}></Route>
          <Route path="recipes/new" element={<NewRecipe />}></Route>
          <Route path="recipes" element={<RecipeList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
