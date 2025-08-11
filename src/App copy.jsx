import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion, useAnimation } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Smartphone, Database, Server } from 'lucide-react';

// 3D Floating Sphere Component
function FloatingSphere({ position, color, speed = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[1, 32, 32]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.1}
      />
    </Sphere>
  );
}

// 3D Scene Component
function Scene3D() {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingSphere position={[-2, 0, 0]} color="#00d4ff" speed={1} />
      <FloatingSphere position={[2, 1, -1]} color="#00ff88" speed={1.5} />
      <FloatingSphere position={[0, -1, -2]} color="#ff00aa" speed={0.8} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

// Skill Bar Component
function SkillBar({ skill, percentage }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      width: `${percentage}%`,
      transition: { duration: 1, ease: "easeOut" }
    });
  }, [controls, percentage]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{skill}</span>
        <span className="text-cyan-400">{percentage}%</span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-green-500 rounded-full"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
        <div className="absolute top-4 right-4 flex gap-2">
          <a href={project.demo} className="p-2 bg-cyan-500 rounded-full hover:bg-cyan-400 transition-colors">
            <ExternalLink size={16} />
          </a>
          <a href={project.github} className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <Github size={16} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Experience Item Component
function ExperienceItem({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 border-l-2 border-gray-800 last:border-l-0 group"
    >
      <div className="absolute -left-2.5 top-0 w-5 h-5 bg-cyan-500 rounded-full group-hover:scale-125 transition-transform" />
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-white">{experience.position}</h3>
            <p className="text-cyan-400">{experience.company}</p>
          </div>
          <span className="text-gray-400 text-sm mt-2 md:mt-0">{experience.period}</span>
        </div>
        <p className="text-gray-300 mb-4">{experience.description}</p>
        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-gray-800 text-green-400 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Mock data
  const skills = [
    { name: 'React.js', level: 95 },
    { name: 'Vue.js', level: 85 },
    { name: 'Node.js', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'MongoDB', level: 85 },
    { name: 'AWS', level: 75 },
  ];

  const experiences = [
    {
      position: 'Senior Full Stack Developer',
      company: 'TechInnovate Solutions',
      period: '2022 - Present',
      description: 'Lead development of scalable web applications using React and Node.js. Implemented microservices architecture and improved system performance by 40%.',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker']
    },
    {
      position: 'Frontend Developer',
      company: 'DigitalWave Agency',
      period: '2020 - 2022',
      description: 'Developed responsive web applications for clients in various industries. Specialized in React and Vue.js frameworks with modern CSS techniques.',
      tech: ['Vue.js', 'React', 'Tailwind CSS', 'Firebase']
    },
    {
      position: 'Junior Developer',
      company: 'StartupAceh',
      period: '2019 - 2020',
      description: 'Built and maintained web applications for local businesses. Gained experience in full-stack development and agile methodologies.',
      tech: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap']
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration and inventory management.',
      image: 'https://placehold.co/400x200/1a1a2e/00d4ff?text=E-Commerce+Platform',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      image: 'https://placehold.co/400x200/1a1a2e/00ff88?text=Task+Manager',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather forecasting application with interactive maps and detailed analytics.',
      image: 'https://placehold.co/400x200/1a1a2e/ff00aa?text=Weather+App',
      tech: ['React', 'Chart.js', 'OpenWeather API'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Social Media Analytics',
      description: 'Dashboard for tracking social media metrics and generating insights for marketing teams.',
      image: 'https://placehold.co/400x200/1a1a2e/00d4ff?text=Analytics+Dashboard',
      tech: ['React', 'D3.js', 'Express.js', 'PostgreSQL'],
      demo: '#',
      github: '#'
    }
  ];

  // Navigation handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent"
            >
              DevPortfolio
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-cyan-400 ${
                    activeSection === item ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-gray-800"
            >
              <div className="flex flex-col space-y-4">
                {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize text-left text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Scene3D />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/50 z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="block">Muhammad</span>
                <span className="block bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Full Stack Software Developer crafting digital experiences with modern technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  View My Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition-all"
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
                  <img
                    src="https://placehold.co/400x400/1a1a2e/00d4ff?text=Profile"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-green-500 p-4 rounded-full">
                  <Code className="text-white" size={24} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Passionate Developer from Lhokseumawe</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With over 5 years of experience in software development, I specialize in creating 
                scalable web applications and mobile solutions. My passion lies in solving complex 
                problems through clean, efficient code and delivering exceptional user experiences.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I thrive in collaborative environments and enjoy staying up-to-date with the latest 
                technologies and best practices in the industry. When I'm not coding, you can find me 
                contributing to open-source projects or exploring new frameworks.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">30+</div>
                  <div className="text-gray-400">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                  <div className="text-gray-400">Technologies</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                <Code className="text-cyan-400 mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">Web Development</h4>
                <p className="text-gray-400">Building responsive and interactive web applications</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                <Smartphone className="text-green-400 mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">Mobile Apps</h4>
                <p className="text-gray-400">Creating cross-platform mobile applications</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                <Database className="text-cyan-400 mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">Backend Systems</h4>
                <p className="text-gray-400">Designing robust server-side architectures</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                <Server className="text-green-400 mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">Cloud Solutions</h4>
                <p className="text-gray-400">Deploying scalable cloud infrastructure</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8">Programming Languages & Frameworks</h3>
              {skills.map((skill, index) => (
                <SkillBar key={index} skill={skill.name} percentage={skill.level} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Git', 'Docker', 'AWS', 'Firebase', 'Jest', 'Webpack', 'Tailwind CSS', 'SASS'].map((tool, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      {tool}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Database Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'].map((db, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      {db}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <ExperienceItem key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8">Let's Work Together</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-cyan-500/10 rounded-full mr-4">
                    <Mail className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-400">developer@example.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-green-500/10 rounded-full mr-4">
                    <Phone className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-400">+62 812 3456 7890</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-cyan-500/10 rounded-full mr-4">
                    <MapPin className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-400">Lhokseumawe, Aceh, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500/20 transition-colors"
                >
                  <Github className="text-white" size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500/20 transition-colors"
                >
                  <Linkedin className="text-white" size={24} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="bg-gray-900 p-8 rounded-2xl shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Muhammad Developer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}