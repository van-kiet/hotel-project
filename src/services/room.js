import axios from "axios";
export const fetchRoomListApi = () => {
  return axios({
    url: "https://6529513e55b137ddc83e9964.mockapi.io/vankiet/api/listRoom",
    method: "GET",
  });
};
export const updateDateListApi = (id, data) => {
  return axios({
    url: `https://6529513e55b137ddc83e9964.mockapi.io/vankiet/api/listRoom/${id}`,
    method: "PUT",
    data: data,
  });
};
