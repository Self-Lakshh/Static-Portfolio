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
            {/* Verified Badge */}
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
                  <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-black transition">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-sky-400 transition">
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
              <p className="text-gray-700 mt-2">
                Assisted in building AI models to predict school dropouts and implemented frontend components for data visualization using React and Chart.js.
              </p>
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

        {/* Project Section */}
        <section className="bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
            <FiEdit2 className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
          </div>

          {/* Project 1 */}
          <div className="mb-10 group transition-all">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  SPSU SPORTS ERP <span className="font-normal text-gray-500">(Live Project)</span>
                </h3>
                <span className="text-sm text-gray-500">Aug 2024 – Present</span>
              </div>
              <p className="text-xs text-gray-500 font-medium mb-1">Associated with SPSU Udaipur</p>
              <div className="text-gray-700 text-sm font-medium mb-1">Used by over 250+ users</div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                We developed a comprehensive Sports ERP system designed to automate requests,
                efficiently track inventory, and streamline sports event management for SPSU.
                The platform supports real-time updates, analytics, and is actively used by
                students and staff.
              </p>
              <div className="rounded-lg overflow-hidden border w-40">
                <img
                  src="/images/spsu-erp-thumbnail.png"
                  alt="SPSU SPORTS ERP"
                  className="w-40 h-24 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="mb-10 group transition-all">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  School Dropout Prediction Model
                </h3>
                <span className="text-sm text-gray-500">2023</span>
              </div>
              <p className="text-xs text-gray-500 mb-1">Independent Research • Udaipur</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Developed an ML model to predict student dropouts based on academic and
                socio-economic data. Published research and created a dashboard for educators
                to monitor risk.
              </p>
              <div className="rounded-lg overflow-hidden border w-40">
                <img
                  src="/images/project2.jpg"
                  alt="Dropout Dashboard"
                  className="w-40 h-24 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group transition-all">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  AI-Powered Chatbot for Student Queries
                </h3>
                <span className="text-sm text-gray-500">2024</span>
              </div>
              <p className="text-xs text-gray-500 mb-1">Internship Project • Remote</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Created an NLP chatbot that answers student queries about courses,
                admissions, and events, integrated with the institution’s website for 24/7 support.
              </p>
              <div className="rounded-lg overflow-hidden border w-40">
                <img
                  src="/images/project3.jpg"
                  alt="Chatbot"
                  className="w-40 h-24 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default App;
