import React from "react";
import { useParams } from "react-router-dom";
import { getItem } from "./listItems";

const OrderOne = () => {
  let param = useParams();

  console.log(param);
  console.log(param.id);

  let item = getItem(param.id);
  console.log(item);

  return (
    <div>
      <h1>{item.name}</h1>
      <h2>{item.price} $ </h2>
      <p>{item.desc}</p>
      <img src={`/img/${item.img}`} alt={item.name} />
    </div>
  );
};

export default OrderOne;
