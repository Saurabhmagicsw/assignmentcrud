import React, { useState } from "react";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="c">
      <hr />
      <small>
        <a title="e-mail" data-testid="powered-by" rel="noopener noreferrer">
          e-mail
        </a>
      </small>

      <input
        type="email"
        placeholder="Enter email"
        data-testid="email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {email && !/\S+@\S+\.\S+/.test(email) && (
        <span className="error" data-testid="error-msg">
          Please enter a valid email.
        </span>
      )}
      <br />
      <small>
        <a title="e-mail" data-testid="powered-by" rel="noopener noreferrer">
          &nbsp;pass-
        </a>
      </small>
      <input
        type="password"
        placeholder="Enter pasword"
        data-testid="email-input1"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      {pass &&
        !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(
          pass
        ) && (
          <span className="error" data-testid="error-msg">
            Please enter a valid pass.
          </span>
        )}
    </div>
  );
};

export default Login;
