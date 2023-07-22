import React from "react";
import Cart from "./Cart";

const Menu = props => {
   
  return (
    <>
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
            {props.products.map((product)=>(
                <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.count}</td>
                {/* <td onClick={()=>props.onCart(product)}>
                    
                    <button>In Cart</button></td> */}
                <td><Cart onClick={props.onClick} product={product}></Cart>    </td>
                {console.log(product)}
                
              </tr>

            ))}
          
        </tbody>
      </table>
    </>
  );
};

export default Menu;
