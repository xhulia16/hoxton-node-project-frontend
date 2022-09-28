export function SignUp({signInUser}) {
  return (
    <form className="sign-in"
      onSubmit={(event) => {
        event.preventDefault();

        const user = {
          name: event.target.name.value,
          email: event.target.email.value,
          password: event.target.password.value,
        };

        fetch(`http://localhost:5126/sign-up`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        }).then((resp) => resp.json())
        .then((data) => {
            if (data.error) {
              alert(data.error);
            } else {
              signInUser(data);
            }
          });

        console.log(user);
      }}
    > <h2> Please enter your details to sign up</h2>
      <input name="name" placeholder="insert your full name" required></input>
      <input name="email" placeholder="insert your email" required></input>
      <input
        name="password"
        type="password"
        placeholder="insert your password"
        required
      ></input>
      <button>Sign Up</button>
    </form>
  );
}
