import Image from "next/image";
import Head from "next/head";
import Index from "./component";
import Contact from "./component/contact";
import About from "./component/about";


export default function Home() {
  return (
    <div>
      <Index/>
      <About/>
      <Contact/>
    </div>
  );
}
