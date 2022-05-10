import { useEffect } from "react";
import SingleItem from "../../containers/SingleItems/SingleItem";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Article } from "../../models";
import { fetchItems } from "../../store/items-actions";
import "./home.css";

const Home = () => {
  const itemsList = useAppSelector((state) => state.items.itemsList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className='home section__margin'>
      {itemsList.map((item: Article) => {
        return <SingleItem key={item.item_id} {...item} />;
      })}
    </div>
  );
};

export default Home;
