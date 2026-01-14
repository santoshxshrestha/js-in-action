"use client"
import { useState } from "react";
export default function Home() {
    let [command, setCommand] = useState("");


    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-green-500 font-mono">
                <div className="w-full max-w-4xl">
                    <div className="mb-4">
                        <span className="text-green-500">user@nextjs:</span>
                        <span className="text-green-500">~$ </span>
                        <input
                            type="text"
                            value={command}
                            onChange={(e) => setCommand(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleCommand(command);
                                }
                            }}
                            className="bg-black text-green-500 border-none outline-none w-3/4"
                        />
                    </div>
                </div>
            </main>
        </>
    );
}

function handleCommand(command: string) {
    // Placeholder for command handling logic
    alert(`Command executed: ${command}`);
}
