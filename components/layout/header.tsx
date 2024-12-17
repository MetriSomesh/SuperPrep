import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AuthStatus } from "@/components/auth/auth-status";

export function Header() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">
            SuperPrep
          </Link>
          <AuthStatus />
        </div>
        <div className="text-center max-w-3xl mx-auto py-20">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-6">
            Transform Your Study Experience with AI
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Upload your study materials and let our AI generate personalized practice questions, 
            mock tests, and adaptive learning paths.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}