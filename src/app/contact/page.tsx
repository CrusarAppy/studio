import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="container py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          Have a project in mind, or just want to say hello? I'd love to hear from you.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-8">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <span>hello@kineticcanvas.dev</span>
                </div>
                 <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <span>+1 (555) 123-4567</span>
                </div>
                 <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>Creativity Hub, Internet</span>
                </div>
            </div>
            <p className="text-muted-foreground">
                I'm currently available for freelance work and collaborations. Feel free to reach out via the form or through my social media channels.
            </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
