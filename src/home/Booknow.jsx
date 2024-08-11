import React, { useEffect, useState } from "react";
import ViewTable from "./ViewTable";
// import { Link, Navigate } from 'react-router-dom'

const getDataFromLS = () => {
  const data = localStorage.getItem("booking");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Booknow = () => {
  const [booking, setBooking] = useState(getDataFromLS());

  const [checkIn, setCheckIn] = useState("");
  const [checkout, setCheckOut] = useState("");
  const [adult, setAdult] = useState("");
  const [child, setChild] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let bookings = {
      checkIn,
      checkout,
      adult,
      child,
    };
    setBooking([...booking, bookings]);
    setCheckIn("");
    setCheckOut("");
    setAdult("");
    setChild("");
  };

  useEffect(() => {
    localStorage.setItem("booking", JSON.stringify(booking));
  }, [booking]);

  return (
    <div>
      <div className="container-fluid booking pb-5 wow fadIn">
        <div className="container">
          <div className="bg-white shadow" style={{ padding: "35px" }}>
            <div className="row g-2">
              <div className="col-md-10">
                <div className="row g-2">
                  <form
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    className="d-flex form-group"
                  >
                    <div className="col-md-3">
                      <div className="date">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Check In"
                          onChange={(e) => setCheckIn(e.target.value)}
                          value={checkIn}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="date">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Check Out"
                          onChange={(e) => setCheckOut(e.target.value)}
                          value={checkout}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <select
                        onChange={(e) => setAdult(e.target.value)}
                        value={adult}
                        className="form-select"
                      >
                        <option selected>Adult</option>
                        <option value="1">Adult 1</option>
                        <option value="2">Adult 2</option>
                        <option value="3">Adult 3</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <select
                        onChange={(e) => setChild(e.target.value)}
                        value={child}
                        className="form-select"
                      >
                        <option selected>Child</option>
                        <option value="1">Child 1</option>
                        <option value="2">Child 2</option>
                        <option value="3">Child 3</option>
                      </select>
                    </div>

                    <div className="col-md-2">
                      <button type="submit" className="btn btn-warning w-100">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="view-container container">
        Confirmation
        <div className="row">
          <div className="col-md-8">
            {booking.length > 0 && (
              <>
                <div className="table-responsive">
                  <div className="table">
                    <thead>
                      <tr>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Adults</th>
                        <th>Child</th>
                      </tr>
                    </thead>
                    <tbody>
                      <ViewTable booking={booking}/>
                    </tbody>
                  </div>
                </div>
              </>
            )}
            {booking.length < 1 && <div>No item are added yet </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booknow;
