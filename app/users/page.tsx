import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

const Users = async () => {
  const res = await fetch("");
  const users = res.json();
  return (
    <div>
      Hello Users <br></br>
      <Link href="users/new">new user</Link>
    </div>
  );
};

export default Users;
