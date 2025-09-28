"use client"; // add this if you're in Next.js app directory

import { useEffect, useState } from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps>= ({name, email, address}) => {
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
        <h2>{item.name}</h2>
        <p>{item.email}</p>
        <p>{item.address?.street}, {item.address?.city}</p>
        <hr />
        </div>
      ))}
    </div>
  );
};

export default UserCard;
