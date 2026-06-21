import axios from 'axios';
import {useEffect,useState} from 'react';

const API=()=>{
  const [recipes,setRecipes]=useState([]);
  const [selectedRecipe,setSelectedRecipe]=useState(null);

  useEffect(() => {
    const fetchRecipes=async()=>{
      try {
        const response=await axios.get('https://dummyjson.com/recipes');
        setRecipes(response.data.recipes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRecipes();
  },[]);

  return (
    <center>
    <div className="container">
      <h1 className="text-center mb-4">🍴Recipe Gallery</h1>
  
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <div className="card">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.name}
                style={{height:'250px',objectFit:'cover'}}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p>
                  <strong>Cuisine:</strong> {recipe.cuisine}
                </p>
                <p>
                  <strong>Difficulty:</strong> {recipe.difficulty}
                </p>
                <p>
                  <strong>Rating:</strong>⭐{recipe.rating}
                </p>
                <p>
                  <strong>Calories:</strong> {recipe.caloriesPerServing}
                </p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => setSelectedRecipe(recipe)}
                  data-bs-toggle="modal"
                  data-bs-target="#recipeModal"
                >
                  View Recipe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div
        className="modal fade"
        id="recipeModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {selectedRecipe?.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <img
                src={selectedRecipe?.image}
                alt={selectedRecipe?.name}
                className="img-fluid rounded mb-3"
              />
              <p>
                <strong>Cuisine:</strong> {selectedRecipe?.cuisine}
              </p>
              <p>
                <strong>Difficulty:</strong> {selectedRecipe?.difficulty}
              </p>
              <p>
                <strong>Prep Time:</strong>{' '}
                {selectedRecipe?.prepTimeMinutes} min
              </p>

              <p>
                <strong>Cook Time:</strong>{' '}
                {selectedRecipe?.cookTimeMinutes} min
              </p>
              <p>
                <strong>Rating:</strong> ⭐ {selectedRecipe?.rating}
              </p>

              <p>
                <strong>Calories:</strong>{' '}
                {selectedRecipe?.caloriesPerServing}
              </p>

              <h5 className="mt-4">Ingredients</h5>
              <ul>
                {selectedRecipe?.ingredients?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h5 className="mt-4">Instructions</h5>

              <ol>
                {selectedRecipe?.instructions?.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>

            </div>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    </center>
  );
};

export default API;