"use client";
import React from "react";
import { initialize_user } from "../api/initialize_user/route";

const InitializeUser = () => {
  const initialize = async () => {
    const response = await initialize_user();
    console.log(response);
  };

  return (
    <div>
      <button onClick={() => initialize()}>Initialize User</button>
    </div>
  );
};

export default InitializeUser;
