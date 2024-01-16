import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const create_a_new_user = async () => {
  const userId = uuidv4();

  console.log("the user id is: " + userId);

  const options = {
    method: "POST",
    url: "https://api.circle.com/v1/w3s/users",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
    data: { userId: userId },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log("response data:");
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
};

// This code returns the following response:
// the user id is: 4cca3a37-de9b-4c33-9c11-6168f3e0b361
// response data:
// {}
