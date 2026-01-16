import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, ExternalLink, Award, Code, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              VG
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition">About</a>
              <a href="#projects" className="text-gray-300 hover:text-purple-400 transition">Projects</a>
              <a href="#achievements" className="text-gray-300 hover:text-purple-400 transition">Achievements</a>
              <a href="#experience" className="text-gray-300 hover:text-purple-400 transition">Experience</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-5xl font-bold text-white animate-float">
              VG
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Vansh Gambhir
          </h1>
          <p className="text-2xl md:text-3xl text-purple-300 mb-6">
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            CS Student at Uttaranchal Institute of Technology | Building scalable web applications with React, Next.js & Node.js
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://www.linkedin.com/in/vansh-gambhir-6490692bb/" target="_blank" rel="noopener noreferrer" 
               className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/P94Vansh" target="_blank" rel="noopener noreferrer"
               className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-300">
            <div className="flex items-center space-x-2">
              <Mail size={18} />
              <span>vanshgambhirag@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={18} />
              <span>+91-8979402739</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Education */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white">Bachelor of Technology in Computer Science</h4>
                  <p className="text-purple-300">Uttaranchal Institute of Technology, Uttarakhand</p>
                  <p className="text-gray-400">Aug 2023 – Jul 2027</p>
                  <p className="text-green-400 font-semibold">GPA: 9.04</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Intermediate</h4>
                  <p className="text-purple-300">A.N.D Public School, Uttarakhand</p>
                  <p className="text-gray-400">Apr 2018 – Mar 2023</p>
                  <p className="text-green-400 font-semibold">97.2%</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['C++', 'JavaScript', 'SQL'].map(skill => (
                      <span key={skill} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Next.js', 'Tailwind CSS', 'React Router'].map(skill => (
                      <span key={skill} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Backend & Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Appwrite', 'MongoDB', 'MySQL', 'Nodemailer'].map(skill => (
                      <span key={skill} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Redux Toolkit', 'Git', 'VS Code', 'Postman', 'Vercel'].map(skill => (
                      <span key={skill} className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* MegaBlog */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">MegaBlog</h3>
                <Code className="text-purple-400" size={28} />
              </div>
              <p className="text-gray-400 mb-4">Full Stack Blogging Platform</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Built a scalable blogging platform with authentication, CRUD features, and role-based access
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Integrated Appwrite for backend services, Redux Toolkit for global state management
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Improved UI/UX using Tailwind CSS and deployed on Vercel
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'Appwrite', 'Redux', 'Tailwind'].map(tech => (
                  <span key={tech} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="https://app-write-blog-bice.vercel.app/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
                <ExternalLink size={18} />
                <span>View Live Demo</span>
              </a>
            </div>

            {/* MealBridge */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">MealBridge</h3>
                <Code className="text-purple-400" size={28} />
              </div>
              <p className="text-gray-400 mb-4">NGO–Restaurant Food Donation System</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Designed platform to connect NGOs with restaurants for surplus food redistribution
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Implemented geo-indexed queries to locate restaurants within 50km radius
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Automated donation confirmation emails using Nodemailer with analytics dashboard
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Next.js', 'MongoDB', 'Nodemailer'].map(tech => (
                  <span key={tech} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="https://ngorestro.vercel.app/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
                <ExternalLink size={18} />
                <span>View Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="https://leetcode.com/u/p94vansh/" target="_blank" rel="noopener noreferrer" 
               className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center hover:border-purple-500/50 transition hover:scale-105 cursor-pointer">
              <Award className="mx-auto mb-4 text-yellow-400" size={40} />
              <h3 className="text-3xl font-bold text-white mb-2">1946</h3>
              <p className="text-purple-300">LeetCode Knight</p>
              <p className="text-gray-400 text-sm">Top 4%</p>
            </a>
            
            <a href="https://leetcode.com/u/p94vansh/" target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 text-center hover:border-blue-500/50 transition hover:scale-105 cursor-pointer">
              <Award className="mx-auto mb-4 text-blue-400" size={40} />
              <h3 className="text-3xl font-bold text-white mb-2">Rank 596</h3>
              <p className="text-blue-300">LeetCode Weekly</p>
              <p className="text-gray-400 text-sm">Contest 478</p>
            </a>
            
            <a href="https://www.codechef.com/users/p94vansh" target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 text-center hover:border-orange-500/50 transition hover:scale-105 cursor-pointer">
              <Award className="mx-auto mb-4 text-orange-400" size={40} />
              <h3 className="text-3xl font-bold text-white mb-2">1655</h3>
              <p className="text-orange-300">CodeChef 3-Star</p>
              <p className="text-gray-400 text-sm">Max Rating</p>
            </a>
            
            <a href="https://codeforces.com/profile/vanshgambhir" target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 text-center hover:border-green-500/50 transition hover:scale-105 cursor-pointer">
              <Award className="mx-auto mb-4 text-green-400" size={40} />
              <h3 className="text-3xl font-bold text-white mb-2">Codeforces</h3>
              <p className="text-green-300">View Profile</p>
              <p className="text-gray-400 text-sm">Competitive Programming</p>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Leadership & Experience
            </span>
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <Briefcase className="text-purple-400" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-white">Technical Head, Core Committee</h3>
                    <p className="text-purple-300">Uttaranchal Institute of Technology</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">May 2025 – Present</span>
              </div>
              <p className="text-gray-300">Led development of event websites, optimized registration systems, and coordinated technical teams.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <Briefcase className="text-purple-400" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-white">Technical Associate</h3>
                    <p className="text-purple-300">UU-CSC Club</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">Jan 2024 – Present</span>
              </div>
              <p className="text-gray-300">Conducted workshops on web development and supported college-wide technical events.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <Briefcase className="text-purple-400" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-white">Publication Chair</h3>
                    <p className="text-purple-300">UUIEEESC</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">Jan 2024 – Jan 2025</span>
              </div>
              <p className="text-gray-300">Designed promotional material, drafted official reports, and managed documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="mailto:vanshgambhirag@gmail.com" 
               className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg flex items-center space-x-3 transition transform hover:scale-105">
              <Mail size={24} />
              <span className="font-semibold">Email Me</span>
            </a>
            <a href="https://www.linkedin.com/in/vansh-gambhir-6490692bb/" target="_blank" rel="noopener noreferrer"
               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg flex items-center space-x-3 transition transform hover:scale-105">
              <Linkedin size={24} />
              <span className="font-semibold">LinkedIn</span>
            </a>
            <a href="https://github.com/P94Vansh" target="_blank" rel="noopener noreferrer"
               className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg flex items-center space-x-3 transition transform hover:scale-105">
              <Github size={24} />
              <span className="font-semibold">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2026 Vansh Gambhir. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
