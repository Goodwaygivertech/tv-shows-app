import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowDetails = () => {
  const [showDetails, setShowDetails] = useState(null);
  const params = useParams();
  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        // Fetch all shows
        const allShowsResponse = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const allShowsData = await allShowsResponse.json();

        // Get the show ID from params
        const { showId } = params;

        // Find the show with the matching ID
        const matchingShow = allShowsData.find(
          (show) => show.show?.id.toString() === showId
        );
        console.log("matchingShow =>>>", matchingShow);
        if (matchingShow) {
          setShowDetails(matchingShow.show);
        } else {
          console.error("Show not found.");
        }
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    fetchShowDetails();
  }, []);

  const bookShow = () => {
    // Check if showDetails is available
    if (showDetails) {
      const bookingDetails = {
        id: showDetails.id,
        name: showDetails.name,
        image: showDetails.image,
        language: showDetails.language,
        type: showDetails.type,
        bookingTime: new Date().toISOString(),
      };

      // Get existing bookings from localStorage or initialize an empty array
      const existingBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

      // Add the new booking to the array
      existingBookings.push(bookingDetails);

      // Save the updated bookings array to localStorage
      localStorage.setItem("bookings", JSON.stringify(existingBookings));

      // Optionally, you can display a confirmation message or trigger other actions
      console.log("Show booked successfully!", bookingDetails);
    } else {
      console.error("Unable to book the show. Show details not available.");
    }
  };

  return (
    <div className="container my-5 ">
      {showDetails ? (
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex flex-column">
            
              <img
                src={showDetails.image?.original}
                alt={showDetails.name}
                className="img-fluid mt-3"
              />
            </div>
            <div className="col-md-8">
              <h1 className="display-4">{showDetails.name}</h1>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Type</td>
                    <td>{showDetails.type}</td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td>{showDetails.language}</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>{showDetails.status}</td>
                  </tr>
                  <tr>
                    <td>Runtime</td>
                    <td>{showDetails.runtime} minutes</td>
                  </tr>
                  <tr>
                    <td>Average Runtime</td>
                    <td>{showDetails.averageRuntime} minutes</td>
                  </tr>
                  <tr>
                    <td>Premiered</td>
                    <td>{showDetails.premiered}</td>
                  </tr>
                  <tr>
                    <td>Ended</td>
                    <td>{showDetails.ended}</td>
                  </tr>
                  <tr>
                    <td>Official Site</td>
                    <td>{showDetails.officialSite}</td>
                  </tr>
                  <tr>
                    <td>Rating</td>
                    <td>{showDetails.rating.average}</td>
                  </tr>
                  <tr>
                    <td>Network</td>
                    <td>{showDetails.network?.name}</td>
                  </tr>
                </tbody>
              </table>
              <div
                className="lead"
                dangerouslySetInnerHTML={{ __html: showDetails.summary }}
              />

              <button className="btn btn-success" onClick={bookShow}>
                Book This Show
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowDetails;
