import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
  // state = {
  //   name: this.props.product.name,
  //   count: this.props.product.count,
  // };

  // renderNames() {
  //   // if (this.state.name.length === 0) {
  //   //   return <h1>List is Empty</h1>;
  //   // }
  //     // return (
  //     //   <ul>
  //     //     {this.state.name.map((x) => (
  //     //       <li key={x}>{x}</li>
  //     //     ))}
  //     //   </ul>
  //     // );

  // }
  // onClickhandler = (num) => {
  //   this.setState({ count: this.props.productcount + num });
  //   console.log(this.props);
  // };
  // onClickminus = (num) => {
  //   if (this.props.count === 0) this.setState({ count: this.props.count });
  //   else this.setState({ count: this.props.count - num });
  // };
  render() {
    // console.log(this.props);
    // console.log("##############");
    // console.log(this.props.children);
    return (
      <>
       <div className="row">
          <div className="col-1">
            <Link  to={`/product/${this.props.product.id}`} className="">{this.props.product.name}</Link>
            

          </div>
          <div className="col">
           <span className="badge badge-warning">{this.props.product.count}</span>
            <button className="btn btn-danger m-2" onClick={() => this.props.onClickhandler(this.props.product)}>+</button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.onClickminus(this.props.product)}>-
            </button>
            <i className="fa fa-trash m-2" aria-hidden="true" onClick={()=> this.props.onDelete(this.props.product)}></i>
            {console.log(this.props.product)}
          </div>
        </div>
        {/* {this.renderNames()} */}
      </>
    );
  }
}

export default Product;
