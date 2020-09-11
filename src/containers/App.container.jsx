import React from "react";
import App from "./App";
import { setSearchField, requestRobots } from "../actions";
import { connect } from "react-redux";

const AppContainer = (props) =>( 
  <App {...props} />)
;

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
