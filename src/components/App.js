import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [pizzaFormData, setPizzaFormData] = useState({
    topping: '',
    size: 'Small',
    vegetarian: 'Not Vegetarian'
  })

  function changePizzaFormData(e) {
    setPizzaFormData({
      ...pizzaFormData,
      [e.target.name]: e.target.value
    })
  }

  function handleUpdatedPizza(updatedPizza) {
    const displayPizzas = pizzas.map(pizza => {
      if (pizza.id === updatedPizza.id) {
        return updatedPizza
      } else {
        return pizza
      }
    })
    setPizzas(displayPizzas)
    setPizzaFormData({
      topping: '',
      size: 'Small',
      vegetarian: 'Not Vegetarian'
    })
  }

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(r => r.json())
    .then(pizzas => setPizzas(pizzas))
  }, [])

  return (
    <>
      <Header />
      <PizzaForm onChangePizza={changePizzaFormData} pizzaFormData={pizzaFormData} onUpdatePizza={handleUpdatedPizza}/>
      <PizzaList pizzas={pizzas} onChangePizza={setPizzaFormData} pizzaFormData={pizzaFormData}/>
    </>
  );
}

export default App;
