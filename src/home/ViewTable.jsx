import React from 'react'
// import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ViewTable = ({booking}) => {
  
  return booking.map(bookings=>(
    <tr key={bookings.id}>
        <td>{bookings.checkIn}</td>
        <td>{bookings.checkout}</td>
        <td>{bookings.adult}</td>
        <td>{bookings.child}</td>
        {/* <td>{price}</td> */}
        {/* <td className='dlt-btn' onClick={deleteBtn}>
          <FaTrash />
        </td> */}
        <td> <Link to={'/checkout'}><button type='submit'  className='btn btn-warning' >Book Now</button></Link></td>

  </tr>
  )) 
  
  
}

export default ViewTable
