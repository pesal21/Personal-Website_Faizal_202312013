import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigasi from "@/components/Navigasi";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-blue-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      <Navigasi />
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-24 md:px-8 md:pt-40 space-y-16">
        <Header />
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full border-t border-zinc-200/60 dark:border-zinc-700/60"></div>
          </div>
        </div>
        <About />
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full border-t border-zinc-200/60 dark:border-zinc-700/60"></div>
          </div>
        </div>
        <Projects />
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full border-t border-zinc-200/60 dark:border-zinc-700/60"></div>
          </div>
        </div>
        <Contact />
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full border-t border-zinc-200/60 dark:border-zinc-700/60"></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
