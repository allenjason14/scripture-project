import React, { Component } from "react";

class inQuote extends Component {

  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();
  //   if (!this.state.firstName || !this.state.lastName) {
  //     alert("Fill out your first and last name please!");
  //   } else if (this.state.password.length < 6) {
  //     alert(
  //       `Choose a more secure password ${this.state.firstName} ${this.state
  //         .lastName}`
  //     );
  //   } else {
  //     alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
  //   }

  //   this.setState({
  //     firstName: "",
  //     lastName: "",
  //     password: ""
  //   });
  // };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default inQuote;