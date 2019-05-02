import React from "react";

const Product = props => {
  const { product } = props;
  const color = product.stocked ? "black" : "red";
  return (
    <tr>
      <td style={{ color: color }}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default Product;
