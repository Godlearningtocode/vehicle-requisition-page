/* eslint-disable react/prop-types */
export default function HomePage({setUserLogin }) {
  function DisplayLogin() {
    setUserLogin("1");
  }

  function DisplaySigin() {
    setUserLogin("2");
  }

  return (
    <div id="homePageContainer">
      <div id="buttonContainer">
        <button className="sigin" onClick={DisplaySigin}>
          Signin
        </button>
        <button className="login" onClick={DisplayLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
