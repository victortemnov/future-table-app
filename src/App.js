import React from "react";
import _ from "lodash";
import ReactPaginate from "react-paginate";
import Loader from "./components/Loader/Loader";
import Table from "./components/Table/Table";
import MemberDetail from "./components/MemberDetail/MemberDetail";
import ModeSelector from "./components/ModeSelector/ModeSelector";

class App extends React.Component {
  state = {
    isLoading: false,
    data: [],
    sort: "asc",
    sortByField: "id",
    row: null,
    isModeSelected: false,
  };

  async fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortByField, this.state.sort),
    });
  }

  onSort = (sortByField) => {
    const cloneData = this.state.data.concat();
    const sort = this.state.sort === "asc" ? "desc" : "asc";
    const data = _.orderBy(cloneData, sortByField, sort);

    this.setState({
      data,
      sort,
      sortByField,
    });
  };

  selectRow = (row) => {
    this.setState({ row });
  };

  modeChanger = (url) => {
    this.setState({
      isModeSelected: true,
      isLoading: true,
    });
    this.fetchData(url);
  };

  pageChange = (page) => console.log(page);

  render() {
    const pageSize = 50;

    if (!this.state.isModeSelected) {
      return (
        <div className="container">
          <ModeSelector onSelect={this.modeChanger} />
        </div>
      );
    }

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
            selectRow={this.selectRow}
          />
        )}

        {this.state.data.length > pageSize ? (
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.pageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
          />
        ) : null}

        {this.state.row ? <MemberDetail person={this.state.row} /> : null}
      </div>
    );
  }
}

export default App;
