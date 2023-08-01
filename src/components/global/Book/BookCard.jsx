import React from "react";

const BookCard = ({ title, price, author }) => {
  const Style = {
    display: "flex",
    gap: "15px",
    border: "2px solid pink",
    margin: "10px",
  };
  return (
    <div style={Style}>
      <h2>{title}</h2>
      <h4>Rs. {price}</h4>
      <h4>{author}</h4>
    </div>
  );
};

export default BookCard;
