import React from "react";

class AddNewUser extends React.Component {
  state = {
    isOpenFrom: false,
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  addNewRow = () => {
    this.setState({ isOpenFrom: false });
    const { createUser } = this.props;
    const user = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
    };
    createUser(user);
  };

  openFormHandler = () => {
    this.setState({ isOpenFrom: true });
  };

  idHandler = (event) => {
    let value = event.target.value;
    this.setState({ id: value });
  };

  firstNameHandler = (event) => {
    let value = event.target.value;
    this.setState({ firstName: value });
  };

  lastNameHandler = (event) => {
    let value = event.target.value;
    this.setState({ lastName: value });
  };

  emailHandler = (event) => {
    let value = event.target.value;
    this.setState({ email: value });
  };

  phoneHandler = (event) => {
    let value = event.target.value;
    this.setState({ phone: value });
  };

  render() {
    return (
      <div>
        {this.state.isOpenFrom ? (
          <div className="d-flex justify-content-start mb-3">
            <button
              style={{ marginRight: "100px" }}
              className='className="d-flex btn btn-success'
              onClick={this.addNewRow}
            >
              {"Create user".toUpperCase()}
            </button>
            <br />
            <input
              style={{ marginRight: "5px" }}
              placeholder="ID"
              type="text"
              value={this.state.id}
              onChange={this.idHandler}
            />
            <input
              style={{ marginRight: "5px" }}
              placeholder="First name"
              type="text"
              value={this.state.firstName}
              onChange={this.firstNameHandler}
            />
            <input
              style={{ marginRight: "5px" }}
              placeholder="Last name"
              type="text"
              value={this.state.lastName}
              onChange={this.lastNameHandler}
            />
            <input
              style={{ marginRight: "5px" }}
              placeholder="Email"
              type="text"
              value={this.state.email}
              onChange={this.emailHandler}
            />
            <input
              style={{ marginRight: "5px" }}
              placeholder="Phone"
              type="text"
              value={this.state.phone}
              onChange={this.phoneHandler}
            />
          </div>
        ) : (
          <button
            className="btn btn-primary w-100 mb-3"
            onClick={this.openFormHandler}
          >
            {"Add user".toUpperCase()}
          </button>
        )}
      </div>
    );
  }
}

export default AddNewUser;
