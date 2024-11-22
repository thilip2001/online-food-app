import React from "react";

const ShimmerUI = () => {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: 20,
        paddingLeft: 10,
      }}
    >
      {numbers.map((num) => (
        <div
          key={num}
          style={{
            width: 180,
            height: 280,
            border: "1px solid #000",
            borderRadius: "10px",
            background:'#f0f0f0'
          }}
        ></div>
      ))}
    </div>
  );
};

export default ShimmerUI;
