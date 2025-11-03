export default function Footer() {
  return (
    <footer className="text-center py-8">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          {["💼", "🚀", "💻", "🎨"].map((emoji, index) => (
            <span
              key={index}
              className="text-2xl opacity-60 hover:opacity-100 transition-opacity"
            >
              {emoji}
            </span>
          ))}
        </div>
        <div className="text-zinc-600 dark:text-zinc-400 text-sm">
          &copy; 2025 Faizal Darmawan. All rights reserved.
          <span className="block mt-1 text-xs opacity-75">
            Dibuat dengan ❤️ menggunakan Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}
