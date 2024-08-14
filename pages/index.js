import Link from "next/link";

const Index = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link href="/" legacyBehavior>
            <a className="navbar__link">Main</a>
          </Link>
        </li>
        <li>
          <Link href="/users" legacyBehavior>
            <a className="navbar__link">Users</a>
          </Link>
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
          .navbar__link {
            text-decoration: none;
            color: white;
            font-size: 20px;
            margin: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
