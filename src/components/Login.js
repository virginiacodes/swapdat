export default function Login() {
  return (
    <div className="login-container">
      <h1 className="login-title">SwapDat</h1>
      <p className="login-p">
        Don't need it anymore? Swap it with something you need with your
        neighbour.
      </p>
      <div className="login-box">
        <form>
          <input
            type="email"
            placeholder="Your email address"
            className="login-input"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          ></input>
          <button type="submit" className="login-button">
            Log in
          </button>
        </form>
        <p className="forgotten-password">Forgotten password?</p>
        <hr />
        <button className="new-account">Create new account</button>
      </div>
    </div>
  );
}
