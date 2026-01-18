"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState<string>("");
  const [message, setMessage]  = useState<string>("");
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-black">
        <input
          className="border-2 border-b-white text-white p-2 rounded-lg h-10 w-96"
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          onKeyDown={async (e) => {
            if (e.key === "Enter"){
               setMessage(await handleSend(data));
            }
          }}
        />
        {message && (
            <div className="mt-4 text-white-800 text-xl border-l-white p-2">
                <p className="text-white text-xl">{message}</p>
            </div>
        )}
      </div>
    </>
  );
}
interface Message {
    message: string
};

async function handleSend(pathaune_data: string): Promise<string> {
  try{
  const response  = await fetch("/api/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({pathaune_data}),
  })

  if (!response.ok){
    throw new Error(`Http error! status: ${response.status}`);
  }
  const {pathaune_message} = await response.json();
  return pathaune_message.message;
} catch(error) {
  console.log("Error sending message ",error);
}
return "we got some error";
};
