import React from "react";
import { useParams } from "react-router-dom";

const Details = (props) => {
  // console.log(props)
  let params = useParams();
  let id = params.id;
  // console.log(id)
  const product = props.product.filter((x) => x.id === parseInt(id))[0];
  // console.log(product);
  console.log(props.history)
  return (
    <>
      <h1>Produt Details</h1>
      <h2>product No: {product.id}</h2>

      <h3>product name : {product.name}</h3>
      <h3>product Count : {product.count}</h3>
    </>
  );
};

export default Details;
