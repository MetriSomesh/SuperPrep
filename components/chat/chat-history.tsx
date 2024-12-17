"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { MessageSquare, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Chat {
  id: string;
  title: string;
  createdAt: Date;
}

export function ChatHistory({ activeChat }: { activeChat?: string }) {
  const { data: session } = useSession();
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    if (session?.user) {
      fetch("/api/chat")
        .then((res) => res.json())
        .then((data) => setChats(data));
    }
  }, [session]);

  return (
    <div className="w-64 border-r bg-muted/10">
      <div className="p-4 space-y-4">
        <Link href="/chat">
          <Button className="w-full justify-start space-x-2">
            <Plus size={16} />
            <span>New Chat</span>
          </Button>
        </Link>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-2">
            {chats.map((chat) => (
              <Link key={chat.id} href={`/chat/${chat.id}`}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start space-x-2",
                    activeChat === chat.id && "bg-muted"
                  )}
                >
                  <MessageSquare size={16} />
                  <span className="truncate">{chat.title}</span>
                </Button>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}