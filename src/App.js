import React from "react";
import Loader from "./components/Loader/Loader";
import Table from "./components/Table/Table";
import _ from "lodash";

class App extends React.Component {
  state = {
    isLoading: true,
    data: [],
    sort: "asc",
    sortByField: "id",
  };

  async componentDidMount() {
    const response = await fetch(
      `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    );
    const data = await response.json();

    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortByField, this.state.sort),
    });
  }

  onSort = (sortByField) => {
    const cloneData = this.state.data.concat();
    const sortByType = this.state.sort === "asc" ? "desc" : "asc";
    const orderedByData = _.orderBy(cloneData, sortByField, sortByType);

    this.setState({
      data: orderedByData,
      sort: sortByType,
      sortByField,
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Table
            data={this.state.data}
            onSort={this.onSort}
            sort={this.state.sort}
            sortByField={this.state.sortByField}
          />
        )}
      </div>
    );
  }
}

export default App;
