import { FileText, Brain, BookOpen } from "lucide-react";
import { FeatureCard } from "./feature-card";

const features = [
  {
    icon: FileText,
    title: "PDF Analysis",
    description: "Upload your study materials and get instant access to AI-generated questions and summaries.",
  },
  {
    icon: Brain,
    title: "Smart Question Generation",
    description: "Experience diverse question types from MCQs to detailed explanations, tailored to your needs.",
  },
  {
    icon: BookOpen,
    title: "Mock Tests",
    description: "Practice with realistic exam simulations and get detailed performance analytics.",
  },
];

export function FeaturesGrid() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            Icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}