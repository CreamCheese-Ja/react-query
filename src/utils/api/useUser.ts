import { useQuery } from "@tanstack/react-query";
import ky, { HTTPError } from "ky";
import { Users } from "utils/types/user";

export const useUser = () => {
  // 全てのユーザー情報を取得
  const fetchUsers = async () => {
    const res: Users = await ky
      .get("https://jsonplaceholder.typicode.com/users")
      .json();

    console.log("ユーザーリストの取得");

    return res;
  };

  const fetchUsersQuery = useQuery(["users"], fetchUsers, {
    onError: (error: HTTPError) => {
      console.log(`Error: ${error.message}`);
    },
  });

  return { fetchUsersQuery };
};
