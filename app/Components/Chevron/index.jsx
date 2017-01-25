import React, { PropTypes } from 'react'

const Chevron = (props) => {
  const {direction} = props;

  if (direction === 'left') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="94" viewBox="0 0 45 94" onClick={props.onClick}>
        <path fill="#000000" fillRule="evenodd" d="M0,84.9937544 L0,89.7978753 C0,93.6678512 2.09965325,94.4817174 4.69859437,91.6058619 L41.7446614,50.6125755 C43.5963591,48.5635813 43.5969836,45.2421963 41.7446614,43.1925111 L4.69859437,2.19922465 C2.10363235,-0.672227834 0,0.134210531 0,4.00721118 L0,8.8113321 L33.7431004,45.4326626 C34.4910907,46.2444553 34.4882747,47.5636876 33.7431004,48.372424 L0,84.9937544 Z" transform="matrix(-1 0 0 1 43.134 0)"/>
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="94" viewBox="0 0 44 94" onClick={props.onClick}>
      <path fill="#000000" fillRule="evenodd" d="M0,84.9937544 L0,89.7978753 C0,93.6678512 2.09965325,94.4817174 4.69859437,91.6058619 L41.7446614,50.6125755 C43.5963591,48.5635813 43.5969836,45.2421963 41.7446614,43.1925111 L4.69859437,2.19922465 C2.10363235,-0.672227834 0,0.134210531 0,4.00721118 L0,8.8113321 L33.7431004,45.4326626 C34.4910907,46.2444553 34.4882747,47.5636876 33.7431004,48.372424 L0,84.9937544 Z"/>
    </svg>
  );
}

export default Chevron
