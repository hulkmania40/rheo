import React from "react";
import PropTypes from "prop-types";

import "./SideMenu.scss";
import Button from "./Button";

const SideMenu = ({ seatDetails }) => {
  let selectedSeats =
    seatDetails.items &&
    seatDetails.items.map((item, i) => {
      return (
        <span key={i} value={item} className="selectedseats">
          {item}
        </span>
      );
    });

  return (
    <div className="sidemenuWrp">
      <h2>Diary (U/A) - Tamil</h2>
      <h4>Tamil | 2D | U/A</h4>
      <div className="sidemenudash"></div>
      <div className="title">
        theatres
        <div className="subtitle">
          <div>devicineplex |</div>
          <div>devi bala</div>
        </div>
      </div>
      <div className="title">
        showtime
        <div className="subtitle">
          <div>mon, 05 sep 07:30PM</div>
        </div>
      </div>
      <div className="sidemenudash"></div>
      {/* <h3>Seats: <span>{seatDetails.numberOfSeats?seatDetails.items.join(", "):"No Seat Selected"}</span></h3> */}
      <div className="seats">
        {seatDetails.numberOfSeats ? selectedSeats : "No Seats Selected"}
      </div>
      <div className="sidemenudash"></div>
      <div className="sdmnprcnt">
        <p>
          {seatDetails.numberOfSeats ? seatDetails.numberOfSeats : 0} Seat(s)
        </p>
        <span>
          &#8377; {seatDetails.price ? seatDetails.price.toFixed(2) : 0}
        </span>
      </div>
      <Button text="Continue" color="Orange" />
      <Button text="Cancel" />
    </div>
  );
};

SideMenu.propTypes = {
  seatDetails: PropTypes.object,
};

export default SideMenu;
