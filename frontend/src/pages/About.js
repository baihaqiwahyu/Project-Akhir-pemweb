import React from "react";

export default function About() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-300">
      {/* MAIN CONTENT */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            {/* ABOUT SECTION */}
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                About Us
              </h2>
              <p className="mt-2 text-xl text-primary font-medium">
                Clipper Barbershop — Your style, our passion.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                At Clipper, we're more than just a barbershop; we're a community
                hub where style meets tradition. Our journey began with a simple
                vision: to provide exceptional grooming services in a welcoming
                atmosphere. We believe that a great haircut can change your day,
                and we're dedicated to making every visit a memorable
                experience. Our barbers are artists who master both classic
                techniques and modern trends, ensuring you'll leave looking and
                feeling your best.
              </p>
            </div>

            {/* PHILOSOPHY + SERVICES */}
            <div className="space-y-12">
              <div className="bg-background-light dark:bg-background-dark/50 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Philosophy
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We believe that grooming is an art form. Our philosophy is
                  rooted in a commitment to quality, craftsmanship, and customer
                  satisfaction. We use only the finest products and stay updated
                  with the latest techniques to offer a wide range of services,
                  from classic hot towel shaves to contemporary haircuts and
                  beard styling. We're dedicated to creating a relaxing and
                  professional environment where you can unwind and trust our
                  experts to take care of your grooming needs.
                </p>
              </div>

              <div className="bg-background-light dark:bg-background-dark/50 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Services
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We offer a comprehensive menu of grooming services tailored to
                  the modern gentleman. This includes precision haircuts, expert
                  beard trims, classic straight razor shaves, and rejuvenating
                  facial treatments. Whether you're looking for a quick
                  touch-up or a complete style transformation, our skilled
                  barbers will provide a personalized service that exceeds your
                  expectations.
                </p>
              </div>
            </div>

            {/* VISIT US */}
            <div className="mt-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Visit Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-background-light dark:bg-background-dark/50 p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Contact & Location
                  </h3>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">
                        location_on
                      </span>
                      <span>123 Barber Lane, Styleburg, ST 12345</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">
                        call
                      </span>
                      <span>(123) 456-7890</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">
                        smartphone
                      </span>
                      <a
                        className="hover:text-primary transition-colors"
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chat on WhatsApp
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">
                        map
                      </span>
                      <a
                        className="hover:text-primary transition-colors"
                        href="https://goo.gl/maps/example"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
                      </a>
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <button className="bg-primary text-white font-bold text-sm py-3 px-6 rounded-lg hover:bg-primary/90 transition-all flex-1">
                      Book an Appointment
                    </button>
                    <a
                      className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-bold text-sm py-3 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all flex-1 text-center"
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp Chat
                    </a>
                    <a
                      className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-bold text-sm py-3 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all flex-1 text-center"
                      href="https://goo.gl/maps/example"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="bg-background-light dark:bg-background-dark/50 p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Operational Hours
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span> <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span> <span>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span> <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TEAM */}
            <div className="mt-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Ethan Carter",
                    role: "Lead Barber",
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuARGlSw1eB1wBihgtg2V9UPUO9cJoVpT3jOtUWyiR5_o5sPFCeIWGNaEq-M49RhVRYiMrAYjpFD6THOxERZBmnJ0HLspT2QCHupYy_1mlsQ03CvxZVKirg0pPJ73ZrFwPvET-pW0b_0m6ssBflFumdPzGyIQy8DlBBftTXNvsYINvhkKP2zNQxq8Gt8xXZWVbk5Ui7rakui9qRNMFoum7SKDvB6xjsuM8pyM6XyHb1l9f9kmJ_inGXxFRL_m_NzHJgi4TRigmtfxlee",
                  },
                  {
                    name: "Liam Harper",
                    role: "Senior Barber",
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBU3qg6cYuVZqV7WRrRqATRxbb8mgM36j5AYzC448GC0oRiBSS6ulPrIbKPttRDjK70ZFvnQHgff8OhIMP_wrljv-niD7NgMK2uJErEthUJgke0M6rlpFmuM5HNsi_GMAVSxIOnn6jMWeZNEE5U7Da5OqV4Uy-zQTltzkkYYGkSnGiVLaDBjk8mDNxZrizwx11C3I1wFBGfrWiJf02grT_IUHqgxOj1aVH9gPdPwuT3gic6cYkz-ZBnLUN9boLYkv4FsKvEsr3Xifzh",
                  },
                  {
                    name: "Noah Bennett",
                    role: "Barber",
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBErfq7iKZ7fjrep3DzjziRD6E8xt2KZv7bfquG2XlznhUUjPk60DYWss9kYsMytkbjkLHJ2_ljQQbIaakFzaYYPGj9_XiQjwYYpfXQcTOiOR-qzqzEZSwPAPx9VJMe71iw9WIMkTePIvioaizc6sD4edpu9ymLZN-L-URs3keV6Y5fxssZ6XI-J0-RfvSOWmycS9whu5iWFGpqtcu8Jfr38aN2PKETOtGghSqIS9lReVXyUVhrMbfE0AH8Kc3w6v4cRemYgCVz8dcZ",
                  },
                ].map((member, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-primary/20 dark:border-primary/30 group-hover:border-primary transition-all duration-300">
                      <div
                        className="w-full h-full bg-center bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url(${member.image})` }}
                      ></div>
                    </div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {member.name}
                    </p>
                    <p className="text-md text-primary">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
