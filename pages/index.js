import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2025-08-01T08:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-200 text-gray-800">
      <header className="p-6 flex justify-between items-center bg-white shadow-md">
        <div className="flex items-center gap-4">
          <img src="/logo-mpk.png" alt="Logo MPK" className="h-10" />
          <img src="/logo-osis.png" alt="Logo OSIS" className="h-10" />
          <img src="/logo-sekolah.png" alt="Logo Sekolah" className="h-10" />
        </div>
        <nav className="space-x-4">
          <Link href="/auth" className="text-blue-600 hover:underline">Login</Link>
          <Link href="/vote" className="text-blue-600 hover:underline">Voting</Link>
        </nav>
      </header>

      <main className="p-8 max-w-4xl mx-auto">
        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold mb-4">Pemilihan Ketua OSIS 2025</h1>
          <p className="mb-2">Selamat datang di sistem pemilihan ketua OSIS secara online. Silakan baca informasi di bawah sebelum memilih.</p>
          <p>Voting dibuka tanggal <strong>1 Agustus 2025</strong> pukul 08:00 WIB.</p>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Countdown Menuju Pemilihan</h2>
          <div className="flex gap-4 text-center text-lg">
            <div>
              <div className="font-bold text-2xl">{timeLeft.days}</div>
              <div>Hari</div>
            </div>
            <div>
              <div className="font-bold text-2xl">{timeLeft.hours}</div>
              <div>Jam</div>
            </div>
            <div>
              <div className="font-bold text-2xl">{timeLeft.minutes}</div>
              <div>Menit</div>
            </div>
            <div>
              <div className="font-bold text-2xl">{timeLeft.seconds}</div>
              <div>Detik</div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Jadwal Pemilihan</h2>
          <ul className="list-disc list-inside">
            <li>Pendaftaran Kandidat: 1 Juli - 10 Juli 2025</li>
            <li>Kampanye Kandidat: 15 Juli - 30 Juli 2025</li>
            <li><strong className="text-blue-600 animate-pulse">Voting: 1 Agustus 2025</strong></li>
            <li>Pengumuman: 2 Agustus 2025</li>
          </ul>
        </section>
      </main>

      <footer className="absolute bottom-0 w-full bg-white text-center p-4 shadow-inner">
        <p className="text-sm">&copy; 2025 OSIS SMKN 1 Majalaya. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
}
