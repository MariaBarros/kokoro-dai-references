const myArray = [1,2,3,4,5];
console.log(`${myArray.map(num => `Your result is: ${num + 5}` )}`);

const pizzaToppings = ["peperoni", "cheese", "sauce"];
const myPizzaArticle = (
	`<article>
		<h1>Pizza Ingredients</h1>
		<ul>
  			${pizzaToppings.map( (ingredient) => `<li>${ingredient}</li>`).join("\n")}
		</ul>
	</article>`);

