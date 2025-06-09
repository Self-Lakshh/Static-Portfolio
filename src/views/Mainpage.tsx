import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCheckCircle, FaGithub, FaLinkedin, FaTwitter, FaExternalLinkAlt } from 'react-icons/fa';
import { FiEdit2, FiPlus } from 'react-icons/fi';
import AddEducation from '../components/Modals/AddEducation';
import AddExperience from '../components/Modals/AddExperience';
import AddLicense from '../components/Modals/AddLicense';
import AddProject from '../components/Modals/AddProject';
import AddVolunteering from '../components/Modals/AddVolunteering';
import Auth from '../components/Auth/Auth';
import '../index.css';

// DescriptionWithClamp: Expandable/collapsible description with line clamp and 'See more/less'
const DescriptionWithClamp = ({ text, className = '' }) => {
    const [expanded, setExpanded] = useState(false);
    const charLimit = 80;
    const shouldClamp = text.length > charLimit;
    return (
        <div className={className + ' relative'}>
            {!expanded ? (
                <div className={shouldClamp ? 'line-clamp-1 text-gray-800' : 'text-gray-800'} style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
                    {text}
                    {shouldClamp && (
                        <span
                            className="absolute bottom-0 right-0 bg-white text-gray-500 text-sm pl-1 cursor-pointer hover:underline"
                            onClick={() => setExpanded(true)}
                        >
                            See more
                        </span>
                    )}
                </div>
            ) : (
                <div className="text-gray-800" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
                    <p>{text}</p>
                    <button
                        className="text-gray-600 hover:underline text-sm mt-2"
                        onClick={() => setExpanded(false)}
                    >
                        See less
                    </button>
                </div>
            )}
        </div>
    );
};

