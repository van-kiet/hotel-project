import { useEffect, useState } from "react";
import { fetchRoomListApi } from "../services/room";

export const useRoomList = () => {
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    getRoomList();
  }, []);
  const getRoomList = async () => {
    try {
      const result = await fetchRoomListApi();
      setRoomList(result.data);
    } catch (error) {
      console.log("hehe");
    }
  };

  // console.log(roomList);
  return roomList;
};
