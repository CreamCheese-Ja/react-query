import { useQuery } from "@tanstack/react-query";
import ky from "ky";

export const useUser = () => {
  const fetchUsers = async () => {
    const res = await ky
      .get("https://jsonplaceholder.typicode.com/users")
      .json();

    console.log("ユーザーリストの取得");

    return res;
  };

  const userList = useQuery(["users"], fetchUsers);

  return { userList };
};
