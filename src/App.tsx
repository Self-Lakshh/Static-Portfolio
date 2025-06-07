import React from 'react';
import './index.css'; // Ensure Tailwind is included

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-4 lg:px-8 py-6 flex flex-col gap-6">
        {/* Profile Card Section */}
        <section className="w-full bg-white rounded-lg shadow border border-gray-200 overflow-hidden px-0">
          {/* Cover Photo */}
          <div className="h-40 w-full bg-gradient-to-r from-blue-600 to-purple-600" />
          {/* Profile Info */}
          <div className="px-6 pb-6 -mt-16 relative">
            <div className="flex justify-start">
              <div className="w-24 h-24 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center">
                {/* User Icon Placeholder */}
                <span className="h-12 w-12 text-gray-600">👤</span>
              </div>
            </div>
            <div className="text-left mt-4">
              <h1 className="text-lg font-semibold text-gray-900">Alex Johnson</h1>
              <p className="text-sm text-gray-600 mt-1">Senior Frontend Developer at TechCorp</p>
              <p className="text-xs text-gray-500 mt-1">San Francisco, California</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Connections</span>
                <span className="text-blue-600 font-semibold">500+</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Connect with Alex to unlock</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-600">Access exclusive tools & insights</p>
              <button className="text-xs text-amber-600 font-semibold mt-1 hover:underline">
                Try Premium for free
              </button>
            </div>
          </div>
        </section>
        {/* Recent Activity Section */}
        <section className="w-full bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Recent</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="h-4 w-4 text-gray-500">👥</span>
              <span className="text-sm text-gray-700">React Developers Network</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="h-4 w-4 text-gray-500">👥</span>
              <span className="text-sm text-gray-700">Frontend Development</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="h-4 w-4 text-gray-500">👥</span>
              <span className="text-sm text-gray-700">JavaScript Community</span>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section className="w-full bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            Passionate Frontend Developer with 5+ years of experience building scalable web applications.
            Specialized in React, TypeScript, and modern JavaScript frameworks. Love creating intuitive user
            experiences and writing clean, maintainable code. Always eager to learn new technologies and
            contribute to innovative projects.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Currently focused on building accessible, performant web applications with a strong emphasis on
            user experience design and modern development practices.
          </p>
        </section>
        {/* Activity Section */}
        <section className="w-full bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Activity</h2>
            <span className="text-sm text-blue-600 hover:underline cursor-pointer">See all activity</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">500+ followers</p>

          {/* Recent Post */}
          <div className="border-b border-gray-200 pb-4">
            <p className="text-sm text-gray-700 mb-2">Alex posted this • 2d</p>
            <p className="text-gray-900 mb-3">
              Just finished building a new React component library with TypeScript!
              The developer experience improvements are incredible. 🚀
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <button className="hover:text-blue-600">👍 Like</button>
              <button className="hover:text-blue-600">💬 Comment</button>
              <button className="hover:text-blue-600">🔄 Share</button>
            </div>
          </div>
        </section>
        {/* Experience Section */}
        <section className="w-full bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
            <button className="text-gray-400 hover:text-gray-600">
              {/* Settings Icon Placeholder */}
              <span className="h-5 w-5">⚙️</span>
            </button>
          </div>

          {/* Experience Item 1 */}
          <div className="flex space-x-4 mb-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-semibold text-sm">TC</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Senior Frontend Developer</h3>
              <p className="text-gray-600">TechCorp • Full-time</p>
              <p className="text-sm text-gray-500">Jan 2022 - Present • 2 yrs</p>
              <p className="text-sm text-gray-500">San Francisco, California</p>
              <p className="text-gray-700 mt-2">
                Lead frontend development for enterprise applications serving 100k+ users.
                Built scalable React applications with TypeScript, implemented design systems,
                and mentored junior developers.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">TypeScript</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Next.js</span>
              </div>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="flex space-x-4 border-t border-gray-200 pt-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white font-semibold text-sm">WS</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Frontend Developer</h3>
              <p className="text-gray-600">WebSolutions Inc • Full-time</p>
              <p className="text-sm text-gray-500">Mar 2020 - Dec 2021 • 1 yr 10 mos</p>
              <p className="text-sm text-gray-500">New York, New York</p>
              <p className="text-gray-700 mt-2">
                Developed responsive web applications using React and modern JavaScript.
                Collaborated with design teams to implement pixel-perfect UIs and improved
                application performance by 40%.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">JavaScript</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">CSS</span>
              </div>
            </div>
          </div>
        </section>
        {/* Education Section */}
        <section className="w-full bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Education</h2>
            <button className="text-gray-400 hover:text-gray-600">
              {/* Settings Icon Placeholder */}
              <span className="h-5 w-5">⚙️</span>
            </button>
          </div>

          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-semibold text-sm">UC</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">University of California</h3>
              <p className="text-gray-600">Bachelor of Science, Computer Science</p>
              <p className="text-sm text-gray-500">2016 - 2020</p>
              <p className="text-gray-700 mt-2">
                Focused on software engineering, data structures, and web development.
                Graduated Magna Cum Laude with a 3.8 GPA.
              </p>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section className="w-full bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
            <button className="text-gray-400 hover:text-gray-600">
              {/* Settings Icon Placeholder */}
              <span className="h-5 w-5">⚙️</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">React</h4>
              <p className="text-sm text-gray-600">5+ years experience</p>
              <p className="text-sm text-gray-500 mt-1">Endorsed by 15 colleagues</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">TypeScript</h4>
              <p className="text-sm text-gray-600">3+ years experience</p>
              <p className="text-sm text-gray-500 mt-1">Endorsed by 12 colleagues</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">JavaScript</h4>
              <p className="text-sm text-gray-600">6+ years experience</p>
              <p className="text-sm text-gray-500 mt-1">Endorsed by 20 colleagues</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Frontend Development</h4>
              <p className="text-sm text-gray-600">5+ years experience</p>
              <p className="text-sm text-gray-500 mt-1">Endorsed by 18 colleagues</p>
            </div>
          </div>
        </section>
        {/* People Also Viewed Section */}
        <section className="w-full bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">People also viewed</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="h-5 w-5 text-gray-600">👤</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Sarah Chen</p>
                <p className="text-xs text-gray-600">UX Designer at Google</p>
                <button className="text-xs text-blue-600 hover:underline mt-1">Connect</button>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="h-5 w-5 text-gray-600">👤</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Mike Rodriguez</p>
                <p className="text-xs text-gray-600">Full Stack Developer</p>
                <button className="text-xs text-blue-600 hover:underline mt-1">Connect</button>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="h-5 w-5 text-gray-600">👤</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Emily Davis</p>
                <p className="text-xs text-gray-600">Product Manager at Meta</p>
                <button className="text-xs text-blue-600 hover:underline mt-1">Connect</button>
              </div>
            </div>
          </div>
        </section>
        {/* People You May Know Section */}
        <section className="w-full bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">People you may know</h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="h-8 w-8 text-gray-600">👤</span>
              </div>
              <p className="text-sm font-semibold text-gray-900">David Kim</p>
              <p className="text-xs text-gray-600 mb-2">Software Engineer at Apple</p>
              <button className="px-4 py-1 border border-blue-600 text-blue-600 text-xs rounded-full hover:bg-blue-50">
                Connect
              </button>
            </div>
          </div>
        </section>
        {/* Contact Info Section */}
        <section className="w-full bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="h-4 w-4 text-gray-500">✉️</span>
              <span className="text-sm text-gray-700">alex.johnson@email.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="h-4 w-4 text-gray-500">🔗</span>
              <span className="text-sm text-gray-700">linkedin.com/in/alexjohnson</span>
            </div>
          </div>
        </section>
        {/* LinkedIn Learning Section */}
        <section className="w-full bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Add to your feed</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-semibold text-xs">JS</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">JavaScript</p>
                <p className="text-xs text-gray-600 mb-2">Company • Programming</p>
                <button className="px-3 py-1 border border-gray-300 text-gray-700 text-xs rounded-full hover:bg-gray-50">
                  + Follow
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
