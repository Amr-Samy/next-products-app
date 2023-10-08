import React from "react";
import { sort } from "fast-sort";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface User {
  id: number;
  name: string;
  username: string;
}
interface Props {
  orderBy: string;
}

const Posts = async ({ orderBy }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  const sortedPosts = sort(posts).asc(
    orderBy === "title" ? (post) => post.title : (post) => post.id
  );
  const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await usersRes.json();

  function getUser(id: number) {
    let user = users.find((o) => o.id === id);
    return user?.username;
  }
  return (
    <div className=" container mt-5 d-flex">
      <Link href="/posts?orderBy=title">ABC </Link>
      <span>|</span>
      <Link href="/posts?orderBy=id">Id</Link>
      <div className="row row-cols-1 row-cols-md-3  ms-3">
        {sortedPosts?.map((post) => (
          <div
            key={post.id}
            className="card overflow-hidden align-content-center mb-3 me-3"
            style={{
              width: "20rem",
              height: "20rem",
            }}
          >
            <h5 style={{ textAlign: "center" }}>{post.title}</h5>
            <hr></hr>
            <p>{post.body}</p>
            <hr></hr>
            <h6>Author: {getUser(post.userId)}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
