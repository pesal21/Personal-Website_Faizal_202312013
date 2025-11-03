import Image from "next/image";

const projects = [
  {
    title: "Warung Bakso Kang Bejo",
    description:
      " Proyek sederhana berbasis bahasa C++ yang menampilkan simulasi pemesanan menu bakso dengan sistem penentuan level pedas dan perhitungan total harga otomatis. Program ini melatih logika dasar pemrograman, penggunaan conditional statements, serta pengelolaan input dan output.",
    image: "/bakso.png",
    tags: ["C++", "Console App", "Basic Programming"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "TirtoPesal Travel Website",
    description:
      "Website TirtoPesal Travel adalah sistem pemesanan travel berbasis web yang memungkinkan pengguna melakukan pemesanan tiket secara online dengan tampilan modern dan responsif. Desainnya dibuat agar mudah digunakan dan nyaman di berbagai perangkat. Aplikasi ini dibangun menggunakan HTML, CSS, PHP, dan MySQL, dengan dukungan Bootstrap untuk mempercantik tampilan. Fitur utamanya meliputi login, CRUD data, pemesanan, pembayaran, dan laporan transaksi.",
    image: "/tirtopesal.png",
    tags: ["Web Travel", "PHP & MySQL", "Bootstrap"],
    gradient: "from-blue-500 to-purple-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-12">
      <div className="flex items-center gap-x-4 mb-2">
        <div className="w-12 h-0.5 bg-green-500 rounded-full"></div>
        <h3 className="text-lg uppercase tracking-widest font-semibold text-zinc-500 dark:text-zinc-300">
          Proyek Saya
        </h3>
        <div className="flex-1 h-0.5 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
      </div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-zinc-800 rounded-3xl border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 z-0`}
                ></div>
                <Image
                  alt={project.title}
                  src={project.image}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={600}
                  height={400}
                />
              </div>

              <div className="lg:w-3/5 p-8">
                <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-700 rounded-full text-xs font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
