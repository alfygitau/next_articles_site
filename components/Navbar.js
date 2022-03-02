import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
       <Image src="/logo4.png" alt="logo" height={100} width={100} />
       <span style={{color: "black"}}>articles</span>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/articles">Articles</Link>
    </nav>
  );
};

export default Navbar;
