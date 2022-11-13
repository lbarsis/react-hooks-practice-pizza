import React from "react";

function Pizza({pizza, onChangePizza}) {
  const {id, topping, size, vegetarian} = pizza

  function editPizza() {
    onChangePizza({
      id: id,
      topping: topping,
      size: size,
      vegetarian: vegetarian
    })
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={editPizza}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
