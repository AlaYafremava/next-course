import Link from "next/link";
import A from "../components/A";

const Index = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <A text="Main" href="/" />
        </li>
        <li>
          <A text="Users" href="users" />
        </li>
      </ul>
      <h1>Main Page</h1>
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
    </div>
  );
};

export default Index;
