import React from "react";
import Product from "./Product";

const ProductTable = props => {
  const { products } = props;

  const productsList = products.map((product, i) => (
    <Product key={i} product={product} />
  ));

  return (
    <table style={{ width: "50%", margin: "auto" }}>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {productsList}
      </tbody>
    </table>
  );
};

export default ProductTable;
