import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile';



function App() {
  const [query, setquery] = useState("");

  const [recipes, setrecipes] = useState([]);

  const [healthLabels, sethealthLabels] = useState("vegan")


  const FOOD = "a23e5f52";
  const UZO= "3d6cd37402997aacfa9fcb84faffab33";

  var url = 
  `https://api.edamam.com/search?q=${query}
  &app_id=${FOOD}&app_key=${UZO}&health=${healthLabels}`;

  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
      <h1>Plaza De Food Recipes</h1>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input className="app_input" type="text"  placeholder='enter ingredient' 
          value={query} onChange={(e) => setquery(e.target.value)} />
        <input className='app_submit' type="submit" value="Search" />

        <select className='app_healthLabels'>
          <option onClick={() => sethealthLabels("vegan")}>
            Vegan
          </option>
          <option onClick={() => sethealthLabels("vegetarian")}>
            Vegetarian
          </option>
          <option onClick={() => sethealthLabels("paleo")}>
            Paleo
          </option>
          <option onClick={() => sethealthLabels("dairy-free")}>
            Dairy-free
          </option>
          <option onClick={() => sethealthLabels("gluten-free")}>
            Gluten-free
          </option>
          <option onClick={() => sethealthLabels("wheat-free")}>
            Wheat-free
          </option>
          <option onClick={() => sethealthLabels("low-sugar")}>
            Low-Sugar
          </option>
          <option onClick={() => sethealthLabels("egg-free")}>
            Egg-free
          </option>
          <option onClick={() => sethealthLabels("peanut-free")}>
            Peanut-free
          </option>
          <option onClick={() => sethealthLabels("tree-nut-free")}>
            Tree-nut-free
          </option>
          <option onClick={() => sethealthLabels("soy-free")}>
            Soy-free
          </option>
          <option onClick={() => sethealthLabels("fish-free")}>
            Fish-free
          </option>
          <option onClick={() => sethealthLabels("shellfish-free")}>
            Shellfish-free
          </option>
        </select>

      </form>

      <div className='app_recipes'>
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>

    </div>
  );
}

export default App;
