import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";
import ShowMyBookings from "./components/ShowMyBookings";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
       <Nav></Nav>
       <ShowList></ShowList>
      </>
    ),
  },
  {
    path: "/show-details/:showId",
    element: (
      <>
       <Nav></Nav>
       <ShowDetails></ShowDetails>
      </>
    ),
  },
  {
    path: "/show-my-bookings",
    element: (
      <>
       <Nav></Nav>
       <ShowMyBookings></ShowMyBookings>
      </>
    ),
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />

    </>
  );
}

export default App;
