import { ProjectGrid } from "@/components/project-grid";

export default function PortfolioPage() {
  return (
    <main className="container py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
          My Portfolio
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          Here is a collection of my work, showcasing my skills in development, design, and AI integration.
        </p>
      </div>
      <ProjectGrid />
    </main>
  );
}
