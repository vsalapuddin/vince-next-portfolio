import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
{
  console.log(
    "%c What are you looking for?",
    "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
  );
}
const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 no-scrollbar">
      <Parallax
        pages={6}
        className="bg-[#253237] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 no-scrollbar"
      >
        <Header />
        <Head>
          <title>Vince Salapuddin</title>
        </Head>

        <ParallaxLayer
          speed={0.1}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        >
          <section id="hero" className="snap-start">
            <Hero />
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1}>
          <section id="about" className="snap-center">
            <About />
          </section>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.1}
          factor={2}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        >
          <section id="experience" className="snap-center">
            <Experience />
          </section>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0.1}
          factor={2}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        >
          <section id="skills" className="snap-start">
            <Skills />
          </section>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0.1}
          factor={2}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        >
          <section id="projects" className="snap-start">
            <Projects />
          </section>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          speed={0.1}
          factor={1}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        >
          <section id="contact" className="snap-start">
            <Contact />
          </section>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
