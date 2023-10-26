export interface IShoe {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

export interface IShoesCollection {
  shoes: IShoe[];
}
