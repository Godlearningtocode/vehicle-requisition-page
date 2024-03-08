import { useEffect, useState } from "react";

function SigninPage() {
  // declaring variables to store data from the input fields
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState("");

  // declaring formInputData function to collect input data and store in local storage
  const FormInputData = (e) => {
    e.preventDefault();

    SubmitForm();
  };

  const SubmitForm = () => {
    console.log(userInfo);
    localStorage.setItem(username, JSON.stringify([userInfo]));
    console.log(localStorage.getItem(username), password);
    console.log(
      JSON.parse(localStorage.getItem(username))[0].password == password
    );
  };

  useEffect(() => {
    const info = {
      fullName: fullName,
      username: username,
      password: password,
    };
    setUserInfo(info);
  }, [fullName, username, password]);

  return (
    <div className="signinContainer">
      <h1>Neo Metalik LTD</h1>
      <h3>Sign In</h3>
      <form className="siginForm" action="" onSubmit={FormInputData}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            name="fullName"
            id="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="passsword"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" id="submitButton">
          Sign up
        </button>
      </form>
    </div>
  );
}

export { SigninPage };
