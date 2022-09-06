import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const seatArray = [
  { id: 1, status: 'Avalable', price: 300 },
  { id: 2, status: 'Booked', price: 300 },
  { id: 3, status: 'Avalable', price: 150 },
  { id: 4, status: 'Avalable', price: 300 },
  { id: 5, status: 'Avalable', price: 100 },
  { id: 6, status: 'Avalable', price: 100 },
  { id: 7, status: 'Booked', price: 100 },
  { id: 8, status: 'Avalable', price: 100 },
  { id: 9, status: 'Avalable', price: 100 },
  { id: 10, status: 'Booked', price: 100 },
  { id: 11, status: 'Avalable', price: 150 },
  { id: 12, status: 'Booked', price: 150 },
  { id: 13, status: 'Avalable', price: 150 },
  { id: 14, status: 'Avalable', price: 150 },
  { id: 15, status: 'Booked', price: 150 },
  { id: 16, status: 'Avalable', price: 150 },
  { id: 17, status: 'Booked', price: 150 },
  { id: 18, status: 'Avalable', price: 150 },
  { id: 19, status: 'Booked', price: 150 },
  { id: 20, status: 'Avalable', price: 150 },
  { id: 21, status: 'Avalable', price: 300 },
  { id: 22, status: 'Booked', price: 300 },
  { id: 23, status: 'Avalable', price: 300 },
  { id: 24, status: 'Avalable', price: 300 },
  { id: 25, status: 'Avalable', price: 300 },
  { id: 26, status: 'Avalable', price: 300 },
  { id: 27, status: 'Booked', price: 300 },
  { id: 28, status: 'Avalable', price: 300 },
  { id: 29, status: 'Avalable', price: 300 },
  { id: 30, status: 'Booked', price: 200 },
  { id: 31, status: 'Avalable', price: 200 },
  { id: 32, status: 'Booked', price: 200 },
  { id: 33, status: 'Avalable', price: 200 },
  { id: 34, status: 'Avalable', price: 200 },
  { id: 35, status: 'Booked', price: 200 },
  { id: 36, status: 'Avalable', price: 200 },
  { id: 37, status: 'Booked', price: 200 },
  { id: 38, status: 'Avalable', price: 200 },
  { id: 39, status: 'Booked', price: 200 },
  { id: 40, status: 'Avalable', price: 200 },
];

const TIcketsWrapper = ({ setSeatDetails }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const selectedSeatArray = useRef([]);
  const selectedSeatDetails = useRef([]);

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
    } else {
      selectedSeatDetails.current = [...selectedSeatDetails.current, _params];
    }
    setSelectedSeats(selectedSeatArray.current);
    setSeatDetails({
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
          >
            <input
              id={element.id}
              type="checkbox"
              name="Language"
              defaultValue={element.id}
              checked={selectedSeats.includes(element.id) ? 'checked' : ''}
              onChange={() => {}}
            />
            <span data-status={element.status}>{element.id}</span>
          </div>
        ))}
    </div>
  );
};

TIcketsWrapper.propTypes = {
  setSeatDetails: PropTypes.func,
};

export default TIcketsWrapper;
