import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";
import ShowMyBookings from "./components/ShowMyBookings";

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
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
