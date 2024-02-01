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
      ? showList.map(({ score, show }) => (
          <div key={show.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
            <div className="card ">
              <div className="listImg">
                <img
                  src={show.image?.original}
                  className="card-img-top"
                  alt="No Img"
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">{show.name}</h5>
                <p className="card-text">
                  <span className="badge text-bg-light m-1">{show.language}</span>
                  <span className="badge text-bg-primary m-1">{show.type}</span>
                  <span className="badge text-bg-info m-1">{show.rating ? show.rating.average : 'NA'}</span>
                </p>
                <Link to={`/show-details/${show.id}`} className="btn btn-primary">
                  View Details  🚀
                </Link>
              </div>
            </div>
          </div>
        ))
      : ""}
  </div>
</div>


    </>
  );
}
