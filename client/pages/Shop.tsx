import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Shop() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Shop Page
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            This is a placeholder for the complete Shop page. Continue prompting
            to build out:
          </p>
          <ul className="text-left space-y-3 mb-8 bg-secondary p-6 rounded-lg">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">→</span>
              <span>Product filtering by category, size, color, and price</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">→</span>
              <span>Full product grid with search functionality</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">→</span>
              <span>Individual product detail pages</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">→</span>
              <span>Shopping cart and checkout flow</span>
            </li>
          </ul>
          <p className="text-muted-foreground">
            Let me know what features you'd like to add to the shop!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
