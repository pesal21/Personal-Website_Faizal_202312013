export default function Contact() {
  const contactMethods = [
    {
      name: "Email",
      value: "faizaldarmawan210@gmail.com",
      href: "mailto:faizaldarmawan210@gmail.com",
      icon: "✉️",
      color: "hover:text-red-500",
    },
    {
      name: "Instagram",
      value: "@fzl.drmwn",
      href: "https://www.instagram.com/fzl.drmwn",
      icon: "📱",
      color: "hover:text-pink-500",
    },
    {
      name: "GitHub",
      value: "github.com/pesal21",
      href: "https://github.com/pesal21",
      icon: "💻",
      color: "hover:text-purple-500",
    },
  ];

  return (
    <section id="contact" className="space-y-8">
      <div className="flex items-center gap-x-4 mb-2">
        <div className="w-12 h-0.5 bg-purple-500 rounded-full"></div>
        <h3 className="text-lg uppercase tracking-widest font-semibold text-zinc-500 dark:text-zinc-300">
          Hubungi Saya
        </h3>
        <div className="flex-1 h-0.5 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-8">
          Tertarik berkolaborasi atau sekedar menyapa? Jangan ragu untuk
          menghubungi saya. Saya selalu terbuka untuk diskusi tentang proyek
          menarik atau peluang baru.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.href}
            target={method.href.startsWith("http") ? "_blank" : undefined}
            rel={
              method.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className={`group bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 ${method.color}`}
          >
            <div className="text-3xl mb-3">{method.icon}</div>
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">
              {method.name}
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              {method.value}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
