import { useUser } from "utils/api/useUser";
import UserNames from "../userNames/UserNames";

const UserList = () => {
  const { fetchUsersQuery } = useUser();
  const { data, isLoading, isError, status } = fetchUsersQuery;

  console.log(status);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>ユーザー情報を取得できませんでした。</p>;

  return (
    <>
      {data.map((user) => (
        <div key={user.id + user.name}>
          <h3>ユーザーid: {user.id}</h3>
          <ul>
            <li>name: {user.name}</li>
            <li>email: {user.email}</li>
          </ul>
        </div>
      ))}
      {data && <UserNames />}
    </>
  );
};

export default UserList;
