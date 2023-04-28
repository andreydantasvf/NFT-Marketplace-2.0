import { Community } from "@/components/Community";
import { Create } from "@/components/Create";
import { Explore } from "@/components/Explore";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Home } from "@/components/Home";
import { TopCreatorsWeek } from "@/components/TopCreatorsWeek";

export default function App() {
  return (
    <main className="py-8 px-32 h-screen text-white">
      <Header />
      <Home />
      <Explore />
      <Create />
      <TopCreatorsWeek />
      <Community />
      <Footer />
    </main>
  )
}
