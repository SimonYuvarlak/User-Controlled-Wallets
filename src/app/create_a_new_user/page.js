"use client";
import { useState, React } from "react";
import { create_a_new_user } from "../api/create_a_new_user/route";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { light } from "react-syntax-highlighter/dist/esm/styles/prism";

const CreateANewUser = () => {
  const [status, setStatus] = useState("status");
  const [userId, setUserId] = useState("the user id will appear here");
  const [codeCopied, setCodeCopied] = useState(false);
  const [userIdCopied, setUserIdCopied] = useState(false);

  const retrieve_user_id = async () => {
    const response = await create_a_new_user();
    setUserId(response.userId);
    setStatus(response.status);
  };

  const copyCodeToClipboard = async () => {
    await navigator.clipboard.writeText(codeString);
    setCodeCopied(true);
  };

  const copyUserIdToClipboard = async () => {
    await navigator.clipboard.writeText(userId);
    setUserIdCopied(true);
  };

  const codeString = `
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const create_a_new_user = async () => {
  const userId = uuidv4();

  const options = {
    method: "POST",
    url: "https://api.circle.com/v1/w3s/users",
    headers: {
      "Content-Type": "application/json",
      Authorization: \`Bearer \${process.env.NEXT_PUBLIC_API_KEY}\`,
    },
    data: { userId: userId },
  };

  return axios
    .request(options)
    .then(function (response) {
      console.log("user id: ", userId);
      console.log("status:", response.request.status)
      return {
        userId: userId,
        status: response.request.status,
      };
    })
    .catch(function (error) {
      console.error(error);
    });
};
`.trim();

  return (
    <div className="grid grid-rows-3">
      <div className="row-span-2 p-12">
        <div className="grid grid-cols-2 h-full gap-12">
          <div className="bg-black flex items-center justify-center rounded-lg border-2">
            <p className="flex p-2 w-full overflow-auto h-full justify-center border-b border-gray-300 bg-gradient-to-b">
              Welcome to your second challange for creating user controlled
              wallets.
              <br />
              <br />
              In this task, you will complete the second step of creating a user
              controlled wallet, which is to create the user.
              <br />
              Please note that, at this point, you should already have the App
              ID.
              <br />
              <br />
              What Does Creating A User Mean?
              <br />
              <br />
              To kickstart the process, it's necessary to set up and prepare the
              users who will be the final consumers of your application. A user,
              symbolizing the final user of your application, is recognized via
              a userID. This userID acts as the account identifier, covering all
              related wallets, assets, and transactions for that particular
              user.
              <br />
              <br />
              1- Now, go to the ~/src/api/create_a_user/route.js file.
              <br />
              2- Copy and paste the code that you see on the screen.
              <br />
              This will sen an api call to circle api and you will create the
              user.
              <br />
              3- Click on the create user button to retrieve your app id.
              <br />
              4- Finally once you get your user id, add this to your .env.local
              file under the name: NEXT_PUBLIC_USER_ID and submit your USER ID
              to Risein platform as your second task.
              <br />
              <br />
              IMPORTANT NOTE
              <br />
              - Once you scroll the page you will see two fields for the output.
              <br />
              - First one is the user id that you will copy.
              <br />- The second one is the status code that shows if the
              operation was successful or not. For the successful operation, you
              will see 201 as the status code and the box will turn into green.
              If your status code is not 201, please check your code and try
              again (Even though you will be able to retrieve the user id, if
              the status code is not 201 then the user with the given id has not
              been created).
            </p>
          </div>
          <div className="relative group">
            <button
              className="absolute right-0 top-0 bg-red-500 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              onClick={copyCodeToClipboard}
            >
              {codeCopied ? "Copied!" : "Copy to Clipboard"}
            </button>
            <div className="text-white overflow-x-auto font-mono">
              <SyntaxHighlighter
                className="custom-scrollbar rounded-lg"
                language="javascript"
                style={light}
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center">
          <button
            onClick={() => {
              retrieve_user_id();
            }}
            className="rounded-lg border-2 p-4 hover:bg-green-500"
          >
            Create User
          </button>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="relative group">
              <button
                className="absolute right-0 top-0 bg-red-500 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                onClick={copyUserIdToClipboard}
              >
                {userIdCopied ? "Copied!" : "Copy to Clipboard"}
              </button>
              <div className="rounded-lg w-full p-2 border-2 mx-8 flex justify-center">
                {userId}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div
              className={`rounded-lg w-1/2 p-2 border-2 mx-8 flex justify-center ${
                status === 201 ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateANewUser;
