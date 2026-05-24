import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {

  const form = useRef();
  const [loading, setLoading] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();         


    emailjs.sendForm(      
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
      desc: "Designed and developed modern responsive business websites with SEO optimization, UI animations, and high-performance layouts.",
      tech: ["React", "SEO", "Tailwind CSS"],
    },
    {
      title: "WordPress & Elementor Solutions",
      desc: "Created dynamic WordPress websites using Elementor Pro with custom responsive sections, animations, and optimized user experiences.",
      tech: ["WordPress", "Elementor", "Responsive Design"],
    },
    {
      title: "Zoho CRM & Odoo Integrations",
      desc: "Worked on CRM and ERP-related web solutions with optimized workflows, modern UI designs, and scalable business systems.",
      tech: ["Zoho CRM", "Odoo", "Business Solutions"],
    },
    {
      title: "SEO & Website Optimization",
      desc: "Implemented SEO strategies, schema markup, performance optimization, and modern web practices to improve search visibility.",
      tech: ["SEO", "Schema", "Optimization"],       
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "JavaScript",
    "React JS",
    "Tailwind CSS",
    "PHP",
    "MySQL",
    "XML",
    "SEO Optimization",
    "Graphic Designing",
    "Hosting Management",
    "Website Management",
    "Domain Management",
    "WordPress",
    "Elementor Pro",    
    "Git & GitHub",
    "Responsive Design",
    "UI/UX Design",
    "CRM Solutions",
  ];

  return (      
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Hero Section */}
      <section className="relative px-6 py-28 md:px-16 lg:px-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[5px] text-cyan-400 mb-5 text-sm font-semibold">
              👩‍💻 Frontend Developer • SEO Specialist • UI Designer
            </p>


            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Creative <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                React Developer
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-9 mb-10 max-w-2xl">
              Passionate and creative Web Developer with strong expertise in
              HTML5, CSS3, Bootstrap, JavaScript, React JS, Tailwind CSS,
              PHP, MySQL, XML, SEO Optimization, Graphic Designing,
              Website Hosting, Domain Management, and Business Website Development.

              Specialized in building high-performance responsive websites,
              SEO-friendly web applications, modern UI/UX experiences,
              animated landing pages, and scalable business solutions 🚀
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 font-semibold shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                View Projects ✨
              </button>

              <button className="px-8 py-4 rounded-2xl border border-zinc-700 hover:bg-white hover:text-black transition duration-300 font-semibold">
                Contact Me 💌
              </button>
            </div>
          </motion.div>

          {/* Right Side Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="w-[340px] h-[340px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 shadow-[0_0_70px_rgba(59,130,246,0.5)] animate-pulse">
              <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center text-center p-10">
                <div>
                  <h2 className="text-4xl font-bold mb-4">
                    Frontend 👩‍💻
                  </h2>

                  <p className="text-gray-400 leading-8 text-lg">
                    React • SEO • UI/UX • Hosting • Graphic Design • Web Management
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}   
      <section className="px-6 py-24 md:px-16 lg:px-28 bg-zinc-950/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            About Me 🚀
          </h2>

          <p className="text-gray-300 text-lg leading-9 max-w-5xl mx-auto">
            Experienced Frontend Web Developer with 3+ years of expertise in
            creating modern business websites, responsive web applications,
            SEO-friendly platforms, and engaging user experiences.

            Skilled in React JS, Tailwind CSS, WordPress, Elementor Pro,
            PHP, MySQL, Website Hosting, Domain Management, and Graphic Designing.

            Passionate about building powerful digital experiences with clean UI,
            fast performance, creative animations, and modern web technologies.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-24 md:px-16 lg:px-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-6">
            Professional Skills ⚡
          </h2>

          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 leading-8">
            Expertise in frontend development, responsive web design,
            SEO optimization, hosting management, website maintenance,
            CRM solutions, and creative UI/UX experiences.
          </p> 

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-zinc-900/70 backdrop-blur-lg border border-zinc-800 rounded-3xl p-6 text-center hover:-translate-y-3 hover:border-cyan-400 transition duration-300 shadow-xl"
              >
                <p className="font-semibold text-lg">
                  {skill}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-24 md:px-16 lg:px-28 bg-zinc-950/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Featured Projects ✨
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 rounded-[30px] p-10 hover:scale-[1.03] hover:border-cyan-400 transition duration-300 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
              >
                <h3 className="text-3xl font-bold mb-5">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8 mb-8 text-lg">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
{/* Contact Section */}
{/* Contact Section */}
<section className="px-6 py-24 md:px-16 lg:px-28">

  <div className="max-w-4xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-cyan-600/20 to-purple-700/20 backdrop-blur-xl border border-white/10 rounded-[40px] p-12 md:p-16 text-center shadow-[0_0_50px_rgba(59,130,246,0.2)]"
    >

      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        Let’s Connect 💜
      </h2>

      <p className="text-lg leading-9 text-gray-300 mb-12 max-w-3xl mx-auto">
        Interested in working together? Send your message directly.
        I’ll get back to you regarding projects, collaborations,
        frontend development, SEO optimization, UI/UX design,
        and modern website solutions 🚀
      </p>

      {/* FORM (EmailJS Connected) */}
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
          className="w-full bg-black/40 border border-white/10 round   ed-2xl px-6 py-4 outline-none focus:border-cyan-400"
        ></textarea>
<button
  type="submit"
  disabled={loading}
  className="bg-white text-black px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition duration-300 shadow-xl disabled:opacity-50"
>
  {loading ? "Sending..." : "🚀 Send Message"}
</button>

      </form>

      <p className="text-sm text-gray-500 mt-8">
        Secure contact form • Your message goes directly to my inbox 🔒
      </p>

    </motion.div>

  </div>

</section>
    </div>
  );
}
