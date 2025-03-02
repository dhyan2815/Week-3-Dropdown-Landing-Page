import { useEffect, useState } from "react";

const Hero = () => {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateText(true), 300);
  }, []);

  return (
    <section className="space-mono text-center py-20 bg-gradient-to-b from-gray-100 to-white">
      <h1 className={`space-mono text-5xl pt-20 mb-10 font-bold transition-all duration-700 ${animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        Hello User <span className="text-blue-600 animate-pulse">Welcome To My Site</span>
      </h1>
      <p className="space-mono mt-4 mb-10 text-gray-600">
        Created beautiful, responsive dropdown menus with multiple levels of navigation.
      </p>
      <div className="mt-6 space-x-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
          Explore Features →
        </button>
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition transform hover:scale-105">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
