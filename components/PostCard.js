import Link from "next/link";
import React from "react";

const PostCard = ({ title, body, id }) => {
  return (
    <div>
      <Link href={`/posts/${id}`}>
        <a>
          <h3>{title}</h3>
        </a>
      </Link>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
