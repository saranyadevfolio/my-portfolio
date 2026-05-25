import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_5xsbxsj",
        "template_j06fxjm",
        form.current,
        "iWvN7tjmuo6B1tuW-"
      )
      .then(() => {
        alert("Message sent successfully 🚀");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send message ❌");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const projects = [
    {
      title: "Business Website Development",
      desc: "Modern responsive business websites with clean UI, animations, and SEO-focused architecture.",
      number: "01",
    },
    {
      title: "WordPress & Elementor Solutions",
      desc: "Custom WordPress websites with advanced responsive layouts and optimized UX.",
      number: "02",
    },
    {
      title: "Zoho CRM & Odoo Integrations",
      desc: "Business workflow solutions with scalable frontend systems and CRM integrations.",
      number: "03",
    },
    {
      title: "SEO & Performance Optimization",
      desc: "Schema markup, optimization, speed improvements, and search visibility enhancements.",
      number: "04",
    },
  ];

  const skills = [
    "React JS",
    "Tailwind CSS",
    "JavaScript",
    "WordPress",
    "Elementor Pro",
    "SEO",
    "UI/UX",
    "Responsive Design",
    "GitHub",
    "Hosting",
    "MySQL",
    "PHP",
  ];

  return (
    <div className="bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#1e293b22,transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,#2563eb22,transparent_40%)]"></div>
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-widest">
            SARANYA.
          </h1>

          <nav className="hidden md:flex gap-10 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 md:px-16 lg:px-28 pt-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[4px] text-cyan-400 text-sm mb-6">
              Frontend Developer • SEO Specialist
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-8">
              Building
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Modern
              </span>
              Digital Experiences
            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-2xl mb-10">
              Frontend developer focused on React JS, UI/UX design,
              WordPress development, SEO optimization, and modern web
              experiences with clean design systems and scalable architecture.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-300">
                View Projects
              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition duration-300">
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 rotate-3 hover:rotate-0 transition duration-500 shadow-2xl">

              <div className="bg-[#111] rounded-3xl p-6 border border-white/5">

                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>

                <div className="space-y-4">
                  <div className="h-5 bg-white/10 rounded-full w-2/3"></div>
                  <div className="h-5 bg-cyan-500/20 rounded-full w-full"></div>
                  <div className="h-5 bg-white/10 rounded-full w-5/6"></div>
                  <div className="h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-3xl mt-8"></div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-black border border-white/10 rounded-3xl px-6 py-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold">3+</h3>
                <p className="text-gray-400 text-sm">
                  Years Experience
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-black border border-white/10 rounded-3xl px-6 py-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold">20+</h3>
                <p className="text-gray-400 text-sm">
                  Projects Completed
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="px-6 md:px-16 lg:px-28 py-32"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">

          <div>
            <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
              About
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Designing powerful web experiences.
            </h2>
          </div>

          <div>
            <p className="text-gray-400 leading-9 text-lg">
              Experienced frontend developer with expertise in React JS,
              WordPress, Elementor Pro, Tailwind CSS, responsive design,
              SEO optimization, hosting management, and UI/UX systems.

              Passionate about creating fast, scalable, modern websites
              with premium interfaces and business-focused solutions.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="px-6 md:px-16 lg:px-28 py-20"
      >
        <div className="max-w-7xl mx-auto">

          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
                Skills
              </p>

              <h2 className="text-5xl font-black">
                Tech Stack
              </h2>
            </div>

            <p className="text-gray-400 max-w-xl leading-8">
              Modern frontend technologies and business-focused
              development solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-xl font-semibold">
                  {skill}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="px-6 md:px-16 lg:px-28 py-32"
      >
        <div className="max-w-7xl mx-auto">

          <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-20">
            Selected Projects
          </h2>

          <div className="space-y-10">

            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border border-white/10 rounded-[40px] p-10 hover:bg-white/5 transition duration-500"
              >

                <div className="grid lg:grid-cols-12 gap-10 items-center">

                  <div className="lg:col-span-3">
                    <span className="text-6xl font-black text-white/10">
                      {project.number}
                    </span>
                  </div>

                  <div className="lg:col-span-6">
                    <h3 className="text-3xl font-bold mb-4">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 leading-8">
                      {project.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-3 flex justify-start lg:justify-end">
                    <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition duration-300">
                      View Details
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 py-24 md:px-16 lg:px-28"
      >
        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-12 md:p-16"
          >

            <h2 className="text-5xl font-black mb-8 text-center">
              Let’s Work Together
            </h2>

            <p className="text-lg leading-9 text-gray-400 mb-12 text-center max-w-3xl mx-auto">
              Interested in frontend development, website creation,
              SEO optimization, UI/UX design, or business website solutions?
              Send your message directly.
            </p>

            {/* FORM */}
            <form ref={form} onSubmit={sendEmail} className="space-y-6">

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400"
              />

              <textarea
                name="message"
                placeholder="Type your message..."
                rows="5"
                required
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="bg-white text-black px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition duration-300 shadow-xl disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </motion.div>
        </div>
      </section>
    </div>
  );
}