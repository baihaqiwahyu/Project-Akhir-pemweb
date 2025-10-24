import React, { useState } from "react";
import axios from "axios";

const BookingForm = () => {
  const [nama, setNama] = useState("");
  const [hp, setHp] = useState("");
  const [layananId, setLayananId] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // supaya tidak reload halaman
    try {
      await axios.post("http://localhost:5000/booking", {
        nama,
        hp,
        layanan_id: layananId,
        tanggal,
        jam,
      });
      alert("Booking berhasil!");
      // reset form
      setNama("");
      setHp("");
      setLayananId("");
      setTanggal("");
      setJam("");
    } catch (error) {
      console.error(error);
      alert("Booking gagal!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nomor HP"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="ID Layanan"
        value={layananId}
        onChange={(e) => setLayananId(e.target.value)}
        required
      />
      <input
        type="date"
        value={tanggal}
        onChange={(e) => setTanggal(e.target.value)}
        required
      />
      <input
        type="time"
        value={jam}
        onChange={(e) => setJam(e.target.value)}
        required
      />
      <button type="submit">Booking</button>
    </form>
  );
};

export default BookingForm;
