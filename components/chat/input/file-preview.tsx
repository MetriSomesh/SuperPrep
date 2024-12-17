"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";

interface FilePreviewProps {
  files: FileList | null;
  onRemove: () => void;
}

export function FilePreview({ files, onRemove }: FilePreviewProps) {
  if (!files?.length) return null;

  return (
    <div className="absolute left-0 bottom-full mb-2 flex flex-wrap gap-2 max-w-full">
      {Array.from(files).map((file) => (
        <div
          key={file.name}
          className="relative group rounded-lg overflow-hidden border bg-muted"
        >
          {file.type.startsWith("image/") ? (
            <div className="relative h-20 w-20">
              <Image
                src={URL.createObjectURL(file)}
                alt={file.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="h-20 w-20 flex items-center justify-center p-2">
              <p className="text-xs text-center break-words">
                {file.name}
              </p>
            </div>
          )}
          <Button
            variant="destructive"
            size="icon"
            className="h-6 w-6 absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              onRemove();
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}