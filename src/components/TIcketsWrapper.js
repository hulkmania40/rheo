import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import EventSeatOutlinedIcon from '@mui/icons-material/EventSeatOutlined';

import './TicketsWrapper.scss';

const seatArray = [
  { id: 1, status: 'Available', price: 152.56 },
  { id: 2, status: 'Booked', price: 152.56 },
  { id: 3, status: 'Available', price: 152.56 },
  { id: 4, status: 'Available', price: 152.56 },
  { id: 5, status: 'Available', price: 152.56 },
  { id: 6, status: 'Available', price: 152.56 },
  { id: 7, status: 'Booked', price: 152.56 },
  { id: 8, status: 'Available', price: 152.56 },
  { id: 9, status: 'Available', price: 152.56 },
  { id: 10, status: 'Booked', price: 152.56 },
  { id: 11, status: 'Available', price: 152.56 },
  { id: 12, status: 'Booked', price: 152.56 },
  { id: 13, status: 'Available', price: 152.56 },
  { id: 14, status: 'Available', price: 152.56 },
  { id: 15, status: 'Booked', price: 152.56 },
  { id: 16, status: 'Available', price: 152.56 },
  { id: 17, status: 'Booked', price: 152.56 },
  { id: 18, status: 'Available', price: 152.56 },
  { id: 19, status: 'Booked', price: 152.56 },
  { id: 20, status: 'Available', price: 152.56 },
  { id: 21, status: 'Available', price: 152.56 },
  { id: 22, status: 'Booked', price: 152.56 },
  { id: 23, status: 'Available', price: 152.56 },
  { id: 24, status: 'Available', price: 152.56 },
  { id: 25, status: 'Available', price: 152.56 },
  { id: 26, status: 'Available', price: 152.56 },
  { id: 27, status: 'Booked', price: 152.56 },
  { id: 28, status: 'Available', price: 152.56 },
  { id: 29, status: 'Available', price: 152.56 },
  { id: 30, status: 'Booked', price: 152.56 },
  { id: 31, status: 'Available', price: 152.56 },
  { id: 32, status: 'Booked', price: 152.56 },
  { id: 33, status: 'Available', price: 152.56 },
  { id: 34, status: 'Available', price: 152.56 },
  { id: 35, status: 'Booked', price: 152.56 },
  { id: 36, status: 'Available', price: 152.56 },
  { id: 37, status: 'Booked', price: 152.56 },
  { id: 38, status: 'Available', price: 152.56 },
  { id: 39, status: 'Booked', price: 152.56 },
  { id: 40, status: 'Available', price: 152.56 },
];

const TicketsWrapper = ({ setSeatDetails }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const selectedSeatArray = useRef([]);
  const selectedSeatDetails = useRef([]);

  const [checked, setChecked] = useState([]);
  var updatedList = [...checked];
  
  //* Function to handle the seat click event * //
  const handleSeatClicked = (_params) => {
    if (selectedSeatArray.current.includes(_params.id)) {
      selectedSeatArray.current = selectedSeatArray.current.filter(
        (item) => item !== _params.id
      );
    } else {
      selectedSeatArray.current = [...selectedSeatArray.current, _params.id];
    }
    
    if (selectedSeatDetails.current.includes(_params)) {
      selectedSeatDetails.current = selectedSeatDetails.current.filter(
        (item) => item !== _params
      );
      updatedList.splice(checked.indexOf(_params.id), 1);
    } else {
      selectedSeatDetails.current = [...selectedSeatDetails.current, _params];
      updatedList = [...checked, _params.id];
    }
    setChecked(updatedList);

    setSelectedSeats(selectedSeatArray.current);
    setSeatDetails({
      items:updatedList,
      numberOfSeats: selectedSeatDetails.current.length,
      price: selectedSeatDetails.current.reduce(
        (sum, node) => sum + node.price,
        0
      ),
    });
  };

  return (
    <div className="ticketWraper">
      {seatArray?.length > 0 &&
        seatArray.map((element) => (
          <div
            className="ticketCnt"
            onClick={() => {
              handleSeatClicked(element);
            }}
            key={element.id}
            data-value={element.status}
          >
            <input
              id={element.id}
              type="checkbox"
              name="Language"
              defaultValue={element.id}
              checked={selectedSeats.includes(element.id) ? 'checked' : ''}
              onChange={()=>{}}
            />
            <span data-status={element.status}><EventSeatOutlinedIcon/></span>
            <span>{element.id}</span>
          </div>
        ))}
    </div>
  );
};

TicketsWrapper.propTypes = {
  setSeatDetails: PropTypes.func,
};

export default TicketsWrapper;
