import React from "react";
import "./App.css";
import CreateComponent from "./component/CreateComponent";
import { ListView } from "./component/ListView";
import { EditExpenses } from "./component/EditExpenses";
// import { Link } from "react-router-dom";

//6.ExpenseComponent will return JSX
//6.whic div wrapping expenses description and expenses amount
//6.jsx get return

// function CreateComponent(props) {
//   return (
//     <div className="Home">
//       <p className="Home-description">{props.expense.description}</p>
//       <p className="Home-amount">${props.expense.amount}</p>
//       <div style={{ clear: "both" }} />
//     </div>
//   );
// }
//1.when application start state of construction gets run
//1.our state set expenses with empty list
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
      mode: "VIEW",
    };
    this.toggleMode = this.toggleMode.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  toggleMode() {
    this.setState({
      mode: this.state.mode === "VIEW" ? "EDIT" : "VIEW",
    });
  }

  addExpense(expense) {
    this.setState({ expenses: [].concat(this.state.expenses, expense) });
  }
  //2.we get the data from the backend populate our state
  componentDidMount() {
    //we using this method using fetch
    //fetch bthis data whatever it come use function to run it
    fetch("http://localhost:8080/getAllexpenses")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          expenses: data,
        });
      });
  }

  //5.Inside it we have a empty list
  //5.every state in our expenses pass to ExpenseComponent
  //7.jsx get return added inside body list
  //7.once the for loop is done it return the body
  //7.WHole thing get render
  // renderExpenses() {
  //   let body = [];
  //   this.state.expenses.forEach((expense) => {
  //     body.push(<CreateComponent expense={expense} />);
  //   });
  //   return body;
  // }

  //3.Render function get call
  //4.we call renderExpenses() method
  render() {
    return (
      <div>
        <h1>Expense Tracker</h1>
        <div hidden={this.state.mode === "EDIT"}>
          <ListView expenses={this.state.expenses} toggle={this.toggleMode} />
        </div>

        <div hidden={this.state.mode === "VIEW"}>
          <EditExpenses toggle={this.toggleMode} add={this.addExpense} />
        </div>
      </div>
    );
  }
}

export default App;

//style={{ backgroundColor: "green" }}
