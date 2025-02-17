import Image from "next/image";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#222222] ">
      <NavBar />
      <div className="container mx-auto px-12 py-4 ">
        <TopBar />
      </div>
    </main>
  );
}
