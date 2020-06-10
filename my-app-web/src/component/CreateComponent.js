import React from "react";
//6.ExpenseComponent will return JSX
//6.whic div wrapping expenses description and expenses amount
//6.jsx get return
let colorToDisplay = "";

export function CreateComponent(props) {
  if (props.expense.category === "food") {
    colorToDisplay = (
      <div className="Home" style={{ background: "green" }}>
        <p className="Home-description">{props.expense.description}</p>
        <p className="Home-amount">${props.expense.amount}</p>
        <div style={{ clear: "both" }} />
      </div>
    );
  } else if (props.expense.category === "transport") {
    colorToDisplay = (
      <div className="Home" style={{ background: "red" }}>
        <p className="Home-description">{props.expense.description}</p>
        <p className="Home-amount">${props.expense.amount}</p>
        <div style={{ clear: "both" }} />
      </div>
    );
  } else if (props.expense.category === "Travel") {
    colorToDisplay = (
      <div className="Home" style={{ background: "blue" }}>
        <p className="Home-description">{props.expense.description}</p>
        <p className="Home-amount">${props.expense.amount}</p>
        <div style={{ clear: "both" }} />
      </div>
    );
  }

  return <div>{colorToDisplay}</div>;
}

// export function CreateComponent(props) {
//   return (
//     <div className="Home">
//       <p className="Home-description">{props.expense.description}</p>
//       <p className="Home-amount">${props.expense.amount}</p>
//       <div style={{ clear: "both" }} />
//     </div>
//   );
// }
