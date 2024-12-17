import { ReactNode } from "react";
import { ChatHistory } from "./chat-history";
import { ChatInput } from "./chat-input";

interface ChatLayoutProps {
  children: ReactNode;
  activeChat?: string;
}

export function ChatLayout({ children, activeChat }: ChatLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <ChatHistory activeChat={activeChat} />
      <main className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
        <div className="border-t p-4">
          <ChatInput chatId={activeChat} />
        </div>
      </main>
    </div>
  );
}