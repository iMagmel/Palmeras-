import React from 'react';

const ReservationForm = () => {
  return (
    <section className="reservation-form">
      <div className="container">
        <h2>Reservation Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="court">Court</label>
            <select id="court">
              <option value="1">Court 1</option>
              <option value="2">Court 2</option>
              <option value="3">Court 3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" />
          </div>
          <button type="submit" className="btn">Book Now</button>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
