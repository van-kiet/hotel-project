import { useContext, useEffect, useState } from "react";
import { fetchRoomListApi } from "../services/room";
import { LoadingContext } from "../contexts/loading/LoadingContext";

export const useRoomList = () => {
  const [roomList, setRoomList] = useState([]);
  const [_, setLoadingState] = useContext(LoadingContext);

  useEffect(() => {
    if (roomList.length === 0) {
      getRoomList();
    }
  }, []);
  const getRoomList = async () => {
    setLoadingState({ isLoading: true });
    try {
      const result = await fetchRoomListApi();

      setRoomList(result.data);
    } catch (error) {
      alert("error");
    } finally {
      setTimeout(() => {
        setLoadingState({ isLoading: false });
      }, 0);
    }
  };

  return roomList;
};
