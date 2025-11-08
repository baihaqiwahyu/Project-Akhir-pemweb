// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Harap isi email dan password.");
      return;
    }

    // Contoh: panggil API login (opsional). Kalau belum punya backend, skip bagian fetch.
    try {
      // contoh fetch; sesuaikan endpoint/backend-mu
      // const res = await fetch("/api/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, password }),
      // });
      // const data = await res.json();
      // if (!res.ok) throw new Error(data.message || "Login gagal");

      // Jika login berhasil:
      navigate("/"); // atau ke dashboard, booking, dsb.
    } catch (err) {
      setError(err.message || "Terjadi kesalahan saat login.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-900 text-white px-4">
      <div className="w-full max-w-md bg-stone-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Log in</h2>

        {error && (
          <div className="mb-4 rounded px-4 py-2 bg-red-600/80 text-white text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm text-stone-200">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg px-4 py-3 bg-stone-900 border border-stone-700 focus:outline-none"
              placeholder="you@example.com"
            />
          </label>

          <label className="block">
            <span className="text-sm text-stone-200">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg px-4 py-3 bg-stone-900 border border-stone-700 focus:outline-none"
              placeholder="••••••••"
            />
          </label>

          <button
            type="submit"
            className="w-full mt-2 inline-block rounded-lg bg-primary px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-stone-400">
          Belum punya akun?{" "}
          <a href="/register" className="text-primary font-semibold">
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
}
