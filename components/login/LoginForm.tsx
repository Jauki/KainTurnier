import React, { useState } from "react";

/**
 Author: julianjauk <jauk.j@proton.me>
 Date: 28.03.23
 Project: volleyballtournament
 **/



function LoginForm() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");

 const handleSubmit = async (event: any) => {
  event.preventDefault();
  try {
   const response = await fetch("/api/login", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
   });
   const data = await response.json();
   console.log(data);
  } catch (error) {
   console.error(error);
  }
 };

 return (
   <form onSubmit={handleSubmit} className="w-1/3 mx-auto mt-16">
    <div className="mb-4">
     <label
       htmlFor="username"
       className="block text-gray-700 font-bold mb-2"
     >
      Username
     </label>
     <input
       id="username"
       type="text"
       className="border border-gray-400 py-2 px-4 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-500"
       value={username}
       onChange={(event) => setUsername(event.target.value)}
     />
    </div>
    <div className="mb-4">
     <label
       htmlFor="password"
       className="block text-gray-700 font-bold mb-2"
     >
      Password
     </label>
     <input
       id="password"
       type="password"
       className="border border-gray-400 py-2 px-4 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-500"
       value={password}
       onChange={(event) => setPassword(event.target.value)}
     />
    </div>
    <div className="text-center">
     <button
       type="submit"
       className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
     >
      Login
     </button>
    </div>
   </form>
 );
}

export default LoginForm;
