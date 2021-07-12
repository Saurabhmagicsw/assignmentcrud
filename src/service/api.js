import axios from "axios";

const produrl =
  "https://my-json-server.typicode.com/Saurabhmagicsw/datbase/stock";
const devurl = "http://localhost:3004/stock";

const url = devurl;

export const dashboard = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const addUser = async (user) => {
  return await axios.post(`${url}`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

export const editUser = async (id, user) => {
  return await axios.put(`${url}/${id}`, user);
};
