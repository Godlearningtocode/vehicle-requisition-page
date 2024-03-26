/* eslint-disable react/prop-types */
export default function LoginPage({setUserLogin, loginUsername, setLoginUsername, loginPassword, setLoginPassword}) {
    function CancelLogin() {
        setUserLogin("0")
    }

    function CheckLoginDetail() {
        let info = JSON.parse(localStorage.getItem(loginUsername))
        console.log(info)
        info.password === loginPassword ? setUserLogin("4") : alert(false)
    }

  return (
    <div id="loginContainer">
      <form id="loginForm">
        <div className="inputCard">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required autoComplete="off" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />
        </div>
        <div className="inputCard">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required autoComplete="off" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
        </div>
        <div className="buttonContainer">
            <button type="button" className="cancelButton" onClick={CancelLogin}>Cancel</button>
            <button type="button" className="loginButton" onClick={CheckLoginDetail}>Login</button>
        </div>
      </form>
    </div>
  );
}
