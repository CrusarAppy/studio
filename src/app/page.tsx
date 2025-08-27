import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedBackground } from "@/components/ui/animated-background";
import Link from "next/link";
import { ArrowRight, Code, Palette, BrainCircuit } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1">
      <AnimatedBackground />
      <section className="relative container flex flex-col items-center justify-center text-center min-h-[calc(100vh-8rem)] py-12 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
            Crafting Digital Experiences
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            I'm a passionate creator building beautiful and functional web applications. Explore my work and let's build something amazing together.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/portfolio">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="py-12 md:py-24 lg:py-32 bg-background/80 backdrop-blur-sm">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A curated selection of my favorite projects.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20 shadow-lg">
              <CardHeader className="p-0">
                 <Image src="https://picsum.photos/600/400?random=1" data-ai-hint="web app" alt="Project 1" width={600} height={400} className="rounded-t-lg w-full object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>Project One</CardTitle>
                <p className="text-muted-foreground mt-2">A web application for something cool.</p>
                <Button variant="link" asChild className="p-0 mt-4">
                  <Link href="/portfolio">View Project <ArrowRight className="ml-2 h-4 w-4"/></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20 shadow-lg">
              <CardHeader className="p-0">
                <Image src="https://picsum.photos/600/400?random=2" data-ai-hint="design system" alt="Project 2" width={600} height={400} className="rounded-t-lg w-full object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>Project Two</CardTitle>
                <p className="text-muted-foreground mt-2">A design system for a modern brand.</p>
                <Button variant="link" asChild className="p-0 mt-4">
                  <Link href="/portfolio">View Project <ArrowRight className="ml-2 h-4 w-4"/></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20 shadow-lg">
               <CardHeader className="p-0">
                <Image src="https://picsum.photos/600/400?random=3" data-ai-hint="AI model" alt="Project 3" width={600} height={400} className="rounded-t-lg w-full object-cover" />
               </CardHeader>
               <CardContent className="p-6">
                <CardTitle>Project Three</CardTitle>
                <p className="text-muted-foreground mt-2">An AI-powered analytics tool.</p>
                <Button variant="link" asChild className="p-0 mt-4">
                  <Link href="/portfolio">View Project <ArrowRight className="ml-2 h-4 w-4"/></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <Link href="/portfolio">See all projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What I Do</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I specialize in creating modern, responsive, and user-friendly web experiences.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="grid gap-1 text-center">
              <div className="flex justify-center items-center mb-4">
                <Code className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Web Development</h3>
              <p className="text-muted-foreground">Building fast, scalable, and secure web applications with modern technologies.</p>
            </div>
            <div className="grid gap-1 text-center">
              <div className="flex justify-center items-center mb-4">
                <Palette className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold">UI/UX Design</h3>
              <p className="text-muted-foreground">Designing intuitive and beautiful user interfaces that are a joy to use.</p>
            </div>
            <div className="grid gap-1 text-center">
              <div className="flex justify-center items-center mb-4">
                <BrainCircuit className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold">AI Integration</h3>
              <p className="text-muted-foreground">Leveraging artificial intelligence to build smarter, more personalized applications.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
