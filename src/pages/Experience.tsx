import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          My professional journey as a developer, showcasing my work experience and the skills I've gained along the way.
        </p>
        <div className="h-1 w-20 bg-purple-500 mx-auto mt-4"></div>
      </div>

      {/* Timeline wrapper */}
      <div className="relative border-l-2 border-purple-500 pl-8 ml-4 mb-12">
        
        {/* Dot marker */}
        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
          <Briefcase size={14} className="text-white" />
        </div>

        {/* Internship #1 */}
        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-xl mb-12">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-purple-300">Fullstack Developer</h2>
            <div className="flex items-center text-gray-400 mt-2 sm:mt-0">
              <Calendar size={16} className="mr-1" />
              <span>May 2024 - October 2024 (6 Months)</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2">Firsthope</h3>
          <p className="text-gray-300 mb-6">
            During this internship, I worked on the company website to improve user experience and 
            played a crucial role in the company's new projects. Built the foundation of new projects by 
            writing frontend and backend code to create fully functional APIs with clean coding practices.
          </p>

          <h4 className="text-lg font-semibold mb-3 text-purple-300">Responsibilities:</h4>
          <ul className="space-y-2">
            {[
              'Developed and maintained responsive web applications using React',
              'Created RESTful APIs using Node.js and Express',
              'Implemented database solutions with MongoDB',
              'Collaborated with the design team to implement UI/UX improvements',
              'Participated in code reviews and provided constructive feedback',
              'Optimized application performance and fixed bugs',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle size={18} className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Internship #2 - NEW */}
        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-xl mb-12">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-purple-300"> Full Stack Developer </h2>
            <div className="flex items-center text-gray-400 mt-2 sm:mt-0">
              <Calendar size={16} className="mr-1" />
              <span>Nov 2024 - Present</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2">PM Creators</h3>
          <p className="text-gray-300 mb-6">
            In this ongoing internship, I am contributing to the development of scalable web and Internal using tools . Which help to reduce company bill and improve efficiency of work. Company help me and encourage to learn Gen AI for better productive
          </p>

          <h4 className="text-lg font-semibold mb-3 text-purple-300">Responsibilities:</h4>
          <ul className="space-y-2">
            {[
              'Designed and implemented new features for web applications',
              'Build internal tools which help to mange work ',
              'Integrated AI/ML components into existing workflows',
              'Collaborated with cross-functional teams in Agile sprints',
              'Documented technical solutions ',
              'Develop a website for company clients ',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle size={18} className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills section (same as before) */}
        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-purple-300 mb-6">Skills Gained</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">Technical Skills</h3>
              <ul className="space-y-2">
                {[
                  'Frontend Development with React',
                  'Backend Development with Node.js and Express',
                  'Database Management with MongoDB and many more',
                  'Gen AI development and Project building ',
                  'RESTful API Development',
                  'Version Control with Git, Deployment ',
                  'Responsive Web Design and website ',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">Soft Skills</h3>
              <ul className="space-y-2">
                {[
                  'Team Collaboration',
                  'Problem Solving',
                  'Time Management',
                  'Communication',
                  'Adaptability',
                  'Attention to Detail',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
