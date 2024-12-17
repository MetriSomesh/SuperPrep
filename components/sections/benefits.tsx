import { CheckCircle } from "lucide-react";

const benefits = [
  "Save hours of manual question creation time",
  "Generate diverse question types automatically",
  "Track learning progress with detailed analytics",
  "Customize difficulty levels to match your needs",
  "Practice with realistic exam simulations",
  "Access your materials anytime, anywhere",
];

export function Benefits() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose SuperPrep?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}