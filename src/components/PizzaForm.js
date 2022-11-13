import React from "react";

function PizzaForm({onChangePizza, pizzaFormData, onUpdatePizza}) {

  function submitPizza(e) {
    e.preventDefault()
    fetch(`http://localhost:3001/pizzas/${pizzaFormData.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(pizzaFormData)
    })
    .then(r => r.json())
    .then(updatedPizza => onUpdatePizza(updatedPizza))
  }

  return (
    <form onSubmit={submitPizza}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={pizzaFormData.topping}
            onChange={onChangePizza}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={onChangePizza}>
            <option value="Small" >Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={onChangePizza}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={onChangePizza}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
