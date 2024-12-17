import { ArrowRight, Upload, Sparkles, ListChecks } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Materials",
    description: "Simply upload your PDF study materials, textbooks, or notes to get started.",
  },
  {
    icon: Sparkles,
    title: "AI Processing",
    description: "Our advanced AI analyzes your content and generates high-quality questions and tests.",
  },
  {
    icon: ListChecks,
    title: "Start Learning",
    description: "Practice with personalized questions and track your progress over time.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-6 h-6 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}