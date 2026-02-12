import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            This is a placeholder for the Contact page. Continue prompting to
            build out:
          </p>
          <ul className="text-left space-y-3 mb-8 bg-secondary p-6 rounded-lg">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">→</span>
              <span>Extended contact form with custom fields</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">→</span>
              <span>Multiple contact methods (email, phone, chat)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">→</span>
              <span>FAQ section</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">→</span>
              <span>Embedded map with office location</span>
            </li>
          </ul>
          <p className="text-muted-foreground">
            Let me know what contact features you'd like to add!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
