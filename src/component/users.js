
import {  DeleteUser } from "../actions/user.action";
import {  connect } from "react-redux";
import React, { Component } from "react";
import { StartLoding, StopLoding } from "../actions/loding-action";



class User extends Component {
  constructor(props) {
    super(props);
    this.deleteUder = this.deleteUder.bind(this);
    this.props.StartLoding();
    let _self = this;
    setTimeout(function () {
      _self.props.StopLoding();
    }, 1000);
  }
  deleteUder(id) {
    this.props.StartLoding();
  //this.props.DeleteUser(id);

  let _self = this;
  setTimeout(function () {
    _self.props.StopLoding();
    _self.props.DeleteUser(id);
  }, 1000);
  }
  render() {
    const { users } = this.props.users;
    return (
      <div>
        <ul style={{ textAlign: "initial" }}>
          {users &&
            users.map((user) => (
              
              <li key={user.id}>
                {user.name} 
                <button  onClick={() => this.deleteUder(user.id)}>delete</button>
              </li>
              
            ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loding: state.LodingReducer,
    users: state.UserReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  StartLoding: () => dispatch(StartLoding()),
  StopLoding: () => dispatch(StopLoding()),
   DeleteUser: (id) => dispatch(DeleteUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
