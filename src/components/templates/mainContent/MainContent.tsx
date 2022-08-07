import UserList from "components/organisms/userList/UserList";
import BasicButton from "components/atoms/BasicButton";
import { useState } from "react";

const MainContent = () => {
  const [showUserList, setShowUserList] = useState(true);

  const toggleShowUserList = () => {
    setShowUserList((showUserList) => !showUserList);
  };

  return (
    <div>
      <BasicButton onClick={toggleShowUserList} />
      {showUserList && <UserList />}
    </div>
  );
};

export default MainContent;
