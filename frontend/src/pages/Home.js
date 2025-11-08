import React, { useEffect } from "react";

function Home() {
  // Tambahkan efek smooth scrolling sekali di sini
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-stone-900 dark:text-stone-100">
      {/* Hero Section */}
      <main>
        <section
          className="relative flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJa_RcinMrFT4nb8DK2MM3LM9KbjLDAazOXaJfseNxahRHdLlN4axQ28vlAcHaEaxmXIHCWdFEyO-bGIXlhXs1Tc-cSu1ZOBLKjTdCUEWZi9OJLpGbtj4dRHIvar2TqZPqnzMcFZGQ9rPmRINi6CrR1h7b6dUJK4NsCYB7BuLx76E6HzjnB1zcVbEI60M1xCcOYhfk4hq48OAMrmobpJbvPsbKrbP5Vkohb9chlMJ9fIploTFs4LotzILEIAbuuM_SvuPH4Fx14N-N')",
          }}
        >
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Crafting Confidence, One Cut at a Time
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-stone-200">
              Experience the art of grooming with our expert barbers. From
              classic cuts to modern styles, we're dedicated to helping you look
              and feel your best.
            </p>
            <a
              className="mt-8 inline-block rounded-lg bg-primary px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105"
              href="#booking"
            >
              Book Now
            </a>
          </div>
        </section>

        {/* Featured Services */}
        <section className="bg-stone-950 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">Featured Services</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Classic Haircut",
                  desc: "Precision haircut with a personalized touch.",
                  img: "https://cdn-icons-png.flaticon.com/512/8090/8090454.png",
                },
                {
                  title: "Beard Trim & Style",
                  desc: "Detailed beard shaping and styling.",
                  img: "https://cdn-icons-png.flaticon.com/512/4825/4825065.png",
                },
                {
                  title: "Hair Color",
                  desc: "Professional hair coloring services.",
                  img: "https://cdn-icons-png.flaticon.com/512/8090/8090435.png",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-stone-900 rounded-2xl shadow-lg p-6 transition hover:scale-105"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-32 h-32 mx-auto mb-6 object-contain"
                  />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-stone-400">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Barbers */}
        <section className="bg-stone-950 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">Our Barbers</h2>
            <div className="grid gap-10 md:grid-cols-4">
              {[
                { name: "Ethan", role: "Master Barber" },
                { name: "Noah", role: "Senior Barber" },
                { name: "Liam", role: "Barber" },
                { name: "Jackson", role: "Barber" },
              ].map((barber, i) => (
                <div key={i} className="text-center">
                  <img
                    src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${barber.name}`}
                    alt={barber.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold">{barber.name}</h3>
                  <p className="text-stone-400">{barber.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="bg-stone-950 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Lucas Bennett",
                  text: "Ethan is a true professional. He listened to what I wanted and delivered a perfect haircut. Highly recommend!",
                  rating: 5,
                },
                {
                  name: "Owen Carter",
                  text: "Noah always does an amazing job with my beard, and the shop atmosphere is great.",
                  rating: 4,
                },
                {
                  name: "Jackson Reed",
                  text: "Liam is skilled and friendly. Always leaves me feeling confident after a visit.",
                  rating: 4,
                },
              ].map((review, i) => (
                <div
                  key={i}
                  className="bg-stone-900 rounded-2xl shadow-lg p-6 text-left"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${review.name}`}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-yellow-400">
                        {"★".repeat(review.rating)}{" "}
                        {"☆".repeat(5 - review.rating)}
                      </p>
                    </div>
                  </div>
                  <p className="text-stone-400">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="bg-primary text-white py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Fresh Look?</h2>
          <p className="mb-8 text-lg">
            Book your appointment today and let our skilled barbers take care of you.
          </p>
          <a
            href="/booking"
            className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-stone-100 transition"
          >
            Book Your Appointment
          </a>
        </section>

        {/* Footer */}
        <footer className="bg-stone-950 text-stone-400 py-6 text-center text-sm">
          <p>© 2024 Clipper. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default Home;
