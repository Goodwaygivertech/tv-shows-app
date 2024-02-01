import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShowList() {
  const [showList, setShowList] = useState([]);
  const getShows = async () => {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();
    setShowList(data);
  };

  useEffect(() => {
    getShows();
  }, []);

  return (
    <>
      <div className="container mt-3 mx-auto">
        <div className="row">
          {showList && showList.length > 0
            ? showList.map(({ score, show }) => {
                return (
                  <>
                    <div class="card mycol mb-2">
                      <div className="listImg">
                        <img
                          src={show.image?.original}
                          class=""
                          alt="No Img"
                        />
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">{show.name}</h5>
                        <p class="card-text">
             
                          <span class="badge text-bg-light m-1">{show.language}</span>
                          <span class="badge text-bg-primary m-1">{show.type}</span>
                          <span class="badge text-bg-info m-1">{show.rating? show.rating.average : NA}</span>
                        </p>
                        <Link to={`/show-details/${show.id}`} class="btn btn-primary">
                          View Details  🚀
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
}
