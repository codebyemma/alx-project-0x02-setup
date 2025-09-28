"use client"; // add this if you're in Next.js app directory

import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";

const Posts = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <PostCard
          key={item.id}
          title={item.name}
          content={item.email}
          userId={item.id}
        />
      ))}
    </div>
  );
};

export default Posts;
