import axios from "axios";

export const acquire_session_token = async () => {
  const options = {
    method: "POST",
    url: "https://api.circle.com/v1/w3s/users/token",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
    data: { userId: process.env.NEXT_PUBLIC_USER_ID },
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
