import React from "react";
import { Article } from "../../models";
import "./singleItem.css";

const SingleItem = ({
  item_id,
  item_name,
  description,
  img_url,
  price,
  category_name,
}: Article) => {
  return (
    <div className='singleItem'>
      <img src={img_url} alt={item_name} />
      <p>{item_name}</p>
      <p>{price}</p>
    </div>
  );
};

export default SingleItem;
