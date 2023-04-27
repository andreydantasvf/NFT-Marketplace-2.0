import { Explore } from "@/components/Explore";
import { Header } from "@/components/Header";
import { Home } from "@/components/Home";
import Image from "next/image";

export default function App() {
  return (
    <main className="py-8 px-32 h-screen text-white">
      <Header />

      <Home />

      <Explore />
    </main>
  )
}
