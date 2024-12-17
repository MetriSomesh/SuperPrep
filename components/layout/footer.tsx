import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-muted-foreground flex items-center justify-center gap-1">
          Developed with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{" "}
          <a 
            href="https://github.com/someshmetri" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Somesh Metri
          </a>
        </p>
      </div>
    </footer>
  );
}