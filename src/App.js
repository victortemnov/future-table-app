import React from "react";
import Loader from "./components/Loader/Loader";

class App extends React.Component {
  async componentDidMount() {
    const response = await fetch(
      `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    );
    const data = await response.json();
  }

  render() {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  }
}

export default App;
