import { useState } from "react";
import axios from "axios";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // kirim data ke backend
      await axios.post("http://localhost:5000/api/booking", formData);
      alert("Booking berhasil dikirim!");
      setFormData({
        name: "",
        phone: "",
        service: "",
        date: "",
        time: "",
      });
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengirim data!");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
      <h2>Booking Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>Nama:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>No. Telepon:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Layanan:</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Pilih Layanan</option>
          <option value="Classic Haircut">Classic Haircut</option>
          <option value="Beard Trim & Style">Beard Trim & Style</option>
          <option value="Hair Color">Hair Color</option>
        </select>

        <label>Tanggal:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Waktu:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <button type="submit" style={{ marginTop: "10px" }}>
          Kirim Booking
        </button>
      </form>
    </div>
  );
}

export default Booking;
