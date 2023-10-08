import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand text-primary" href="#">
          Home
        </Link>

        <Link
          className="nav-link active "
          aria-current="page"
          href="/users/new"
        >
          New user
        </Link>
        <Link className="nav-link active " aria-current="page" href="/users/5">
          user num 5
        </Link>

        <Link
          className="nav-link active "
          aria-current="page"
          href="/users/5/products/9"
        >
          product 9
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active "
                aria-current="page"
                href="users/new"
              >
                New user
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
