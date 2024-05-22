import "@/app/varible.css";

import FirstScreen from "@/component/FirstScreen";
import Footer from "@/component/Footer";

import Header from "@/component/Header";
import ServiceCardList from "@/component/ServiceCardList";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <FirstScreen />
      <ServiceCardList />
      <Footer />
    </main>
  );
}
