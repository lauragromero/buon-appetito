import React from 'react';
import '../stylesheets/normalize.css'
import '../stylesheets/App.css';
import {getDataFetch} from '../services/Api'
import RecipeList from './RecipeList'
import Search from './Search';
import { Route, Switch } from 'react-router-dom';
import RecipeInfo from './RecipeInfo';
import {fetchSingleRecipe} from '../services/Recipefetch'
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      allRecipes:[], 
      valueInput:'', 
      singleRecipe :{}
    
    }
   this.handleValueInput= this.handleValueInput.bind(this);
   this.fetchSingleRecipe= this.fetchSingleRecipe.bind(this);
   this.renderRecipeInfo = this.renderRecipeInfo.bind(this);
   this.clearInput = this.clearInput.bind(this);
  }

  handleValueInput(value){
    this.setState({
      valueInput: value
    })
  }

  componentDidMount(){
    getDataFetch()
    .then(data=>{
      this.setState({
        allRecipes: data.meals
      })
    })
  }

  
fetchSingleRecipe(id){
  if(id !== this.state.singleRecipe.idMeal){
    fetchSingleRecipe(id)
    .then(data=>{
      this.setState({
        singleRecipe: data.meals[0]
      })
    })
  }
}
  renderRecipeInfo(props){
      this.fetchSingleRecipe(props.match.params.id)
      return <RecipeInfo recipeInfo={this.state.singleRecipe}
                          clearInput={this.clearInput}/>

    }

    clearInput(){
      this.setState({
        valueInput:'',
      })
    }
  


  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" >
            <Search
            valueInput={this.state.valueInput}
            handleValueInput={this.handleValueInput}
            />
            <RecipeList
            allRecipes={this.state.allRecipes}
            valueInput={this.state.valueInput}
            />
          </Route>
          <Route path='/recipe/:id' render={this.renderRecipeInfo}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
