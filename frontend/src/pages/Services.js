import React from "react";

export default function Services() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen">
      {/* SECTION SERVICES */}
      <main id="services" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Explore our range of services designed to keep you looking sharp and
            feeling confident. From classic cuts to modern styles, our skilled
            barbers are here to cater to your grooming needs.
          </p>
        </div>

        {/* ---------------------------
            BAGIAN BAWAH (DIUPDATE)
           --------------------------- */}
        <section className="mt-16 space-y-16">
          {/* Haircuts */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Haircuts
            </h3>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Men’s Haircut",
                  price: "$40",
                  desc: "Classic cuts and modern styles tailored for men. (45 min)",
                  img: "https://images.unsplash.com/photo-1562157874-818bc0726a3b?auto=format&fit=crop&w=800&q=60",
                },
                {
                  title: "Women’s Haircut",
                  price: "$60",
                  desc: "Stylish cuts and trims for women of all ages. (60 min)",
                  img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60",
                },
                {
                  title: "Kid’s Haircut",
                  price: "$30",
                  desc: "Fun and fashionable haircuts for kids. (30 min)",
                  img: "https://images.unsplash.com/photo-1598367059368-4f2b9b33f2b2?auto=format&fit=crop&w=800&q=60",
                },
              ].map((service, i) => (
                <article
                  key={i}
                  className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg border border-gray-200 dark:border-gray-700 transition hover:shadow-2xl"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      {service.title}
                    </h4>
                    <span className="text-primary font-bold">{service.price}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.desc}</p>

                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-36 object-cover"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Shaving */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Shaving
            </h3>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Straight Razor Shave",
                  price: "$45",
                  desc: "Traditional straight razor shave for a smooth finish. (45 min)",
                  img: "https://images.unsplash.com/photo-1544213456-bfb6f4f8a2a0?auto=format&fit=crop&w=800&q=60",
                },
                {
                  title: "Beard Trim",
                  price: "$25",
                  desc: "Precision trimming and shaping for your beard. (30 min)",
                  img: "https://images.unsplash.com/photo-1520975673411-6b0a0b7b89d9?auto=format&fit=crop&w=800&q=60",
                },
                {
                  title: "Head Shave",
                  price: "$40",
                  desc: "Clean and close shave for a bald look. (45 min)",
                  img: "https://images.unsplash.com/photo-1573495628362-0b1f9d8b6d77?auto=format&fit=crop&w=800&q=60",
                },
              ].map((service, i) => (
                <article
                  key={i}
                  className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg border border-gray-200 dark:border-gray-700 transition hover:shadow-2xl"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      {service.title}
                    </h4>
                    <span className="text-primary font-bold">{service.price}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.desc}</p>

                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-36 object-cover"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Treatments & Coloring */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Treatments & Coloring
            </h3>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Hair Treatment",
                  price: "$55",
                  desc: "Deep conditioning and repair for healthy hair. (60 min)",
                  img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?auto=format&fit=crop&w=800&q=60",
                },
                {
                  title: "Hair Color",
                  price: "$80+",
                  desc: "Full color application for a vibrant new look. (90 min)",
                  img: "https://images.unsplash.com/photo-1573495804689-7f2b6f5b3f6a?auto=format&fit=crop&w=800&q=60",
                },
                {
                  title: "Gray Coverage",
                  price: "$70+",
                  desc: "Expert blending to cover gray hairs seamlessly. (75 min)",
                  img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60",
                },
              ].map((service, i) => (
                <article
                  key={i}
                  className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg border border-gray-200 dark:border-gray-700 transition hover:shadow-2xl"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      {service.title}
                    </h4>
                    <span className="text-primary font-bold">{service.price}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.desc}</p>

                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-36 object-cover"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="text-center mt-16">
            <a
              href="#"
              className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-transform"
            >
              Book Your Appointment
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
