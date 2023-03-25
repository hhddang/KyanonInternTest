import { useState } from "react";
import { emailSelector, passwordSelector } from "../redux/selectors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const validEmail = useSelector(emailSelector);
  const validPassword = useSelector(passwordSelector);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const handleLogin = () => {
    if (email === validEmail && password === validPassword) {
      navigate("/profile");
    } else {
      setEmail("");
      setPassword("");
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-form">
      <div className="title">Login</div>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="example@kyanon.digital" value={email} onChange={handleInputEmail} />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input id="password" type={passwordType} value={password} onChange={handleInputPassword} />
      </div>

      <div className="login-bottom">
        <div className="show-password-group">
          <input type="checkbox" id="showPasswordBtn" onClick={handleShowPassword} />
          <label htmlFor="showPasswordBtn">Show password</label>
        </div>

        <button className="signin-btn" onClick={handleLogin}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Home;
