"use client";

import { useState, useEffect } from "react";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  fileUrl?: string;
  fileType?: string;
  fileName?: string;
  createdAt: Date;
}

export function useChat(chatId: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (chatId) {
      fetch(`/api/chat/${chatId}`)
        .then((res) => res.json())
        .then((data) => {
          setMessages(data.messages);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }
  }, [chatId]);

  return { messages, isLoading };
}