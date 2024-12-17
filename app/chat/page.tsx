"use client";

import { useSession } from "next-auth/react";
import { ChatHistory } from "@/components/chat/chat-history";
import { ChatInput } from "@/components/chat/chat-input";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ChatPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-background">
      <ChatHistory />
      <main className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          {/* Messages will be rendered here by the chat route */}
        </div>
        <div className="border-t p-4">
          <ChatInput />
        </div>
      </main>
    </div>
  );
}