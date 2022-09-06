import React from 'react';
import PropTypes from 'prop-types';

const SideMenu = ({ seatDetails }) => {
  return (
    <div className="sidemenuWrp">
      <h2>Game of Thrones</h2>
      <h4>English | 3D | U/A</h4>
      <h4>Show Times: <span>8:30PM</span></h4>
      <div className="sdmnprcnt">
        <p>No of seats : {seatDetails.numberOfSeats}</p>
        <span>Price: {seatDetails.price}</span>
      </div>
    </div>
  );
};

SideMenu.propTypes = {
  seatDetails: PropTypes.object,
};

export default SideMenu;
