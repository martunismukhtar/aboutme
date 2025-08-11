import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [typedText, setTypedText] = useState("");
  const threeRef = useRef();
  const mountRef = useRef();
  const mobileMenuRef = useRef();
  const fullText = "Full Stack Software Developer";
  // Typing animation effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);
  // Three.js setup with diagonal particle movement
  useEffect(() => {
    if (!mountRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    // Create floating geometries with diagonal movement pattern
    const geometries = [];
    const materials = [];
    const meshes = [];
    const directions = []; // Store movement directions
    const speeds = []; // Store movement speeds
    for (let i = 0; i < 30; i++) {
      const geometry = new THREE.IcosahedronGeometry(0.2, 1);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.8, 0.6),
        wireframe: true,
        transparent: true,
        opacity: 0.7,
      });
      const mesh = new THREE.Mesh(geometry, material);
      // Random starting positions
      mesh.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
      // Store diagonal movement direction (down-right or up-left based on index)
      const direction =
        i % 2 === 0
          ? new THREE.Vector3(1, -1, 0).normalize()
          : new THREE.Vector3(-1, 1, 0).normalize();
      directions.push(direction);
      // Random speed
      speeds.push(0.01 + Math.random() * 0.02);
      geometries.push(geometry);
      materials.push(material);
      meshes.push(mesh);
      scene.add(mesh);
    }
    camera.position.z = 15;
    const animate = () => {
      requestAnimationFrame(animate);
      // Move particles diagonally
      meshes.forEach((mesh, index) => {
        // Move in the stored direction
        mesh.position.add(
          directions[index].clone().multiplyScalar(speeds[index])
        );
        // Rotate for visual effect
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        // Reset position when out of bounds
        if (
          mesh.position.x > 20 ||
          mesh.position.x < -20 ||
          mesh.position.y > 20 ||
          mesh.position.y < -20
        ) {
          mesh.position.set(
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30
          );
        }
      });
      renderer.render(scene, camera);
    };
    animate();
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    threeRef.current = {
      renderer,
      scene,
      camera,
      meshes,
      geometries,
      materials,
    };
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometries.forEach((geo) => geo.dispose());
      materials.forEach((mat) => mat.dispose());
      renderer.dispose();
    };
  }, []);
  // Scroll handler for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        // "projects",
        "contact",
      ];
      const scrollPos = window.scrollY + 100;
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // GSAP Scroll Animations
  useEffect(() => {
    // Hero section animations
    const heroTitle = document.querySelector(".hero-title");
    const heroSubtitle = document.querySelector(".hero-subtitle");
    const heroDescription = document.querySelector(".hero-description");
    const heroButtons = document.querySelector(".hero-buttons");
    const heroImage = document.querySelector(".hero-image");
    if (heroTitle) {
      gsap.fromTo(
        heroTitle,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroTitle,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    if (heroSubtitle) {
      gsap.fromTo(
        heroSubtitle,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroSubtitle,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    if (heroDescription) {
      gsap.fromTo(
        heroDescription,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroDescription,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    if (heroButtons) {
      gsap.fromTo(
        heroButtons,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroButtons,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    if (heroImage) {
      gsap.fromTo(
        heroImage,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: heroImage,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    // Section animations
    const sections = [
      "about",
      "skills",
      "experience",
      // "projects",
      "contact",
    ];
    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const title = sectionElement.querySelector(".section-title");
        const content = sectionElement.querySelectorAll(".animate-on-scroll");
        if (title) {
          gsap.fromTo(
            title,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              scrollTrigger: {
                trigger: sectionElement,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
        if (content.length > 0) {
          content.forEach((element, index) => {
            gsap.fromTo(
              element,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: index * 0.1,
                scrollTrigger: {
                  trigger: element,
                  start: "top 90%",
                  end: "bottom 10%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          });
        }
      }
    });
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (mobileMenuOpen) {
        // Animate menu items when opening
        gsap.fromTo(
          mobileMenuRef.current.children,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out"
          }
        );
        // Animate menu container
        gsap.fromTo(
          mobileMenuRef.current,
          { height: 0, opacity: 0 },
          {
            height: "auto",
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          }
        );
      } else {
        // Animate menu container when closing
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        });
      }
    }
  }, [mobileMenuOpen]);
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };
  const skills = [
    {
      category: "Frontend Development",
      icon: "⚛️",
      skills: [
        { name: "jQuery", years: "5 years", level: "Expert" },
        { name: "React", years: "2 years", level: "Intermediate" },
        { name: "Tailwind CSS", years: "2 years", level: "Intermediate" },
      ],
    },
    {
      category: "Backend Development",
      icon: "🖥️",
      skills: [
        { name: "PHP", years: "5 years", level: "Expert" },
        { name: "Laravel", years: "5 years", level: "Expert" },
        { name: "Python", years: "2 years", level: "Intermediate" },
        { name: "Django", years: "2 years", level: "Intermediate" },
      ],
    },
  ];
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Simtanah - Aceh Government",
      period: "January 2024 – Present",
      description:
        "Developed and maintained a web application for government land asset management serving multiple government agencies.",
      achievements: [
        "Implemented PostGIS integration for interactive mapping and geospatial data visualization",
        "Improved asset location search efficiency through optimized database queries and mapping interface",
        "Enhanced data accuracy for legal land auditing and certification processes",
        "Managed extensive land asset database with real-time map visualization",
      ],
      tools: [
        "Laravel",
        "Bootstrap",
        "OpenLayers",
        "PostgreSQL",
        "PostGIS",
        "GeoServer",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "InnovateGeo (GIS Platform)",
      period: "2023 – 2024",
      description:
        "Designed and developed modular Laravel backend architecture for standardized spatial data management.",
      achievements: [
        "Streamlined field data input processing through comprehensive system optimization",
        "Improved spatial data reliability for project analysts and stakeholders",
        "Implemented robust data validation and quality assurance protocols",
      ],
      tools: [
        "Laravel",
        "Bootstrap",
        "OpenLayers",
        "PostgreSQL",
        "PostGIS",
        "GeoServer",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Dinas PUPR Aceh Barat",
      period: "2022 – 2023",
      description:
        "Built a full-stack web application using React.js frontend and CodeIgniter backend with integrated mapping system for land availability checking.",
      achievements: [
        "Developed responsive React.js interface for seamless geospatial data interaction",
        "Facilitated building permit processes through automated workflow",
        "Minimized land conflicts with automated land status verification",
        "Created user-friendly React components for public land inquiry services",
      ],
      tools: [
        "CodeIgniter",
        "React.js",
        "OpenLayers",
        "PostgreSQL",
        "PostGIS",
        "GeoServer",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "AviationLearn (Corporate LMS)",
      period: "2021 – 2022",
      description:
        "Developed a comprehensive Learning Management System using Laravel framework.",
      achievements: [
        "Reduced offline training costs through centralized digital training platform",
        "Managed extensive training participant database in an integrated environment",
        "Implemented user role management and progress tracking features",
      ],
      tools: ["Laravel", "React.js", "MySQL"],
    },
    {
      role: "Full-Stack Developer",
      company: "Moolahgo (Fintech Platform)",
      period: "2021 – 2022",
      description:
        "Migrated a legacy CodeIgniter 3 application to Laravel 8 with complete system refactoring.",
      achievements: [
        "Improved system performance and reduced critical bugs through code optimization",
        "Decreased maintenance costs with improved code architecture",
        "Rebuilt administrative dashboard with enhanced UX and functionality",
      ],
      tools: ["CodeIgniter", "MySQL"],
    },
    {
      role: "Full-Stack Developer",
      company: "iMMAP Indonesia (Humanitarian Job Portal)",
      period: "2020 – 2021",
      description:
        "Built a comprehensive job portal system for humanitarian sector recruitment using Laravel.",
      achievements: [
        "Accelerated recruitment timeline through automated processes and workflow optimization",
        "Achieved rapid user adoption within the first week of launch",
        "Implemented end-to-end recruitment workflow management system",
      ],
      tools: ["Laravel", "MySQL"],
    },
  ];
  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } min-h-screen transition-colors duration-300`}
    >
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Martunis
              </div>
              <div className="hidden md:flex space-x-8">
                {[
                  "hero",
                  "about",
                  "skills",
                  "experience",
                  // "projects",
                  "contact",
                ].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`cursor-pointer capitalize hover:text-blue-600 transition-colors ${
                      activeSection === section ? "text-blue-600" : ""
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div 
                ref={mobileMenuRef}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 border-t border-gray-200 dark:border-gray-700">
                  {[
                    "hero",
                    "about",
                    "skills",
                    "experience",
                    // "projects",
                    "contact",
                  ].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="cursor-pointer block w-full text-left py-3 px-4 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-800 last:border-0"
                    >
                      {section}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div ref={mountRef} className="absolute inset-0 z-0" />
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <img
                src="./profile.jpeg"
                alt="Profile"
                className="hero-image w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-600 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/50 transition-shadow duration-300"
              />
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Hello, I'm Martunis
            </h1>
            <h2 className="hero-subtitle text-2xl md:text-3xl font-medium mb-6 text-gray-600 dark:text-gray-300">
              {typedText}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="hero-description text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Passionate about creating innovative digital solutions with 5+
              years of experience in full-stack development
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">              
              <button
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div
            onClick={() => scrollToSection("about")}
            className="cursor-pointer absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="animate-on-scroll text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Full-stack Developer with 5+ years of experience building
                scalable web and mobile applications. Passionate about
                transforming complex challenges into elegant, user-focused
                solutions that deliver measurable impact.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-on-scroll text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-lg font-medium">Projects Completed</div>
              </div>
              <div className="animate-on-scroll text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-lg font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
              <p className="animate-on-scroll text-xl text-gray-600 dark:text-gray-300">
                Here are the technologies I work with
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillCategory, index) => (
                <div
                  key={index}
                  className="animate-on-scroll skill-category rounded-3xl p-8 hover:shadow-lg transition-all duration-300 border bg-zinc-50 hover:bg-white border-zinc-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-750"
                >
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">{skillCategory.icon}</div>
                    <h3 className="text-2xl font-bold transition-colors text-zinc-900 dark:text-white">
                      {skillCategory.category}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="skill-item p-4 rounded-xl border transition-all duration-200 hover:scale-105 bg-white border-zinc-100 hover:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-blue-600"
                      >
                        <div className="font-semibold mb-1 transition-colors text-zinc-900 dark:text-white">
                          {skill.name}
                        </div>
                        <div className="text-xs mb-2 transition-colors text-zinc-500 dark:text-gray-400">
                          {skill.years}
                        </div>
                        <div
                          className={`text-xs px-2 py-1 rounded-full inline-block transition-colors ${
                            skill.level === "Expert"
                              ? "bg-blue-600 text-white"
                              : skill.level === "Advanced"
                              ? "bg-purple-600 text-white"
                              : "bg-indigo-600 text-white"
                          }`}
                        >
                          {skill.level}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Experience Section - Combined for Mobile and Desktop */}
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Work Experience
              </h2>
              <p className="animate-on-scroll text-xl text-gray-600 dark:text-gray-300">
                My professional journey and key achievements
              </p>
            </div>
            <div className="relative">
              {/* Vertical line - only visible on desktop */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600 dark:bg-blue-600 md:block hidden"></div>
              {/* Experience items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`animate-on-scroll relative flex ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center flex-col md:flex-row`}
                  >
                    {/* Timeline dot - only visible on desktop */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-800 z-10 md:block hidden"></div>
                    {/* Content */}
                    <div
                      className={`w-full md:w-5/12 ${
                        index % 2 === 0
                          ? "md:pr-8 md:text-right"
                          : "md:pl-8 md:text-left"
                      } mb-8 md:mb-0`}
                    >
                      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 dark:text-blue-300 dark:bg-blue-900 rounded-full mb-2">
                          {exp.period}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.role}
                        </h3>
                        <h4 className="text-lg font-medium text-blue-600 mb-3">
                          {exp.company}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {exp.description}
                        </p>
                        {/* Tools for mobile view */}
                        <div className="md:hidden mt-4">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                            Tools & Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.tools.map((tool, toolIndex) => (
                              <span
                                key={toolIndex}
                                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Spacer for timeline - only on desktop */}
                    <div className="hidden md:block md:w-2/12"></div>
                    {/* Achievements */}
                    <div
                      className={`w-full md:w-5/12 ${
                        index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                      } md:text-left`}
                    >
                      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              </div>
                              <span className="text-gray-600 dark:text-gray-300">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                        {/* Tools for desktop view */}
                        <div className="hidden md:block mt-4">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                            Tools & Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.tools.map((tool, toolIndex) => (
                              <span
                                key={toolIndex}
                                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="animate-on-scroll text-xl text-gray-600 dark:text-gray-300">
                Let's work together on your next project
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <span>martunismukhtar@email.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-600 mr-4" />
                    <span>+62 852-6014-2060</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                    <span>Lhokseumawe, Aceh, Indonesia</span>
                  </div>
                </div>
                <div className="flex space-x-4 mt-8">
                  <a
                    href="https://github.com/martunismukhtar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/martunis-mukhtar-64718297" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:martunismukhtar@gmail.com" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="animate-on-scroll">
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      rows="5"
                      placeholder="Your Message"
                      className="w-full p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <a
                    href="mailto:martunismukhtar@gmail.com"
                    className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-600/25 transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © 2025 Martunis. Built with React.js & Three.js
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default App;