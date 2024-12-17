"use client";

import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface DropZoneProps {
  onFilesDrop: (files: FileList) => void;
  isVisible: boolean;
}

export function DropZone({ onFilesDrop, isVisible }: DropZoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const dataTransfer = new DataTransfer();
      acceptedFiles.forEach((file) => dataTransfer.items.add(file));
      onFilesDrop(dataTransfer.files);
    },
    [onFilesDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'application/pdf': ['.pdf']
    },
    noClick: true,
  });

  if (!isVisible) return null;

  return (
    <div
      {...getRootProps()}
      className={cn(
        "absolute inset-0 z-50 backdrop-blur-sm transition-all duration-300",
        isDragActive ? "bg-primary/20" : "bg-background/80",
        "flex items-center justify-center"
      )}
    >
      <input {...getInputProps()} />
      <div className="p-8 rounded-lg border-2 border-dashed border-primary/50 bg-background/50">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <Upload className="h-8 w-8" />
          <p className="text-sm font-medium">Drop files to upload</p>
          <p className="text-xs">Supports PNG, JPG, JPEG, PDF</p>
        </div>
      </div>
    </div>
  );
}