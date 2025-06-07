import { useState } from 'react';
import { FaCheckCircle, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import './index.css';

const App = () => {

  const [aboutExpanded, setAboutExpanded] = useState(false);
  const aboutFull = `AI/ML enthusiast mastering Python, TensorFlow, and Scikit-learn while pursuing MCA from SPSU, Udaipur. Proficient in web development with HTML5, CSS, Bootstrap, and JavaScript. Published author on “AI applications” in mathematics and “Machine learning for school dropout prediction”. Eager to apply skills in AI/ML to real-world projects.`;

  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const descriptionClass = (id) =>
    expandedProject === id
      ? "text-gray-700 text-sm mb-4 max-h-full transition-all duration-300 ease-in-out"
      : "text-gray-700 text-sm mb-4 line-clamp-3 overflow-hidden cursor-pointer";

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">

        {/* Profile Card Section */}
        <section className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden px-0">
          {/* Banner */}
          <div className="relative w-full aspect-[3/1] bg-gray-100">
            <img
              src="/banner.jpeg"
              alt="Profile Banner"
              className="absolute inset-0 w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-6 translate-y-1/2 flex items-end gap-4">
              <img
                src="/pfp.jpg"
                alt="Profile"
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white object-cover shadow-md bg-white"
              />
            </div>
            {/* Verified Badge at far right bottom of banner */}
            <div className="absolute bottom-0 right-6 translate-y-1/2">
              <span className="inline-flex items-center bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full border border-gray-300 shadow-sm">
                <FaCheckCircle className="text-blue-500 mr-1" /> Verified profile
              </span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-16 sm:pt-20 px-6 pb-6 relative">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2 flex-wrap">
                  Naman Jain
                  <FaCheckCircle className="text-blue-500 w-5 h-5" />
                  <span className="text-xs text-gray-500 font-normal ml-1">He/Him • 1st</span>
                </h1>
                <p className="text-sm text-gray-700 mt-1 max-w-xl">
                  Full Stack Developer @Edulyst Ventures Pvt. LTD. | Developer of Sports ERP 1.0 @SPSU | Web + AI/ML Intern @Code Clause | Nexio Dev Group | Harnessing AI For impact
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex flex-col sm:items-end gap-2 mt-4 sm:mt-0">
                <div className="flex space-x-4 text-gray-500 hover:text-gray-700">
                  <a
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-black transition"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-blue-600 transition"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="hover:text-sky-400 transition"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">About</h2>
            <FiEdit2 className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
          </div>
          <div className="text-gray-700 leading-relaxed relative">
            {!aboutExpanded ? (
              <div className="line-clamp-2 text-gray-600 relative">
                {aboutFull}
                <span
                  className="absolute bottom-0 right-0 bg-white text-blue-600 text-sm pl-1 cursor-pointer hover:underline"
                  onClick={() => setAboutExpanded(true)}
                >
                  ...See more
                </span>
              </div>
            ) : (
              <div className="text-gray-600">
                <p>{aboutFull}</p>
                <button
                  className="text-blue-600 hover:underline text-sm mt-2"
                  onClick={() => setAboutExpanded(false)}
                >
                  See less
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
            <FiEdit2 className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
          </div>

          {/* Experience Item 1 */}
          <div className="flex space-x-4 mb-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-semibold text-sm">EV</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Full Stack Developer</h3>
              <p className="text-gray-600">Edulyst Ventures • Full-time</p>
              <p className="text-sm text-gray-500">May 2023 - Present</p>
              <p className="text-sm text-gray-500">Udaipur, Rajasthan (Remote)</p>
              <p className="text-gray-700 mt-2">
                Building and maintaining scalable web applications for education management. Led the development of Sports ERP 1.0 and contributed to AI/ML integration for analytics.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">TypeScript</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Node.js</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">AI/ML</span>
              </div>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="flex space-x-4 mb-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white font-semibold text-sm">CC</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Web + AI/ML Intern</h3>
              <p className="text-gray-600">Code Clause • Internship</p>
              <p className="text-sm text-gray-500">Jan 2023 - Apr 2023</p>
              <p className="text-sm text-gray-500">Remote</p>
              <p className="text-gray-700 mt-2">
                Developed web modules and implemented machine learning models for client projects. Automated data pipelines and contributed to project documentation.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Machine Learning</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Flask</span>
              </div>
            </div>
          </div>

          {/* Experience Item 3 */}
          <div className="flex space-x-4 mb-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-yellow-600 rounded flex items-center justify-center">
                <span className="text-white font-semibold text-sm">SPSU</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Developer, Sports ERP 1.0</h3>
              <p className="text-gray-600">Sir Padampat Singhania University • Project</p>
              <p className="text-sm text-gray-500">Aug 2022 - Dec 2022</p>
              <p className="text-sm text-gray-500">Udaipur, Rajasthan</p>
              <p className="text-gray-700 mt-2">
                Designed and developed the university's first sports ERP system, streamlining event management and analytics for students and staff.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">JavaScript</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Bootstrap</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">MySQL</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Education</h2>
            <FiEdit2 className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
          </div>
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-semibold text-sm">SPSU</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Sir Padampat Singhania University</h3>
              <p className="text-gray-600">Master of Computer Applications (MCA)</p>
              <p className="text-sm text-gray-500">2023 - 2025</p>
              <p className="text-gray-700 mt-2">
                Focused on Artificial Intelligence, Machine Learning, and Full Stack Web Development. Published research on AI applications in mathematics and dropout prediction.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
            <FiEdit2 className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
          </div>

          {/* Project 1 */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
              <h3 className="text-lg font-semibold text-gray-900">
                SPSU SPORTS ERP (Live Project)
              </h3>
              <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                Aug 2024 - Present
              </span>
            </div>
            <p className="text-gray-600 mb-2 italic">Associated with SPSU Udaipur</p>
            <p
              className={descriptionClass(1)}
              onClick={() => toggleExpand(1)}
              aria-expanded={expandedProject === 1}
            >
              Used by Over 250+ users. We developed a comprehensive Sports ERP system
              designed to automate requests, efficiently track inventory, and
              streamline sports event management...
              {expandedProject !== 1 && (
                <span className="text-indigo-600 ml-1 underline cursor-pointer">
                  see more
                </span>
              )}
              {expandedProject === 1 && (
                <span className="text-indigo-600 ml-1 underline cursor-pointer">
                  see less
                </span>
              )}
            </p>
            <img
              src="/images/spsu-erp-thumbnail.png"
              alt="SPSU SPORTS ERP thumbnail"
              className="w-full sm:w-48 h-28 object-cover rounded-md shadow"
              loading="lazy"
            />
          </div>

          {/* Project 2 */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
              <h3 className="text-lg font-semibold text-gray-900">
                AI for Dropout Prediction
              </h3>
              <span className="text-sm text-gray-500 mt-1 sm:mt-0">2023</span>
            </div>
            <p className="text-gray-600 mb-2 italic">Research Project</p>
            <p
              className={descriptionClass(2)}
              onClick={() => toggleExpand(2)}
              aria-expanded={expandedProject === 2}
            >
              Developed and published a machine learning model to predict student
              dropout risk using academic and demographic data...
              {expandedProject !== 2 && (
                <span className="text-indigo-600 ml-1 underline cursor-pointer">
                  see more
                </span>
              )}
              {expandedProject === 2 && (
                <span className="text-indigo-600 ml-1 underline cursor-pointer">
                  see less
                </span>
              )}
            </p>
            <img
              src="/images/ai-dropout.png"
              alt="AI Dropout Prediction thumbnail"
              className="w-full sm:w-48 h-28 object-cover rounded-md shadow"
              loading="lazy"
            />
          </div>

          {/* Project 3 */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
              <h3 className="text-lg font-semibold text-gray-900">
                Nexio Dev Group Website
              </h3>
              <span className="text-sm text-gray-500 mt-1 sm:mt-0">2024</span>
            </div>
            <p className="text-gray-600 mb-2 italic">Open Source</p>
            <p
              className={descriptionClass(3)}
              onClick={() => toggleExpand(3)}
              aria-expanded={expandedProject === 3}
            >
              Built and maintain the official website for Nexio Dev Group,
              featuring member profiles, project showcases, and a blog...
              {expandedProject !== 3 && (
                <span className="text-indigo-600 ml-1 underline cursor-pointer">
                  see more
                </span>
              )}
              {expandedProject === 3 && (
                <span className="text-indigo-600 ml-1 underline cursor-pointer">
                  see less
                </span>
              )}
            </p>
            <img
              src="/images/nexio-website.png"
              alt="Nexio Dev Group Website thumbnail"
              className="w-full sm:w-48 h-28 object-cover rounded-md shadow"
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
