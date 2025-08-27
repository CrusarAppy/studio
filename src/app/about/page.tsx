import Image from "next/image";
import { AboutMeForm } from "./about-me-form";

export default function AboutPage() {
  return (
    <main className="container py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
          About Me
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
          Here's a little bit about me. Want to make it better? Use the AI assistant below to rewrite my bio!
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-16 items-center">
        <div className="md:col-span-1 flex justify-center">
            <Image src="https://picsum.photos/300/300" data-ai-hint="portrait person" alt="Artist Portrait" width={300} height={300} className="rounded-full w-48 h-48 md:w-full md:h-auto md:max-w-xs object-cover" />
        </div>
        <div className="md:col-span-2 space-y-4 text-muted-foreground">
          <p>
            Hello! I'm a digital artist and web developer with a passion for creating interactive and engaging experiences on the web. My journey began with a curiosity for how things work, which led me from static websites to dynamic, data-driven applications.
          </p>
          <p>
            I specialize in front-end development using modern frameworks like React and Next.js, but I'm also comfortable diving into the back-end to build robust APIs. My design philosophy is centered around minimalism, usability, and a touch of creative flair. I believe that technology should not only be functional but also beautiful and delightful to use.
          </p>
          <p>
            When I'm not coding, you can find me exploring generative art, experimenting with new animation libraries, or contributing to open-source projects. I'm always eager to learn and collaborate on exciting new ideas.
          </p>
        </div>
      </div>
      
      <div className="text-center my-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            AI-Powered Bio Generator
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-md text-muted-foreground">
            Not happy with my bio? Let's write a new one! Provide my current statement and portfolio details to get an AI-powered rewrite.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <AboutMeForm />
      </div>
    </main>
  );
}
