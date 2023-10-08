import React from "react";
import Posts from "../components/Posts";

interface Props {
  searchParams: { orderBy: string };
}

const PostsPage = ({ searchParams: { orderBy } }: Props) => {
  return <Posts orderBy={orderBy}></Posts>;
};

export default PostsPage;
