import axios from "axios";
import React, { Component } from "react";
class Add extends Component {
  state = { name: "", price: "" };
  handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {...this.state , count :0 , inCart:false }
    await axios.post("http://localhost:3000/products/", obj);
    console.log(obj)
  };
  onChange= (e)=>{
    let state = {...this.state}
    console.log(state)
    state[e.currentTarget.name]=e.currentTarget.value
    this.setState(state)
    
  }
  render() {
    return (
      <>
        <h1>Add Item</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-outline mb-4">
            <input
              type="name"
              id="form2Example1"
              className="form-control"
              name="name"
              onChange={this.onChange}
            />
            <label className="form-label">Item</label>
          </div>

          <div className="form-outline mb-4">
            <input
              name="price"
              type="number"
              id="form2Example2"
              className="form-control"
              onChange={this.onChange}
            />
            <label className="form-label">Price</label>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Add
          </button>
        </form>
      </>
    );
  }
}

export default Add;
