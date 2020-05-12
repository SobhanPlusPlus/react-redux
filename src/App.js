import "./styles.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {  connect } from "react-redux";
import { StartLoding, StopLoding } from "./actions/loding-action";

import { AddUsers } from "./actions/user.action";
import Loding from "./component/loding";
import React from "react";
import Users from "./component/users";

class App extends React.Component {

  componentDidMount() {
    this.props.StartLoding();

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          let _self = this;
          setTimeout(function () {
            _self.props.StopLoding();
          }, 5000);

          this.props.AddUsers(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      );
  }
  render() {
    return (
      <div>
        <Loding id="loding" />

        <Router>
          <div className="navbar">
            <Link to="/users">user</Link>
            <Link to="/">Home</Link>
          </div>
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loding: state.LodingReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  StartLoding: () => dispatch(StartLoding()),
  StopLoding: () => dispatch(StopLoding()),
  AddUsers: (users) => dispatch(AddUsers(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
