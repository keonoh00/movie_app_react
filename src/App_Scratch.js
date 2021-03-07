import React from "react";
import axios from "axios";
// import PropTypes from "prop-types";

/*
function Food({ name, image, rating }) {
  return <div>
      <h3>I like {name}</h3>
      <h4>{rating} / 5</h4>
      <img src={image} alt={name}/>
    </div>;
}
*/

// Below is props

/* 
const foodUserSelect = [
  {
    id: 1,
    name: "Beef",
    image: "https://www.beefmagazine.com/sites/beefmagazine.com/files/styles/article_featured_retina/public/rocky-mountain-grilled-t-b%20copy_6.png?itok=9tWhjmNg",
    rating: 5
  },
  {
    id: 2,
    name: "Pork",
    image: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/01/pork.jpg",
    rating: 4
  },
  {
    id: 3,
    name: "Chicken",
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/12/0/FN_Pats-Beercan-Chicken_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382539876282.jpeg",
    rating: 4.5
  },
  {
    id: 4,
    name: "Lamb",
    image: "https://www.simplyrecipes.com/thmb/sN5DV4PUSbqNW4lxBNjnTUvmaFk=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2013__02__Rosemary-Lamb-Chops-LEAD-2-4b70775441df47848c0b4352446bac77.jpg",
    rating: 4.3
  },
  {
    id: 5,
    name: "Sausage",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntZtczd0S9mvwl0A22W2l64f97KmBJvXv4A&usqp=CAU",
    rating: 3.2
  }
];
*/

// proptypes returns error if there is wrong or missing information in the prop

/*

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired

}

// command: npm i prop-types will install proptypes in package.json

function App() {
  return (
    <div>
      {foodUserSelect.map(dish =>
        <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />
      )}
    </div>
  );
}

*/


// class component has state while function does not
class App extends React.Component {
  
  state = {
    count: 0
  };
  // to declare a new function, function add() {content} syntax is not used because it does not bind to "this".
  // it requires more lines of code to allow function to use data of "this"
  add = () => {
    // setState is used rather than just state to show re-render the page by react
    // state function is not appropriate because re-rendering is requred to re-load the page with the new state
    this.setState(current => ({count :  current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count :  current.count - 1}));
  };
  // class method renders not return while function returns
  render() {
    return <div>
      <h1>I'm a class, the number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>; 
  }
}




export default App;