import React from "react";
import { useAppDispatch } from "../hooks/hooks";
import { Category } from "../models";
import { categoriesActions } from "../store/categories-slices";

type Props = {
  categoriesList: Category[];
};

const Categories: React.FC<Props> = ({ categoriesList }) => {
  const dispatch = useAppDispatch();
  const selectCategoryHandler = (category_name: string) => {
    dispatch(categoriesActions.pickedCategory(category_name));
  };
  return (
    <>
      {categoriesList.map((category) => {
        const { category_name }: { category_name: string } = category;
        return (
          <p
            key={category_name}
            onClick={() => selectCategoryHandler(category_name)}>
            {category.category_name}
          </p>
        );
      })}
    </>
  );
};

export default Categories;
