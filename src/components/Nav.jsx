import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {

    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <Link to={"/"}  class="navbar-brand">TV Shows </Link>

          <div className="d-flex gap-4">
            <Link
              to={"/show-my-bookings"}
              class="btn btn-primary position-relative "
            >
              Bookings
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {bookings.length}
                <span class="visually-hidden">unread messages</span>
              </span>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
