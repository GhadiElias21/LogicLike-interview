export interface Item {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}
export type CardProps = {
  item: Item;
};

export type DataProps = {
  data: Item[];
  loading: boolean;
  error: string | null;
};
