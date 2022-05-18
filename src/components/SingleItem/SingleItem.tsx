import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Article } from "../../models";
import { basketActions } from "../../store/basket-slices";

import "./singleItem.css";

const SingleItem = () => {
  const { item_id } = useParams<string>();
  const itemsList = useAppSelector((state) => state.items.itemsList);
  const basket = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();
  let item: Article | undefined = itemsList.find(
    (product) => product.item_id === parseInt(item_id!) //even tough it can be null, we assured the compiler it is not
  );

  console.log(basket);
  const addToBasketHandler = (item: Article) => {
    const itemToAdd = {
      item_basket: item,
      quantity_ordered: 1,
    };
    dispatch(basketActions.addItemToBasket(itemToAdd));
  };

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
          <button onClick={() => addToBasketHandler(item!)}>Add</button>
        </span>
      </div>
    </div>
  );
};

export default SingleItem;
