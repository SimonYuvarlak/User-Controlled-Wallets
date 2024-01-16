"use client";
import { useState, React } from "react";
import { get_app_id } from "../api/get_app_id/route";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { light } from "react-syntax-highlighter/dist/esm/styles/prism";

const GetAppIdPage = () => {
  const [appId, setAppId] = useState("the app id will appear here");
  const [codeCopied, setCodeCopied] = useState(false);
  const [appIdCopied, setAppIdCopied] = useState(false);

  const retrieve_app_id = async () => {
    const response = await get_app_id();
    console.log("your app id: " + response);
    setAppId(response);
  };

  const copyCodeToClipboard = async () => {
    await navigator.clipboard.writeText(codeString);
    setCodeCopied(true);
  };

  const copyAppIdToClipboard = async () => {
    await navigator.clipboard.writeText(appId);
    setAppIdCopied(true);
  };

  const codeString = `
import axios from "axios";

export const get_app_id = async () => {
  const options = {
    method: "GET",
    url: "https://api.circle.com/v1/w3s/config/entity",
    headers: {
      "Content-Type": "application/json",
      Authorization: \`Bearer \${process.env.NEXT_PUBLIC_API_KEY}\`,
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data.data.appId;
    })
    .catch(function (error) {
      console.error(error);
    });
};
  `.trim();

  return (
    <div className="grid grid-rows-3 h-screen">
      <div className="row-span-2 p-12">
        <div className="grid grid-cols-2 h-full gap-12">
          <div className="bg-black flex items-center justify-center rounded-lg border-2">
            <p className="flex p-2 w-full overflow-auto h-full justify-center border-b border-gray-300 bg-gradient-to-b">
              Welcome to your first challange for creating user controlled
              wallets.
              <br />
              <br />
              In this task, you will complete the first step of creating a user
              controlled wallet, which is to get app id.
              <br />
              Please note that, at this point, you should already have a Circle
              API key.
              <br />
              <br />
              What is APP ID?
              <br />
              <br />
              An App ID is a unique identifier that is assigned to your
              application when you register it with Circle. It is used for
              various purposes, such as identification, configuration
              management, and API access. You can think of it as a digital
              passport for your application to interact with the Circle Platform
              and the Universal Community Wallet. 🛂
              <br />
              <br />
              1- Now, go to the ~/src/api/get_app_id/route.js file.
              <br />
              2- Copy and paste the code that you see on the screen.
              <br />
              This will sen an api call to circle api and you will retrieve you
              app id.
              <br />
              3- Click on the get id button to retrieve your app id.
              <br />
              4- Finally once you get your app id, add this to your .env.local
              file under the name: NEXT_PUBLIC_APP_ID and submit your APP ID to
              Risein platform as your first task.
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
              retrieve_app_id();
            }}
            className="rounded-lg border-2 p-4 hover:bg-green-500"
          >
            Get App ID
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative group">
            <button
              className="absolute right-0 top-0 bg-red-500 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              onClick={copyAppIdToClipboard}
            >
              {appIdCopied ? "Copied!" : "Copy to Clipboard"}
            </button>
            <div className="rounded-lg w-full p-4 border-2 mx-8 flex justify-center">
              {appId}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAppIdPage;
