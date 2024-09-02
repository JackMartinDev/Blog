import { JSXElementConstructor, ReactElement } from "react";

export type Meta = {
  id: string;
  title: string;
  date: string;
  summary: string;
};

export type Post = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