const Mainpage = () => {
    // About section expand/collapse
    const [aboutExpanded, setAboutExpanded] = useState(false);
    const aboutFull = `AI/ML enthusiast mastering Python, TensorFlow, and Scikit-learn while pursuing MCA from SPSU, Udaipur. Proficient in web development with HTML5, CSS, Bootstrap, and JavaScript. Published author on “AI applications” in mathematics and “Machine learning for school dropout prediction”. Eager to apply skills in AI/ML to real-world projects.`;

    // Modal states
    const [showAddExperience, setShowAddExperience] = useState(false);
    const [showAddEducation, setShowAddEducation] = useState(false);
    const [showAddLicense, setShowAddLicense] = useState(false);
    const [showAddProject, setShowAddProject] = useState(false);
    const [showAddVolunteering, setShowAddVolunteering] = useState(false);

    // Initialize AOS (Animate On Scroll)
    useEffect(() => {
        AOS.init({ once: true, duration: 700, offset: 40 });
    });

    return (
        <div className="min-h-screen bg-gray-100" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
                {/* ========================= */}
                {/* Profile Card Section */}
                {/* ========================= */}
                <section
                    className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden px-0"
                    data-aos="fade-up"
                >
                    {/* Banner */}
                    <div className="relative w-full aspect-[4/1] bg-gray-100 sm:min-h-0">
                        <img
                            src="/assets/banner.jpeg"
                            alt="Profile Banner"
                            className="absolute inset-0 w-full h-full object-contain"
                        />
                        <div className="absolute bottom-0 left-6 translate-y-1/2 flex items-end gap-4">
                            <img
                                src="/assets/pfp.jpg"
                                alt="Profile"
                                className="w-24 h-24 sm:w-36 sm:h-36 rounded-full border-4 border-white object-cover shadow-md bg-white"
                            />
                        </div>
                    </div>

                    {/* Verified Badge below banner, aligned to pfp */}
                    <div className="flex items-center justify-end pr-6 mt-4">
                        <span className="inline-flex items-center bg-gray-100 text-gray-800 text-sm sm:text-base px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-gray-300 shadow-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <FaCheckCircle className="text-blue-500 mr-1 w-4 h-4 sm:w-5 sm:h-5" aria-label="Verified" /> Verified profile
                        </span>
                    </div>

                    {/* Profile Info */}
                    <div className="pt-8 sm:pt-12 px-6 pb-6 relative">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2 flex-wrap" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    Naman Jain
                                    <FaCheckCircle className="text-blue-500 w-5 h-5" aria-label="Verified" />
                                    <span className="text-sm sm:text-base text-gray-500 font-normal ml-1">He/Him • 1st</span>
                                </h1>
                                <p className="text-base sm:text-lg text-gray-700 mt-1 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    Full Stack Developer @Edulyst Ventures Pvt. LTD. | Developer of Sports ERP 1.0 @SPSU | Web + AI/ML Intern @Code Clause | Nexio Dev Group | Harnessing AI For impact
                                </p>
                            </div>
                            {/* Social Icons */}
                            <div className="flex flex-col sm:items-end gap-2 mt-4 sm:mt-0">
                                <div className="flex space-x-4 text-gray-500 hover:text-gray-700">
                                    <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-black transition">
                                        <FaGithub className="w-6 h-6" />
                                    </a>
                                    <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition">
                                        <FaLinkedin className="w-6 h-6" />
                                    </a>
                                    <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-sky-400 transition">
                                        <FaTwitter className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========================= */}
                {/* About Section */}
                {/* ========================= */}
                <section className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6" data-aos="fade-up">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-semibold text-gray-900">About</h2>
                        <FiEdit2 className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" aria-label="Edit About" />
                    </div>
                    <div className="text-gray-800 leading-relaxed relative">
                        {!aboutExpanded ? (
                            <div className="line-clamp-2 text-gray-600 relative">
                                {aboutFull}
                                <span
                                    className="absolute bottom-0 right-0 bg-white text-gray-500 text-sm pl-1 cursor-pointer hover:underline"
                                    onClick={() => setAboutExpanded(true)}
                                >
                                    See more
                                </span>
                            </div>
                        ) : (
                            <div className="text-gray-600">
                                <p>{aboutFull}</p>
                                <button
                                    className="text-gray-600 hover:underline text-sm mt-2"
                                    onClick={() => setAboutExpanded(false)}
                                >
                                    See less
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* ========================= */}
                {/* Experience Section */}
                {/* ========================= */}
                <section className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6" data-aos="fade-up">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
                        <div className="flex items-center gap-3">
                            <FiEdit2 className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" aria-label="Edit Experience" />
                            <button
                                className="rounded-full p-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-500 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-gray-300"
                                aria-label="Add Experience"
                                onClick={() => setShowAddExperience(true)}
                                type="button"
                            >
                                <FiPlus className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Experience Item 1 */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 flex items-center justify-center rounded bg-white border overflow-hidden">
                            <img src="/assets/edulyst.jpeg" alt="Edulyst Ventures" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-0.5 font-sans">Full Stack Developer</h3>
                            <div className="text-gray-700 text-sm sm:text-base mb-0.5 font-sans">Edulyst Ventures Pvt Ltd. • Full-time</div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-0.5 font-sans">Apr 2025 - Present</div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-0.5 font-sans">Gurugram, Haryana, India · On-site</div>
                            <div className="flex flex-wrap gap-2 mt-2 mb-1">
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded font-sans">React.js</span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded font-sans">Laravel</span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded font-sans">+4 skills</span>
                            </div>
                        </div>
                    </div>
                    <hr className="mb-6 border-gray-200" />

                    {/* Experience Item 2 */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 flex items-center justify-center rounded bg-white border overflow-hidden">
                            <img src="/assets/spsu.jpeg" alt="SPSU Udaipur" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-0.5 font-sans">Web Developer || University SPORTS ERP</h3>
                            <div className="text-gray-700 text-sm sm:text-base mb-0.5 font-sans">SPSU Udaipur • Internship</div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-0.5 font-sans">Aug 2024 - Jan 2025</div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-0.5 font-sans">Udaipur, Rajasthan, India · On-site</div>
                            <div className="flex flex-wrap gap-2 mt-2 mb-1">
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded font-sans">Team Leadership</span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded font-sans">React.js</span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded font-sans">+3 skills</span>
                            </div>
                        </div>
                    </div>
                    <hr className="mb-6 border-gray-200" />

                    {/* Experience Item 3 */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 flex items-center justify-center rounded bg-white border overflow-hidden">
                            <img src="/assets/codeclause.png" alt="CodeClause" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-0.5 font-sans">Artificial Intelligence Intern</h3>
                            <div className="text-gray-700 text-sm sm:text-base mb-0.5 font-sans">CodeClause • Internship</div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-0.5 font-sans">Jul 2024 - Sep 2024</div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-0.5 font-sans">Pune, Maharashtra, India · Remote</div>
                            <div className="flex flex-wrap gap-2 mt-2 mb-1">
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded font-sans">Python</span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded font-sans">Deep Learning</span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded font-sans">+1 skill</span>
                            </div>
                        </div>
                    </div>
                    <hr className="mb-6 border-gray-200" />

                    {/* Experience Item 4 */}
                    <div className="flex items-start gap-4 mb-2">
                        <div className="w-16 h-16 flex items-center justify-center rounded bg-white border overflow-hidden">
                            <img src="/assets/codeclause.png" alt="CodeClause" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-0.5 font-sans">Web Developer</h3>
                            <div className="text-gray-700 text-sm sm:text-base mb-0.5 font-sans">CodeClause • Internship</div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-0.5 font-sans">Jul 2023 - Aug 2023</div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-0.5 font-sans">Remote</div>
                            <div className="flex flex-wrap gap-2 mt-2 mb-1">
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded font-sans">HTML5</span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded font-sans">JavaScript</span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded font-sans">+2 skills</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AddExperience Modal */}
                <AddExperience isOpen={showAddExperience} onClose={() => setShowAddExperience(false)} />

                {/* ========================= */}
                {/* Education Section */}
                {/* ========================= */}
                <section className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6" data-aos="fade-up">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
                        <div className="flex items-center gap-3">
                            <FiEdit2 className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" aria-label="Edit Education" />
                            <button
                                className="rounded-full p-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-500 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-gray-300"
                                aria-label="Add Education"
                                onClick={() => setShowAddEducation(true)}
                                type="button"
                            >
                                <FiPlus className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Education 1: SPSU */}
                    <div className="flex flex-row items-start gap-4 mb-6">
                        <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-purple-600 rounded">
                            <span className="text-white font-semibold text-sm">SPSU</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 font-sans">SPSU Udaipur</h3>
                            <p className="text-gray-600 font-sans">Master of Computer Applications - MCA, Artificial Intelligence</p>
                            <p className="text-sm text-gray-500 font-sans">Jul 2023 - Jun 2025</p>
                            <p className="text-sm text-gray-500 font-sans">Grade: 8.621 CGPA</p>
                            <p className="text-sm text-gray-500 font-sans">Activities and societies: IOT Club</p>
                            <DescriptionWithClamp text="Artificial Intelligence (AI), Machine Learning and +3 skills" className="mt-2" />
                        </div>
                    </div>

                    <hr className="mb-6 border-gray-200" />

                    {/* Education 2: MLSU */}
                    <div className="flex flex-row items-start gap-4 mb-6">
                        <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white rounded border">
                            <img src="/images/mlsu.png" alt="Mohanlal Sukhadia University" className="w-16 h-16 rounded object-contain" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 font-sans">Mohanlal Sukhadia University</h3>
                            <p className="text-gray-600 font-sans">Bachelor's degree, Computer Applications</p>
                            <p className="text-sm text-gray-500 font-sans">Apr 2020 - Jun 2023</p>
                            <p className="text-sm text-gray-500 font-sans">Grade: 8.31 CGPA</p>
                            <DescriptionWithClamp text="Web Development" className="mt-2" />
                            <div className="flex flex-row items-start gap-4 mt-2">
                                <div className="rounded-lg overflow-hidden border w-40">
                                    <img src="/images/award-bca.jpg" alt="Award For 1st In BCA" className="w-full h-24 object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-base mb-0.5 font-sans">Award For 1st In BCA</h4>
                                    <DescriptionWithClamp text="I was Awarded for For achieving 1st rank in J.R. Sharma P.G. College by Pacific University." />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education 3: Add if required */}
                </section>

                {/* ========================= */}
                {/* Licenses & Certifications Section */}
                {/* ========================= */}
                <section className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6" data-aos="fade-up">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Licenses & Certifications</h2>
                        <div className="flex items-center gap-3">
                            <FiEdit2 className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" aria-label="Edit Licenses & Certifications" />
                            <button
                                className="rounded-full p-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-500 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-gray-300"
                                aria-label="Add License or Certification"
                                onClick={() => setShowAddLicense(true)}
                                type="button"
                            >
                                <FiPlus className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Certificate 1 */}
                    <div className="flex flex-row gap-4 mb-6 items-start">
                        <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-black rounded">
                            <img src="/images/hackerrank.png" alt="HackerRank" className="w-10 h-10 object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-0.5 leading-tight">JavaScript (Intermediate)</h3>
                            <div className="text-gray-700 text-sm sm:text-base mb-0.5 font-medium">HackerRank</div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-0.5">Issued Nov 2024</div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-2">Credential ID <span className="break-all font-mono">e9a9bc8ae963</span></div>
                            <DescriptionWithClamp text="Credential for JavaScript (Intermediate) assessment by HackerRank." />
                            <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 text-sm sm:text-base border border-gray-300 rounded-full bg-gray-50 hover:bg-gray-100 text-blue-600 font-medium mt-3 mb-2 gap-2">
                                Show credential
                                <FaExternalLinkAlt className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </div>

                    <hr className="sm:my-4 my-3 border-gray-200" />

                    {/* Certificate 2 */}
                    <div className="flex flex-row gap-4 mb-2 items-start">
                        <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-white rounded border">
                            <img src="/images/testdome.png" alt="TestDome" className="w-10 h-10 object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-0.5 leading-tight">Software Engineering Assessment Test</h3>
                            <div className="text-gray-700 text-sm sm:text-base mb-0.5 font-medium">TestDome</div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-0.5">Issued Oct 2024</div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-2 break-all">Credential ID <a href="https://www.testdome.com/certificates/c5b8b4a919b140f5879391f86811c85e" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">www.testdome.com/certificates/c5b8b4a919b140f5879391f86811c85e</a></div>
                            <DescriptionWithClamp text="Credential for Software Engineering Assessment Test by TestDome." />
                            <a href="https://www.testdome.com/certificates/c5b8b4a919b140f5879391f86811c85e" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 text-sm sm:text-base border border-gray-300 rounded-full bg-gray-50 hover:bg-gray-100 text-blue-600 font-medium mt-3 mb-2 gap-2">
                                Show credential
                                <FaExternalLinkAlt className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* AddLicense Modal */}
                <AddLicense isOpen={showAddLicense} onClose={() => setShowAddLicense(false)} />

                {/* ========================= */}
                {/* Projects Section */}
                {/* ========================= */}
                <section className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6" data-aos="fade-up">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Projects</h2>
                        <div className="flex items-center gap-3">
                            <FiEdit2 className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" aria-label="Edit Projects" />
                            <button
                                className="rounded-full p-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-500 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-gray-300"
                                aria-label="Add Project"
                                onClick={() => setShowAddProject(true)}
                                type="button"
                            >
                                <FiPlus className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Project 1 */}
                    <div className="mb-10 group transition-all">
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                                <h3 className="text-lg font-semibold text-gray-900 font-sans">
                                    SPSU SPORTS ERP <span className="font-normal text-gray-500">(Live Project)</span>
                                </h3>
                                <span className="text-sm sm:text-base text-gray-500 font-sans">Aug 2024 – Present</span>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-500 font-medium mb-1 font-sans">Associated with SPSU Udaipur</p>
                            <div className="text-gray-700 text-sm sm:text-base font-medium mb-1 font-sans">Used by over 250+ users</div>
                            <DescriptionWithClamp text="We developed a comprehensive Sports ERP system designed to automate requests, efficiently track inventory, and manage overdue items. This innovative solution offers cost-effective services that streamline operations, saving valuable time and improving decision-making processes." className="mb-3" />
                            <div className="flex-shrink-0 flex items-center justify-center w-40 h-24 bg-white rounded-lg border">
                                <img src="/images/spsu-erp-thumbnail.png" alt="SPSU SPORTS ERP" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                    <hr className="my-4 border-gray-200" />

                    {/* Project 2 */}
                    <div className="mb-10 group transition-all">
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                                <h3 className="text-lg font-semibold text-gray-900 font-sans">HandFlow</h3>
                                <span className="text-sm sm:text-base text-gray-500 font-sans">Mar 2024 – Present</span>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-500 mb-1 font-sans">Associated with SPSU Udaipur</p>
                            <DescriptionWithClamp text="Implemented a real-time hand gesture recognition system for home automation, utilizing an ESP32 microcontroller and a custom model 'HandFlow' based on Google MediaPipe. User control electronic devices through gestures via a web interface, with signals transmitted to Firebase and actions executed by the ESP32." className="mb-3" />
                            <div className="flex-shrink-0 flex items-center justify-center w-40 h-24 bg-white rounded-lg border">
                                <img src="/images/project2.jpg" alt="HandFlow" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* AddProject Modal */}
                <AddProject isOpen={showAddProject} onClose={() => setShowAddProject(false)} />

                {/* ========================= */}
                {/* Volunteering Section */}
                {/* ========================= */}
                <section className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6" data-aos="fade-up">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Volunteering</h2>
                        <div className="flex items-center gap-3">
                            <FiEdit2 className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" aria-label="Edit Volunteering" />
                            <button
                                className="rounded-full p-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-500 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-gray-300"
                                aria-label="Add Volunteering"
                                onClick={() => setShowAddVolunteering(true)}
                                type="button"
                            >
                                <FiPlus className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Volunteering Item 1 */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-white rounded border">
                            <img src="/images/gdg.png" alt="GDG Udaipur" className="w-8 h-8 object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-0.5 font-sans">Member</h3>
                            <div className="text-gray-700 text-sm sm:text-base mb-0.5 font-sans">Google Developers Group Udaipur</div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-0.5 font-sans">Aug 2024 - Present · 11 mos</div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-1 font-sans">Science and Technology</div>
                        </div>
                    </div>
                    <hr className="my-2 border-gray-200" />
                    {/* Volunteering Item 2 */}
                    <div className="flex items-start gap-4 mb-2">
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-white rounded border">
                            <img src="/images/sih.png" alt="Smart India Hackathon" className="w-8 h-8 object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-0.5 font-sans">Project Team Lead</h3>
                            <div className="text-gray-700 text-sm sm:text-base mb-0.5 font-sans">Smart India Hackathon</div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-0.5 font-sans">Sep 2023 - Dec 2023 · 4 mos</div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-1 font-sans">Science and Technology</div>
                            <DescriptionWithClamp text="Participated in the smart India hackathon 2023 and successfully completed the internal hackathon." className="mt-2" />
                        </div>
                    </div>
                </section>

                {/* AddVolunteering Modal */}
                <AddVolunteering isOpen={showAddVolunteering} onClose={() => setShowAddVolunteering(false)} />
            </div>
        </div>
    );
};

export default Mainpage;
