import React from "react";

export interface ICard {
  source: {
    id: string;
    name: string;
  };
  author:string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content:string
}

export interface APIresponse {
  articles: ICard[],
  status: string,
  totalResults: number,
}

// export interface IFilter {
//   title: string,
//   items: string[],
//   isSearchFilter?: boolean,
//   onChange?: () => void,
// }