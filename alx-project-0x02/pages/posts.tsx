import React from "react";
import { GetStaticProps } from "next";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostsPageProps = {
  posts: Post[];
};

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      {posts.map((item) => (
        <PostCard
          key={item.id}
          title={item.title}
          content={item.body}
          userId={String(item.userId)}
        />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return {
    props: { posts },
  };
};

export default Posts;
