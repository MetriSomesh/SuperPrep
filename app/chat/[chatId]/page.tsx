"use client";

import { ChatLayout } from "@/components/chat/chat-layout";
import { ChatMessages } from "@/components/chat/chat-messages";

export default function ChatPage({ params }: { params: { chatId: string } }) {
  return (
    <ChatLayout activeChat={params.chatId}>
      <ChatMessages chatId={params.chatId} />
    </ChatLayout>
  );
}