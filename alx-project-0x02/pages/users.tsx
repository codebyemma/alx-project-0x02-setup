import React from "react";
import { GetStaticProps } from "next";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
type UsersPageProps = {
  users: UserProps[];
};

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header/>
      {users.map((item) => (
        <UserCard
          name={item.name}
          email={item.email}
          address={item.address}
        />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: { users },
  };
};

export default UsersPage;