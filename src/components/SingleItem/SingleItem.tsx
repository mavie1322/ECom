import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { Article } from "../../models";

import "./singleItem.css";

const SingleItem = () => {
  const { item_id } = useParams<string>();
  const itemsList = useAppSelector((state) => state.items.itemsList);

  let item: Article | undefined = itemsList.find(
    (product) => product.item_id === parseInt(item_id!) //even tough it can be null, we assured the compiler it is not
  );

  return (
    <div className='singleItem__container section__margin'>
      <div className='singleItem__container-image'>
        <img src={item?.img_url} alt={item?.item_name} />
      </div>
      <div className='singleItem__container-info'>
        <span>{item?.item_name}</span>
        <span>£ {item?.price}</span>
        <hr />
        <span>{item?.description}</span>
        <hr />
        <span>
          <button>Add</button>
        </span>
      </div>
    </div>
  );
};

export default SingleItem;
