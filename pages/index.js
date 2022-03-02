import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Articles | Home</title>
        <meta name="keywords" content="Articles" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          natus, distinctio dicta optio quos at nostrum ipsa sunt perferendis
          quo rerum dolorum architecto fugit necessitatibus. Quam maiores
          similique quibusdam nisi.
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          quae molestiae cum recusandae explicabo libero esse blanditiis,
          perferendis eos, rerum voluptatum sunt doloremque obcaecati odio
          nesciunt eius non, laboriosam mollitia.
        </p>
        <Link href="/posts">
          <a className={styles.btn}>Posts</a>
        </Link>
      </div>
    </>
  );
}
