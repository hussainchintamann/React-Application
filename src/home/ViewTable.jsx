import React from 'react'

const ViewTable = ({booking}) => {
  return booking.map(bookings=>(
    <tr key={bookings.id}>
        <td>{bookings.checkIn}</td>
        <td>{bookings.checkout}</td>
        <td>{bookings.adult}</td>
        <td>{bookings.child}</td>
      
  </tr>
  )) 
  
  
}

export default ViewTable
