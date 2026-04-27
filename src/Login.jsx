import React from "react";

function Login() {
  return (
    <div>
      <div className="flex justify-content items-center gap-4">
        <label className="  gap-4 m-2 p-2">
          Name
          <input
            type="text"
            placeholder="Enter Email"
            className="bg-gray-100 border-solid border-2 border-indigo-600 rounded-2xl h-10 "
          />
        </label>
        <label className="    gap-4 m-2">
          Password
          <input
            type="text"
            placeholder="Enter Email"
            className="bg-gray-100 border-solid border-2 border-indigo-600 rounded-2xl h-10 "
          />
        </label>
        <label className="    gap-4 m-2">
          retype Password
          <input
            type="text"
            placeholder="Enter Email"
            className="bg-gray-100 border-solid border-2 border-indigo-600 rounded-2xl h-10 "
          />
        </label>
        <button>Save</button>
      </div>
    </div>
  );
}

export default Login;
