import React from "react";

const ModeSelector = (props) => {
  const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
  const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
  return (
    <div className="d-flex align-items-center flex-column">
      <h3>Выберите кол-во контактов</h3>
      <div>
        <button
          style={{ width: "100px", marginRight: "30px" }}
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
    </div>
  );
};

export default ModeSelector;
