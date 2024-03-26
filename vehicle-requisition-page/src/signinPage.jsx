import { useEffect } from "react";

/* eslint-disable react/prop-types */
export default function SiginPage({
  setUsername,
  setPassword,
  setEmail,
  setFirstName,
  setLastName,
  username,
  password,
  email,
  firstName,
  lastName,
  saveDetails,
  setSaveDetails,
  setUserLogin,
}) {
    function ResetStates() {
        setUsername("");
        setPassword("");
        setEmail("");
        setFirstName("");
        setLastName("");
        setSaveDetails("")
    }

  function UserDetails() {
    localStorage.setItem(username, JSON.stringify(saveDetails))
    setUserLogin("0")
    ResetStates();
  }

  useEffect(() => {
    let info = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    setSaveDetails(info);
  }, [
    username,
    firstName,
    lastName,
    email,
    password,
    setSaveDetails,
  ]);

  function CancelSignin() {
    setUserLogin("0");
    ResetStates();
  }

  return (
    <div id="signinContainer">
      <form action="" id="signinForm">
        <div className="inputCard">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            autoComplete="on"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="inputCard">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            autoComplete="on"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="inputCard">
          <label htmlFor="email">Email</label>
          <input
            type="mail"
            id="email"
            autoComplete="on"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputCard">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="inputCard">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="buttonContainer">
          <button type="button" className="cancelButton" onClick={CancelSignin}>
            Cancel
          </button>
          <button type="button" className="signinButton" onClick={UserDetails}>
            Signin
          </button>
        </div>
      </form>
    </div>
  );
}
