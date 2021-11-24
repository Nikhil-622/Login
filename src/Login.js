import React from "react";

const Login = () => {
  return (
    <div className="section-center">
      <div className="heading">Login</div>
      <form action="">
        <div className="form-control">
          <input type="text" required />
          <label htmlFor="">
            <i className="fa fa-user"></i> Email
          </label>
        </div>
        <div className="form-control">
          <input type="text" required />
          <label htmlFor="">
            <i className="fa fa-unlock"></i>Password
          </label>
        </div>

        <div className="submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
