import axios from "axios";
import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      name: "",
      age: "",
      email: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    // e.preventDefault(); // prevents refresh
    console.log(this.state);
    const req = { profile: this.state };
    axios
      .post("http://localhost:8080/v1/profile", req)
      .then((response) => {
        console.log(response);
        this.setState({ profiles: response.data.profiles });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retreiving data" });
      });
  };

  render() {
    const { username, name, age, email } = this.state;
    return (
      <div>
        <h1>Create new profile</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <label>Age: </label>
            <input
              type="text"
              name="age"
              value={age}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.changeHandler}
            ></input>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
