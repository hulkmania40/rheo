import React, { useState } from 'react';
import TicketsWrapper from './TicketsWrapper';
import SideMenu from './SideMenu';
import './movieWrapper.scss';

const MovieWrapper = () => {
  const [seatDetails, setSeatDetails] = useState({});
  return (
    <div className="container">
      <TicketsWrapper setSeatDetails={setSeatDetails} />
      <SideMenu seatDetails={seatDetails} />
    </div>
  );
};

export default MovieWrapper;
