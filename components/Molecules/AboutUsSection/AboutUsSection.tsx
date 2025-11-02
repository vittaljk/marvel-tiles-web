function AboutUsSection() {
    return (
        <div>
            <section className="bg-accentCream py-16 px-6 md:px-16 text-center">
                <h1 className="text-4xl font-bold text-primary mb-4 tracking-wide">
                    About Marvel Tiles
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
                    Crafting excellence in every tile — where innovation meets tradition.
                </p>
            </section>

            {/* Main content section */}
            <section className="py-16 px-6 md:px-20 bg-white text-left">
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

            {/* Optional: Add a small highlight or CTA */}
            <section className="bg-primary text-textLight text-center py-10 px-6">
                <h3 className="text-2xl font-semibold mb-3">Transform your spaces with Marvel Tiles</h3>
                <p className="max-w-2xl mx-auto text-accentBeige">
                    Visit our showroom or contact us to explore our wide collection of elegant and durable tiles.
                </p>
            </section>
        </div>
    )
}

export default AboutUsSection