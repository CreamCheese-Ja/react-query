import { useQueryClient } from "@tanstack/react-query";
import { Users } from "utils/types/user";

const UserNames = () => {
  const queryClient = useQueryClient();
  const users: Users | undefined = queryClient.getQueryData(["users"]);

  return (
    <div>
      <h2>UserNames</h2>
      {users && users.map((user) => <p key={user.name}>{user.name}</p>)}
    </div>
  );
};

export default UserNames;
