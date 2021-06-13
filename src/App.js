import React from "react";
import _ from "lodash";
import ReactPaginate from "react-paginate";
import Loader from "./components/Loader/Loader";
import Table from "./components/Table/Table";
import MemberDetail from "./components/MemberDetail/MemberDetail";
import ModeSelector from "./components/ModeSelector/ModeSelector";
import Search from "./components/Table/Search";
import AddNewUser from "./components/Table/AddNewUser";

class App extends React.Component {
  state = {
    isModeSelected: false,
    isLoading: false,
    data: [],
    search: "",
    sort: "asc",
    sortByField: "id",
    row: null,
    currentPage: 0,
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

  getFilteredData() {
    const { data, search } = this.state;

    if (!search) {
      return data;
    }

    let result = data.filter((person) => {
      return (
        person["firstName"].toLowerCase().includes(search.toLowerCase()) ||
        person["lastName"].toLowerCase().includes(search.toLowerCase()) ||
        person["email"].toLowerCase().includes(search.toLowerCase())
      );
    });
    if (!result.length) {
      result = this.state.data;
    }
    return result;
  }

  pageChanger = ({ selected }) => {
    this.setState({ currentPage: selected });
  };

  searchHandler = (search) => {
    this.setState({ search, currentPage: 0 });
  };

  createUser = (user) => {
    const copyData = [...this.state.data];
    copyData.unshift(user);
    this.setState({ data: copyData });
  };

  render() {
    const pageSize = 50;

    if (!this.state.isModeSelected) {
      return (
        <div className="container">
          <ModeSelector onSelect={this.modeChanger} />
        </div>
      );
    }

    const filteredData = this.getFilteredData();
    const pageCount = Math.ceil(filteredData.length / pageSize);
    const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];

    return (
      <div className="container">
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Search onSearch={this.searchHandler} />
            <AddNewUser createUser={this.createUser} />
            <Table
              data={displayData}
              onSort={this.onSort}
              sort={this.state.sort}
              sortByField={this.state.sortByField}
              selectRow={this.selectRow}
            />
          </React.Fragment>
        )}

        {this.state.data.length > pageSize ? (
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.pageChanger}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            forcePage={this.state.currentPage}
          />
        ) : null}

        {this.state.row ? <MemberDetail person={this.state.row} /> : null}
      </div>
    );
  }
}

export default App;
