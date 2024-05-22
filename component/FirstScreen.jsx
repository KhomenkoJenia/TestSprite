import Image from "next/image";
import "./FirstScreen.css";
import bgImage from "@/assets/img/firstscreen.png";

export default function FirstScreen() {
  return (
    <>
      <section className="first-secreen-container">
        <Image loading="lazy" src={bgImage} className="first-screen-imge" />

        <div className="first-screen-title">
          «G&M Development» – про свіжі ідеї та палкі плани, що зі швидкістю
          світа втілюються в реальність.
        </div>
      </section>
    </>
  );
}
