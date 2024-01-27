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

  return axios
    .request(options)
    .then(function (response) {
      console.log("user token:", response.data.data.userToken);
      console.log("encryption key:", response.data.data.encryptionKey);
      return {
        userToken: response.data.data.userToken,
        encryptionKey: response.data.data.encryptionKey,
      };
    })
    .catch(function (error) {
      console.error(error);
    });
};
