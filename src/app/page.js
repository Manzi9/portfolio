import Image from "next/image";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30 animate-pulse"></div>
      <NavBar />
      <div className="container mx-auto px-12 py-4 relative z-10">
        <TopBar />
      </div>
      <Skills />
      <Projects />
    </main>
  );
}
