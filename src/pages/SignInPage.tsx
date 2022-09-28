export function SignIn({ signInUser }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const user = {
          email: event.target.email.value,
          password: event.target.password.value,
        };

        fetch(`http://localhost:5126/sign-in`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((resp) => resp.json())
          .then((data) => {
            if (data.error) {
              alert(data.error);
            } else {
              signInUser(data);
            }
          });

        console.log(user);
      }}
    >
      <input name="email" placeholder="enter your email..." required></input>
      <input
        type="password"
        name="password"
        placeholder="enter your password..."
        required
      ></input>
      <button>Login</button>
    </form>
  );
}
