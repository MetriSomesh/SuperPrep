"use client";

import { Button } from "@/components/ui/button";
import { Paperclip, Send } from "lucide-react";

interface MessageActionsProps {
  onFileSelect: () => void;
  onSend: () => void;
  disabled?: boolean;
}

export function MessageActions({ onFileSelect, onSend, disabled }: MessageActionsProps) {
  return (
    <div className="absolute right-4 bottom-4 flex gap-2">
      <input
        type="file"
        id="file-upload"
        className="hidden"
        multiple
        accept=".png,.jpg,.jpeg,.pdf"
        onChange={(e) => {
          if (e.target.files?.length) {
            onFileSelect();
          }
        }}
      />
      <Button
        size="icon"
        variant="ghost"
        className="h-8 w-8"
        onClick={() => document.getElementById("file-upload")?.click()}
      >
        <Paperclip className="h-5 w-5" />
      </Button>
      <Button
        size="icon"
        className="h-8 w-8"
        onClick={onSend}
        disabled={disabled}
      >
        <Send className="h-5 w-5" />
      </Button>
    </div>
  );
}