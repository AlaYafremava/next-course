import { useRouter } from "next/router";
import styles from "../../styles/User.module.scss";

export default function User({ user }) {
  const { query } = useRouter();
  return (
    <div className={styles.user}>
      <h1>User's id: {query?.id}</h1>
      <span>User's name: {user?.name}</span>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user },
  };
}
