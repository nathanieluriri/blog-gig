export interface Category {
  itemIndex: number;
  name: string;
  slug: string;
}

export interface CategoryApiResponse {
  status_code: number;
  data: {
    listOfCategories: Category[];
    totalItems: number;
  };
  detail: string;
}
