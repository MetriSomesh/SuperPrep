"use client";

import { ChatLayout } from "@/components/chat/chat-layout";
import { WelcomeScreen } from "@/components/chat/welcome-screen";

export default function ChatPage() {
  return (
    <ChatLayout>
      <WelcomeScreen />
    </ChatLayout>
  );
}