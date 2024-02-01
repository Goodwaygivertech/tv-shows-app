import React from 'react';
import { Link } from 'react-router-dom';

const ShowMyBookings = () => {
  // Get bookings from localStorage
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

  return (
    <div className="container mt-5">
      <h1 className="display-4">My Bookings</h1>
      {bookings.length > 0 ? (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Language</th>
              <th>Type</th>
              <th>Booking Time</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
               
              <tr key={index}>
                 
                <td>{booking.id}</td>
                <td>{booking.name}</td>
                <td>{booking.language}</td>
                <td>{booking.type}</td>
                
                <td>{new Date(booking.bookingTime).toLocaleString()}</td>
                <td>
                  <img
                  className='myImageInList'
                    src={booking.image.original} 
                    alt={booking.name}
                    style={{ width: '40px', height: 'auto' }}
                  />
                </td>
                <td> <Link to={`/show-details/${booking.id}`} > View  🚀 </Link></td>
                
              </tr>
              
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings available.</p>
      )}
    </div>
  );
};

export default ShowMyBookings;
