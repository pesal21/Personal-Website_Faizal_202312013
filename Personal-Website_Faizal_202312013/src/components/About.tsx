export default function About() {
  return (
    <section id="about" className="space-y-8">
      {/* Enhanced Header */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-2 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-20 animate-pulse"></div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Tentang Saya
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
        </div>
      </div>

      {/* Enhanced Content */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 md:col-span-2">
          {/* Main Content Card */}
          <div className="relative group">
            {/* Background Effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-xl p-8 border border-zinc-200/60 dark:border-zinc-700/60 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 font-light">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Halo!
                  </span>{" "}
                  Saya Faizal Darmawan, mahasiswa Teknik Informatika STITEK
                  Bontang yang memiliki minat besar di bidang{" "}
                  <span className="font-medium text-zinc-800 dark:text-zinc-200">
                    pengembangan web
                  </span>{" "}
                  dan{" "}
                  <span className="font-medium text-zinc-800 dark:text-zinc-200">
                    desain antarmuka pengguna
                  </span>
                  . Saya menikmati proses belajar hal-hal baru, terutama ketika
                  bisa menciptakan tampilan website yang tidak hanya menarik
                  secara visual, tetapi juga memberikan pengalaman yang nyaman
                  bagi pengguna.
                </p>

                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 font-light">
                  Bagi saya, teknologi bukan hanya tentang kode dan logika, tapi
                  juga tentang bagaimana membuat sesuatu yang bermanfaat dan
                  mudah diakses oleh semua orang. Karena itu, saya terus mengembangkan skill
                  dalam teknologi modern seperti React, Next.js, dan berbagai
                  tools desain untuk menciptakan pengalaman digital yang{" "}
                  <span className="italic text-purple-600 dark:text-purple-400">
                    memorable
                  </span>{" "}
                  dan{" "}
                  <span className="italic text-purple-600 dark:text-purple-400">
                    impactful
                  </span>
                  .
                </p>
              </div>

              {/* Signature Line */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-zinc-200/50 dark:border-zinc-700/50">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                  Passionate about creating meaningful digital experiences
                </span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
