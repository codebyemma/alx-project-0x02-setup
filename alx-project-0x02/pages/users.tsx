"use client"; // add this if you're in Next.js app directory

import { useEffect, useState } from "react";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

const User: React.FC<UserProps>= ({name, email, address}) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const result: UserProps[] = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div>
        <UserCard
          key={item.id}
          name={item.name}
          email={item.email}
          address={item.address}
        />
        </div>
      ))}
    </div>
  );
};

export default User;