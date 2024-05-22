import "./ServiceCardList.module.css";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import Button from "./UI/Button";

export default function ServiceCardList() {
  return (
    <>
      <section id="product" className="product-container">
        <h2 className=" text-center font-bold mb-5 mt-5">Product card</h2>
        <div className="text-center text-3xl mb-5 mt-5">
          <Button>
            <Link href="https://khomenkojenia.github.io/Jenia_Khomenko/animation_new.html"></Link>
            Example sprite (Click me)
          </Button>
        </div>
        <ServiceCard />
      </section>
    </>
  );
}
