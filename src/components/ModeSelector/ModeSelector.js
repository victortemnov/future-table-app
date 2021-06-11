import React from "react";

const ModeSelector = (props) => {
  const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
  const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "300px",
      }}
    >
      <h3 style={{ marginRight: "30px" }}>Сколько контактов отобразить? </h3>
      <button
        style={{ marginRight: "50px", width: "100px" }}
        onClick={() => props.onSelect(smallUrl)}
        className="btn btn-outline-primary"
      >
        32
      </button>
      <button
        style={{ width: "100px" }}
        onClick={() => props.onSelect(bigUrl)}
        className="btn btn-outline-success"
      >
        1000
      </button>
    </div>
  );
};

export default ModeSelector;
