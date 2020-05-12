export const DELETE_USER = "DELETE_USER";
export const   DETAILS_USER = "DETAILS_USER";
export const   ADD_USER = "ADD_USER";
export const   ADD_USERS = "ADD_USERS";
export function DeleteUser(id) {
  return {
    type: DELETE_USER,
    payload: id,
  };
}

export function DetailsUser(id) {
  return {
    type: DETAILS_USER,
    payload: id,
  };
}

export function AddUser(user) {
    return {
      type: ADD_USER,
      payload: user,
    };
  }
  
  export function AddUsers(users) {
    return {
      type: ADD_USERS,
      payload: users,
    };
  }
  


