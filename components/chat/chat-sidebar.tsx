"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatSession } from "@/types/chat";
import { MessageSquarePlus, Search } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface ChatSidebarProps {
  chats: ChatSession[];
  selectedChat: string | null;
  onSelectChat: (chatId: string) => void;
  onNewChat: () => void;
}

export function ChatSidebar({
  chats,
  selectedChat,
  onSelectChat,
  onNewChat,
}: ChatSidebarProps) {
  return (
    <div className="w-80 border-r border-border flex flex-col">
      <div className="p-4 border-b">
        <Button
          variant="secondary"
          className="w-full justify-start gap-2"
          onClick={onNewChat}
        >
          <MessageSquarePlus className="h-5 w-5" />
          New Chat
        </Button>
      </div>
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search chats..."
            className="w-full pl-8 pr-4 py-2 text-sm bg-muted rounded-md"
          />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={cn(
                "w-full text-left p-3 rounded-lg mb-1 hover:bg-muted transition-colors",
                selectedChat === chat.id && "bg-muted"
              )}
            >
              <h3 className="font-medium truncate">{chat.title}</h3>
              <p className="text-sm text-muted-foreground truncate">
                {chat.lastMessage}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {format(chat.timestamp, "MMM d, yyyy")}
              </p>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}