import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const initialize_user = async () => {
  const idempotencyKey = uuidv4();

  const options = {
    method: "POST",
    url: "https://api.circle.com/v1/w3s/user/initialize",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}}`,
      "X-User-Token": process.env.NEXT_PUBLIC_USER_TOKEN,
    },
    data: { idempotencyKey: idempotencyKey, blockchains: ["MATIC-MUMBAI"] },
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
