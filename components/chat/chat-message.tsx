import { FileIcon, ImageIcon } from "lucide-react";
import Image from "next/image";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  fileUrl?: string;
  fileType?: string;
  fileName?: string;
  createdAt: Date;
}

export function ChatMessage({ message }: { message: Message }) {
  const renderFile = () => {
    if (!message.fileUrl) return null;

    if (message.fileType?.startsWith("image/")) {
      return (
        <div className="mt-2">
          <Image
            src={message.fileUrl}
            alt={message.fileName || "Uploaded image"}
            width={300}
            height={200}
            className="rounded-md"
          />
        </div>
      );
    }

    return (
      <a
        href={message.fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 mt-2 text-primary hover:underline"
      >
        <FileIcon size={16} />
        <span>{message.fileName}</span>
      </a>
    );
  };

  return (
    <div
      className={`flex ${
        message.isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-lg p-4 ${
          message.isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted"
        }`}
      >
        <div className="whitespace-pre-wrap">{message.content}</div>
        {renderFile()}
      </div>
    </div>
  );
}