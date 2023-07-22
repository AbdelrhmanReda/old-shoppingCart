import React, { Component } from "react";

class Login extends Component {
  state = {};
  username = React.createRef();
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello", this.username.current.value);
    console.log(e);
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit ={(e) => this.handleSubmit(e)}>
          <div className="form-outline mb-4">
            <input ref={this.username} type="email" id="form2Example1" className="form-control" />
            <label className="form-label" >
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
            />
            <label className="form-label" >
              Password
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sign in
          </button>
        </form>
      </>
    );
  }
}

export default Login;
