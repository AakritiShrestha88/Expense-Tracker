import React from "react";
import { CreateComponent } from "./CreateComponent";
//6.ExpenseComponent will return JSX
//6.whic div wrapping expenses description and expenses amount
//6.jsx get return

export class EditExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      category: "",
      description: "",
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.handleOnCancelClick = this.handleOnCancelClick.bind(this);
    this.handleOnCreateClick = this.handleOnCreateClick.bind(this);
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onAmountChange(event) {
    this.setState({ amount: event.target.value });
  }

  onCategoryChange(event) {
    this.setState({ category: event.target.value });
  }

  onDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }
  handleOnCancelClick(event) {
    event.preventDefault();
    this.setState({
      name: "",
      amount: "",
      category: "",
      description: "",
    });
    this.props.toggle();
  }

  handleOnCreateClick(event) {
    event.preventDefault();
    this.saveExpense();
    this.setState({
      name: "",
      amount: "",
      category: "",
      description: "",
    });
    this.props.toggle();
  }

  saveExpense() {
    //request options
    const options = {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    };
    //send POST request
    fetch("http://localhost:8080/expense", options)
      .then((res) => res.json())
      .then((res) => this.props.add(res));
  }

  render() {
    return (
      <div>
        <form>
          <div className="Name">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onNameChange}
            />
          </div>
          <div className="Amount">
            <label>Amount</label>
            <input
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
            />
          </div>

          <div className="category">
            <label>Category</label>
            <select
              name="category"
              value={this.state.category}
              onChange={this.onCategoryChange}
            >
              <option value=""></option>
              <option value="transport">Transport</option>
              <option value="food">Food</option>
              <option value="Travel">travel</option>
            </select>
          </div>

          <div className="description">
            <label>
              Description
              <textarea
                name="description"
                value={this.state.description}
                onChange={this.onDescriptionChange}
              />
            </label>
            <div className="cancel">
              <button onClick={this.handleOnCancelClick}>Cancel</button>

              <button onClick={this.handleOnCreateClick}>Create</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// <input
// type="text"
// name="category"
// value={this.state.category}
// onChange={this.onCategoryChange}
// />

// <label>Description</label>
//             <input
//               type="text"
//               name="description"
//               value={this.state.description}
//               onChange={this.onDescriptionChange}
//             />
