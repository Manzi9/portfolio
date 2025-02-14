import Image from "next/image";
import TopBar from "./components/TopBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#2a2a2a] container mx-auto px-12 py-4 ">
      <TopBar />
    </main>
  );
}
