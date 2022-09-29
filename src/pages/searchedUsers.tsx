import { Link } from "react-router-dom";

export function SearchUsers({ filteredUsers }) {
  if (filteredUsers === null) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <ul className="searched-users_list">
        {filteredUsers.map((user) => (
          <Link to={ `/profile/${user.id}`}>
          <li className="searched-user">
            <img src={user.image}></img>
            <p>{user.name}</p>
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
