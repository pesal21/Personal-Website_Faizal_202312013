import Image from "next/image";

export default function Header() {
  return (
    <header className="flex gap-x-8 flex-col md:flex-row items-center md:items-start">
      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <Image
          className="size-32 rounded-full border-4 border-white dark:border-zinc-800 shadow-xl relative z-10 transition-transform duration-300 group-hover:scale-105"
          src="/pesal.jpg"
          alt="Picture of Faizal Darmawan"
          width={128}
          height={128}
          priority
        />
      </div>
      <div className="text-center md:text-left mt-6 md:mt-0 flex-1">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-zinc-300 bg-clip-text text-transparent">
          Faizal Darmawan
        </h1>
        <h2 className="text-xl font-light text-zinc-600 dark:text-zinc-300 mb-6">
          Mahasiswa Teknik Informatika
        </h2>
        <div className="max-w-2xl">
          <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed bg-white/50 dark:bg-zinc-800/50 rounded-2xl p-6 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50">
            Saya mahasiswa STITEK Bontang yang tertarik pada pengembangan web
            dan desain antarmuka pengguna (UI/UX).
          </p>
        </div>
      </div>
    </header>
  );
}
