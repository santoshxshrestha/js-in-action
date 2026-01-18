import { NextResponse } from "next/server";

const messages: string[] = [
  "That's interesting!",
  "I see, tell me more.",
  "Got it.",
  "Makes sense.",
  "I understand.",
  "Hmm, let me think about that.",
  "Thanks for sharing!",
  "Oh, really?",
  "Okay, noted.",
  "Sounds good to me.",
  "Interesting point!",
  "I hadn’t thought about that.",
  "Right, that works.",
  "Cool!",
  "Alright, let's do it.",
];

interface Message {
  message: string;
}

export async function POST(request: Request) {
  const { pathaune_data } = await request.json();
  console.log(" the message received is is", pathaune_data);

  const pathaune_message: Message = {
    message: messages[Math.floor(Math.random() * messages.length)],
  };
  return NextResponse.json({
    pathaune_message,
  });
}
