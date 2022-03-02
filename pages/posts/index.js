import React from "react";
import PostCard from "../../components/PostCard";

const Posts = ({ data }) => {
  console.log(data);
  const posts = data;
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard 
          title={post.title} 
          body={post.body} 
          id={post.id} />
        </div>
      ))}
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: { data },
  };
};
