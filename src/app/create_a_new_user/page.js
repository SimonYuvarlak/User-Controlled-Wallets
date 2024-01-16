"use client";
import React from "react";
import { create_a_new_user } from "../api/create_a_new_user/route";

const CreateANewUser = () => {
  const retrieve_user = async () => {
    const response = await create_a_new_user();
    console.log("response: ", response);
  };

  return (
    <div>
      <button onClick={() => retrieve_user()}>Create a New User</button>
    </div>
  );
};

export default CreateANewUser;
