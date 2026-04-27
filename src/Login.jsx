import React from "react";
import Button from "./Button";
import TextField from "./TextField";

function Login() {
  return (
    <div className="bg-emerald-800 p-25">
      <TextField placeholder="Enter email" />
      <TextField
        type="password"
        placeholder="Enter password"
        className="mt-4"
      />
      <Button>Submit</Button>
    </div>
  );
}

export default Login;
