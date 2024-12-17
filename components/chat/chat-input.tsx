"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Send, Paperclip, X, FileText, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "../../hooks/use-toast";

export function ChatInput({ chatId }: { chatId?: string }) {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!message.trim() && files.length === 0) return;
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("message", message);
      files.forEach((file) => formData.append("files", file));

      const response = await fetch(`/api/chat${chatId ? `/${chatId}` : ""}`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to send message");

      const data = await response.json();
      if (!chatId) {
        router.push(`/chat/${data.chatId}`);
      }

      setMessage("");
      setFiles([]);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const validFiles = selectedFiles.filter((file) => {
      const validTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "application/pdf",
      ];
      return validTypes.includes(file.type);
    });

    if (validFiles.length !== selectedFiles.length) {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: "Only PNG, JPEG, JPG, and PDF files are allowed",
      });
    }

    setFiles((prev) => [...prev, ...validFiles]);
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return <ImageIcon size={14} />;
    return <FileText size={14} />;
  };

  return (
    <div className="space-y-4">
      {files.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-muted/50 p-2 rounded-md border border-border/50"
            >
              {getFileIcon(file.type)}
              <span className="text-sm truncate max-w-[200px]">
                {file.name}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-1"
                onClick={() => setFiles(files.filter((_, i) => i !== index))}
              >
                <X size={14} />
              </Button>
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-2">
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          multiple
          accept=".png,.jpg,.jpeg,.pdf"
          onChange={handleFileChange}
        />
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-muted/50"
          onClick={() => fileInputRef.current?.click()}
          disabled={isLoading}
        >
          <Paperclip />
        </Button>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message or upload study materials..."
          className="flex-1 min-h-[60px] max-h-[200px] bg-muted/50"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />
        <Button
          onClick={handleSubmit}
          disabled={isLoading || (!message.trim() && files.length === 0)}
          className="bg-primary/90 hover:bg-primary"
        >
          <Send />
        </Button>
      </div>
      <div className="text-xs text-muted-foreground text-center">
        Press Enter to send, Shift + Enter for new line
      </div>
    </div>
  );
}
