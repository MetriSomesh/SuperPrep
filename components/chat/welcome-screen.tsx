import { FileText, Brain, Zap, Upload, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Upload Study Materials",
    description: "Share your PDFs, images, or text materials to get started",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Our AI analyzes your content and understands the context",
  },
  {
    icon: MessageSquare,
    title: "Interactive Learning",
    description: "Engage in conversations to deepen your understanding",
  },
  {
    icon: Zap,
    title: "Instant Practice",
    description: "Get instant questions and explanations to test your knowledge",
  },
];

export function WelcomeScreen() {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Welcome to SuperPrep AI
        </h1>
        <p className="text-lg text-muted-foreground">
          Your intelligent study companion for personalized learning and practice
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-6 rounded-xl border bg-card/50 hover:bg-card/80 transition-colors"
          >
            <feature.icon className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary/5 rounded-xl p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Getting Started</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              1
            </div>
            <p className="text-muted-foreground">
              Click the <span className="text-primary">New Chat</span> button to start a conversation
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              2
            </div>
            <p className="text-muted-foreground">
              Upload your study materials using the attachment button or type your questions directly
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              3
            </div>
            <p className="text-muted-foreground">
              Get instant practice questions, explanations, and engage in interactive learning
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-muted-foreground">
        <p>Ready to enhance your learning experience? Start a new chat now!</p>
      </div>
    </div>
  );
}