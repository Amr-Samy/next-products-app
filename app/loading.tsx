import React from "react";

const loading = () => {
  return (
    <div>
      <div
        className="spin"
        style={{
          borderRadius: "50%",
          width: "100px",
          height: "100px",
          backgroundColor: "red",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        Loading...
      </div>
    </div>
  );
};

export default loading;
