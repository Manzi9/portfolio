import Image from "next/image";
import TopBar from "./components/TopBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#222222] ">
      <div className="container mx-auto px-12 py-4 ">
        <TopBar />
      </div>
    </main>
  );
}
