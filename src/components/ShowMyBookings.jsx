import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const ShowMyBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
      // Get bookings from localStorage
      const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      setBookings(storedBookings);
    }, []);
  const deleteBooking = (bookingId) => {
    // Filter out the booking with the specified ID
    const updatedBookings = bookings.filter(booking => booking.id !== bookingId);

    // Update state and localStorage with the modified bookings
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    // Display a confirmation message
    toast.success('Booking deleted successfully!');
  };
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
              <th>View</th>
              <th>Delete</th>
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
                    src={booking.image?.original} 
                    alt={booking.name}
                    style={{ width: '40px', height: 'auto' }}
                  />
                </td>
                <td> <Link to={`/show-details/${booking.id}`} > View  🚀 </Link></td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteBooking(booking.id)}
                  >
                    Delete
                  </button>
                </td>
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
