import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserList from "../src/components/organisms/userList/UserList";
import BasicButton from "components/atoms/BasicButton";
import UserNames from "components/organisms/userNames/UserNames";
import { useState } from "react";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
}

export default App;
