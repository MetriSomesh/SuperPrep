"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageSquare, Plus, Search, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useChats } from "@/hooks/use-chats";

export function ChatHistory({ activeChat }: { activeChat?: string }) {
  const [searchQuery, setSearchQuery] = useState("");
  const { chats } = useChats();

  const filteredChats = chats.filter((chat) =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-80 border-r bg-muted/10">
      <div className="p-4 space-y-4">
        <div className="flex flex-col gap-4">
          <Link href="/chat">
            <Button className="w-full justify-start space-x-2 bg-primary/90 hover:bg-primary">
              <Plus size={16} />
              <span>New Chat</span>
            </Button>
          </Link>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search chats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-muted/50"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 px-2 text-xs text-muted-foreground">
            <Clock size={12} />
            <span>Recent Chats</span>
          </div>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <div className="space-y-2 pr-4">
              {filteredChats.map((chat) => (
                <Link key={chat.id} href={`/chat/${chat.id}`}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start space-x-2 hover:bg-muted/50",
                      activeChat === chat.id && "bg-muted/50"
                    )}
                  >
                    <MessageSquare size={16} />
                    <span className="truncate">{chat.title}</span>
                  </Button>
                </Link>
              ))}
              {filteredChats.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  {searchQuery ? "No chats found" : "No recent chats"}
                </p>
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}