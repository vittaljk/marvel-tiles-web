function AboutUsSection() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section with Tile Background */}
      <section
        data-aos="fade-up"
        className="relative w-full py-20 px-6 md:px-16 text-center text-white"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/duy0961om/image/upload/v1762524971/92bc082d-f7af-4afa-babe-e08298365b1b.png')",
          }}
        ></div>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 tracking-wide text-accentBeige">
            About Marvel Tiles
          </h1>
          <p className="text-lg text-accentCream leading-relaxed">
            Crafting excellence in every tile — where innovation meets tradition.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section
        data-aos="fade-right"
        className="py-16 px-6 md:px-20 bg-white text-left"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-primary mb-6 border-b-4 border-accentGold inline-block pb-2">
            Our Story
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Marvel Tiles Factory is one of the leading manufacturers and distributors
            of pure vitrified tiles in South India. We specialize in creating
            high-quality tiles renowned for their durability and aesthetic appeal —
            combining traditional craftsmanship with modern design elements.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            With a wide range of products, we cater to both residential and
            commercial projects, ensuring our tiles meet the highest standards of
            sustainability and performance.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our commitment to innovation and customer satisfaction has established
            us as a trusted brand in the Indian tile industry. We take pride in
            delivering eco-friendly solutions that not only enhance the beauty of
            your spaces but also stand the test of time.
          </p>
        </div>
      </section>

      {/* CTA Section with Gradient Overlay */}
      <section
        data-aos="fade-left"
        className="relative text-center py-16 px-6 text-white"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/duy0961om/image/upload/v1762525973/d6dc7609-a5e8-41f4-ab68-0cd6aabaaf7c.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-accentBeige">
            Transform Your Spaces with Marvel Tiles
          </h3>
          <p className="text-accentCream leading-relaxed">
            Visit our showroom or contact us to explore our wide collection of elegant and durable tiles.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUsSection;
