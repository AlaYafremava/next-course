import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"nextjs, javascript, " + keywords}></meta>
        <title>Main Page</title>
      </Head>
      <ul className="navbar">
        <li>
          <A text="Main" href="/" />
        </li>
        <li>
          <A text="Users" href="users" />
        </li>
      </ul>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: tomato;
            padding: 15px;
            list-style: none;
            margin: 0;
            display: flex;
          }
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
