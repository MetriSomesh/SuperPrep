"use client";

import { useChat } from "@/hooks/use-chat";
import { ChatMessage } from "./chat-message";
import { ChatMessageSkeleton } from "./chat-message-skeleton";

export function ChatMessages({ chatId }: { chatId: string }) {
  const { messages, isLoading } = useChat(chatId);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <ChatMessageSkeleton />
        <ChatMessageSkeleton />
        <ChatMessageSkeleton />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
}