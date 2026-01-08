import Layout from "@/components/Layout";

const products = [
  {
    name: "Woven Fabrics",
    description: "Premium quality woven fabrics for apparel and home textiles.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop",
  },
  {
    name: "Knitted Textiles",
    description: "Comfortable and durable knitted textiles for various applications.",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop",
  },
  {
    name: "Denim Fabrics",
    description: "High-quality denim in various weights and finishes.",
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400&h=300&fit=crop",
  },
  {
    name: "Technical Textiles",
    description: "Specialized fabrics for industrial and technical applications.",
    image: "https://images.unsplash.com/photo-1617440168937-c6497eaa8db5?w=400&h=300&fit=crop",
  },
  {
    name: "Home Textiles",
    description: "Quality fabrics for bedding, curtains, and upholstery.",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&h=300&fit=crop",
  },
  {
    name: "Fashion Fabrics",
    description: "Trendy and stylish fabrics for fashion industry.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Our Products
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            Explore our wide range of premium textile products manufactured to
            the highest quality standards.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
