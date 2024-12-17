"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Message } from "@/types/chat";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <ScrollArea className="h-[calc(100vh-280px)] pr-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            "flex items-start gap-3 mb-4",
            message.sender === "assistant" ? "flex-row" : "flex-row-reverse"
          )}
        >
          <div
            className={cn(
              "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border text-sm font-semibold",
              message.sender === "assistant"
                ? "bg-primary text-primary-foreground"
                : "bg-muted"
            )}
          >
            {message.sender === "assistant" ? "AI" : "You"}
          </div>
          <div className="flex flex-col gap-1">
            <div
              className={cn(
                "rounded-lg px-4 py-3 max-w-[85%]",
                message.sender === "assistant"
                  ? "bg-muted"
                  : "bg-primary text-primary-foreground"
              )}
            >
              {message.type === "text" ? (
                <p className="whitespace-pre-wrap">{message.content}</p>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm font-medium">File: {message.fileName}</p>
                  {message.fileUrl && (
                    message.fileName?.match(/\.(jpg|jpeg|png)$/i) ? (
                      <img
                        src={message.fileUrl}
                        alt={message.fileName}
                        className="max-w-sm rounded-md"
                      />
                    ) : (
                      <a
                        href={message.fileUrl}
                        download={message.fileName}
                        className="text-sm underline"
                      >
                        Download {message.fileName}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
            <span className="text-xs text-muted-foreground">
              {format(message.timestamp, "HH:mm")}
            </span>
          </div>
        </div>
      ))}
    </ScrollArea>
  );
}