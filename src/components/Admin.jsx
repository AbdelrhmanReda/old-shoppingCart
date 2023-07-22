import React from "react";

import { Link } from "react-router-dom";
const Admin = props => {
    // console.log(props)

  return (
    <>
      <Link to={"/add"} className="btn btn-primary m-2">
        Add New item
      </Link>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.count}</td>
              {/* <td>
                <AddinCart
                  onClick={props.onClick}
                  product={product}
                ></AddinCart>
              </td> */}
              <td>
                {console.log(props.products)}
                <i className="fa fa-trash" onClick={()=> props.onClick(product)}> </i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Admin;
