export interface Article {
  item_id: number;
  item_name: string;
  price: number;
  category_name: string;
  description: string;
  img_url: string;
}

export interface ArticleState {
  itemsList: Article[];
  totalItems: number;
}

export interface ArticleFromApi {
  items: Article[];
  total_items: number;
}

export type Category = {
  category_name: string;
};

export interface CategoriesState {
  categories: Category[];
}
