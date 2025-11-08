import React, { useState } from "react";

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    service: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! (nanti dikirim ke backend)");
  };

  return (
    <div className="min-h-screen bg-[#2B1B14] flex flex-col items-center px-4 py-12 text-white">
      <h1 className="text-4xl font-bold mb-2">Book Your Appointment</h1>
      <p className="text-gray-400 mb-8">
        Fill in the details below to schedule your visit.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-[#1E120D] w-full max-w-md p-6 rounded-2xl shadow-lg space-y-4"
      >
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Contact Number</label>
          <input
            type="text"
            name="contact"
            placeholder="Enter your contact number"
            value={form.contact}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Select Service</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
          >
            <option value="">Choose a service</option>
            <option value="Haircut">Haircut</option>
            <option value="Beard Trim">Beard Trim</option>
            <option value="Hair & Beard Package">Hair & Beard Package</option>
          </select>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm mb-1">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm mb-1">Preferred Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default Booking;
