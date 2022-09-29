export function SearchUsers({ filteredUsers }) {
  if (filteredUsers === null) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <ul>
        {filteredUsers.map((user) => (
          <li className="searched-user">
            <img src={user.image}></img>
            <p>{user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
