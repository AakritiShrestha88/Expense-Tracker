import React from "react";
import { CreateComponent } from "./CreateComponent";
//6.ExpenseComponent will return JSX
//6.whic div wrapping expenses description and expenses amount
//6.jsx get return

export function ListView(props) {
  let body = [];
  props.expenses.forEach((expense) => {
    body.push(<CreateComponent expense={expense} />);
  });
  return (
    <div>
      <button onClick={props.toggle}>New</button>
      {body}
    </div>
  );
}
