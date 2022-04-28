import axios from "axios";
const endpoint = "https://gorest.co.in/public/v2/users";
const token =
  "00d21e5e821c2b34cd0041d8a4415385d0f257fc6c9d352a52e5e31ec677351f";

export function getData() {
  return (dispatch, getState) => {
    axios({
      url: `${endpoint}`,
      method: "get",
    })
      .then((data) => {
        dispatch({
          type: "GET_DATA",
          payload: data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function addData(input, navigate) {
  return (dispatch, getState) => {
    axios({
      url: `${endpoint}`,
      method: "post",
      data: input,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((data) => {
        dispatch({
          type: "ADD_DATA",
          payload: data.data,
        });
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function deleteData(id) {
  return (dispatch, getState) => {
    axios({
      url: `${endpoint}/${id}`,
      method: "delete",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((data) => {
        dispatch({
          type: "DELETE_DATA",
          payload: id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
