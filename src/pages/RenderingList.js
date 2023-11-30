import React from "react";

function RenderingList() {
   const products = [
      { title: "Cabbage", id: 1, isFruit: true },
      { title: "Garlic", id: 2 },
      { title: "Apple", id: 3 },
   ];

   const listItems = products.map((product) => (
      <li
         key={product.id}
         style={{
            color: product.isFruit ? "magenta" : "darkgreen",
         }}
      >
         {product.title}
      </li>
   ));

   return <ul>{listItems}</ul>;
}

export default RenderingList;
