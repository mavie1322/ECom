import { useEffect } from "react";
import { Link } from "react-router-dom";
import Items from "../../containers/Items";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Article } from "../../models";
import { fetchItems } from "../../store/items-actions";
import "./home.css";

const Home = () => {
  const itemsList = useAppSelector((state) => state.items.itemsList);
  const pickedCat = useAppSelector(
    (state) => state.categories.selected_category
  );
  console.log(typeof pickedCat);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (pickedCat) {
    let pickedCategory: Article[] = itemsList.filter(
      (item) => item.category_name === pickedCat
    );
    return <Items itemsList={pickedCategory} />;
  }

  return <Items itemsList={itemsList} />;
};

export default Home;
