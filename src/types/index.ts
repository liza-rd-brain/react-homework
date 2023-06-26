export type DataItem = {
  description: "string";
  id: string;
  genre: string;
  title: string;
  rating: number;
  director: string;
  releaseYear: 2001;
  posterUrl: string;
  reviewIds: Array<string>;
};

export type ReviewItem = {
  id: string;
  name: string;
  rating: number;
  text: string;
};
