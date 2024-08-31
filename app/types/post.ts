import { JSXElementConstructor, ReactElement } from "react";

export type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};

export type Post = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
