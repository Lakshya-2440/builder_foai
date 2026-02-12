import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Zap, Truck, RotateCw, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - no backend functionality
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1556821552-5f63b1c2c723?w=500&h=500&fit=crop",
      name: "Classic College Hoodie",
      description: "Comfortable and stylish navy hoodie with embroidered logo",
      price: "₹1,499",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      name: "Premium College T-Shirt",
      description: "100% cotton t-shirt in classic white with college crest",
      price: "₹599",
    },
    {
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
      name: "College Cap",
      description: "Adjustable cotton cap with embroidered college branding",
      price: "₹399",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523391646732-fc1f32f0df64?w=500&h=500&fit=crop",
      name: "Campus Backpack",
      description: "Durable polyester backpack perfect for campus life",
      price: "₹2,499",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-16 md:py-24 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Official Campus Merchandise
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                Wear Your Pride. Represent Your Campus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-lg transition flex items-center justify-center gap-2 text-lg">
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-lg transition border-2 border-white">
                  Browse Collection
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">
                Featured Collection
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our best-selling college merchandise. Limited stock
                available.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>

            <div className="text-center">
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition inline-flex items-center gap-2">
                View All Products
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Product Details Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-12 text-center">
              Product Details Example
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-xl p-8 md:p-12">
              {/* Product Image */}
              <div className="flex items-center justify-center">
                <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556821552-5f63b1c2c723?w=600&fit=crop"
                    alt="Classic College Hoodie"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Best Seller
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-primary mb-4">
                    Classic College Hoodie
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-accent"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-muted-foreground">(347 reviews)</span>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">
                    Premium quality hoodie made from 100% soft cotton blend.
                    Perfect for campus life with iconic college branding. Warm,
                    durable, and comfortable.
                  </p>

                  {/* Price */}
                  <p className="text-4xl font-black text-primary mb-8">₹1,499</p>

                  {/* Size Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-primary mb-3">
                      Select Size
                    </label>
                    <div className="flex gap-2">
                      {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                        <button
                          key={size}
                          className="px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition font-semibold"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-primary mb-3">
                      Quantity
                    </label>
                    <div className="flex items-center gap-4 w-max">
                      <button className="w-10 h-10 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition font-bold">
                        −
                      </button>
                      <input
                        type="number"
                        defaultValue="1"
                        className="w-16 h-10 text-center border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <button className="w-10 h-10 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition font-bold">
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition">
                    Add to Cart
                  </button>
                  <button className="flex-1 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Shop With Us Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 text-center">
              Why Shop With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-12">
              We're committed to providing the best college merchandise
              experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature Card 1 */}
              <div className="bg-secondary rounded-lg p-8 hover:shadow-lg transition text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Premium Quality
                </h3>
                <p className="text-muted-foreground text-sm">
                  High-quality fabrics and superior craftsmanship in every item
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-secondary rounded-lg p-8 hover:shadow-lg transition text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-accent">₹</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Affordable Pricing
                </h3>
                <p className="text-muted-foreground text-sm">
                  Student-friendly prices without compromising on quality
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-secondary rounded-lg p-8 hover:shadow-lg transition text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Fast Campus Delivery
                </h3>
                <p className="text-muted-foreground text-sm">
                  Quick delivery right to your campus or home address
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-secondary rounded-lg p-8 hover:shadow-lg transition text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <RotateCw className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Easy Returns
                </h3>
                <p className="text-muted-foreground text-sm">
                  Hassle-free returns within 30 days of purchase
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
                  Need Help?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have questions about our products or need assistance with your
                  order? We're here to help!
                </p>

                {/* Contact Info */}
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Email</h3>
                      <a
                        href="mailto:hello@campusmerch.com"
                        className="text-muted-foreground hover:text-primary transition"
                      >
                        hello@campusmerch.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-primary transition"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        Main Campus, University Avenue<br />
                        College Town, State 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Send us a message
                </h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="How can we help you?"
                      rows={4}
                      className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Start Shopping Today
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of students already rocking official campus
              merchandise
            </p>
            <button className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-lg transition inline-flex items-center gap-2 text-lg">
              Browse Collection
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
