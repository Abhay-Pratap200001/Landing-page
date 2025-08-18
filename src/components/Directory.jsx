// components/Directory.jsx
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "jaan Devid",
    role: "Founder & CEO",
    image: "https://i.pinimg.com/1200x/7b/4a/0b/7b4a0babda410062e8655a5fa3ac678b.jpg", // replace with real image
    linkedin: "#",
    github: "#",
  },
  {
    name: "john snow",
    role: "UI/UX Designer",
    image: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/kit-harington-37467-24-03-2017-17-33-03.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Daenerys ",
    role: "Backend Engineer",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Alena",
    role: "Frontend Engineer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNpoWSi1dRcZYTrlzbPb0zmfhh5SBbG2fFg&s",
    linkedin: "#",
    github: "#",
  },
];

export default function Directory() {
  return (
    <section
      id="directory"
      className="py-35 px-6 max-w-7xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6">
        Meet the Team
      </motion.h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Our passionate and talented team working together to build something
        amazing.
      </p>

      {/* Team grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">

            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"/>

            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
            <div className="flex justify-center space-x-4 mt-4">

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800">
                LinkedIn
              </a>

              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black">
                GitHub
              </a>
              
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
