import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticlesCard = ({ author, description, publishedAt, title, id }) => {
  return (
    <div className="article-content">
      <Link href={`/articles/${id}`} passHref>
        <a>
          <h2>Author: {author}</h2>
        </a>
      </Link>
      <h3>{title}</h3>
      <h5>Published at: {publishedAt}</h5>
      <p>{description}</p>
    </div>
  );
};

export default ArticlesCard;
