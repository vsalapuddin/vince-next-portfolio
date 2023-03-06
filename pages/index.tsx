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
