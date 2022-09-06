import React, { useState } from 'react';
import TIcketsWrapper from './TIcketsWrapper';
import SideMenu from './SideMenu';
import './movieWrapper.scss';

const MovieWrapper = () => {
  const [seatDetails, setSeatDetails] = useState({});
  return (
    <div className="container">
      <TIcketsWrapper setSeatDetails={setSeatDetails} />
      <SideMenu seatDetails={seatDetails} />
    </div>
  );
};

export default MovieWrapper;
