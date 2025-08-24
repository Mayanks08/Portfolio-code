
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Blog Website',
    description: 'Built a fully functional website in which user can perform many functions. I used React for frontend and Appwrite for backend Service. Text Editor is loaded with features same as Production level Blogging websites.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    technologies: ['React', 'Appwrite', 'Tailwind CSS', 'JavaScript','React Hook Form', 'React Router','UI Kit'],
    liveLink: 'https://blogsiteproject.vercel.app/',
    githubLink: 'https://github.com/Mayanks08/blog-site',
  },
  {
    id: 2,
    title: 'ChatBot Tutor ',
    description: 'Developed an intelligent chatbot to tutor children. Used Gemini API to provide interactive and responsive educational assistance.especially built for school level students to learn python by just asking simple question from AI ',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240514110646/10-AI-Chatbots-for-Educational-Tutoring.webp',
    technologies: ['React', 'Gemini API', 'CSS', 'JavaScript','Python','AI Modelling','DataSets'],
    liveLink: 'https://gregarious-cendol-bffdc3.netlify.app/',
    githubLink: 'https://github.com/Mayanks08/chatbot',
  },
  {
    id: 3,
    title: 'Social-Cube',
    description: 'Social-Cube is an innovative social platform designed to facilitate collaborative language learning experiences. It brings together people from different linguistic backgrounds, allowing them to practice and improve their language skills in an interactive and engaging environment.',
    image: 'https://www.elearningnews.it/_resources/images/articoli/Immagini_OK_512x268/social-media-formazione.jpg',
    technologies: ['React', 'API Integration', 'JavaScript','Tailwind CSS','UI Component','Full stack Development', 'Deployment', 'Websockets','CDN' ],
    liveLink: 'https://social-cube.onrender.com/login',
    githubLink: 'https://github.com/Mayanks08/Social-Cube',
  },
  {
    id: 4,
    title: 'Learning Management system ',
    description: 'This is robust learning management system which is ready to go in production after some changes . In this platform admin panal is present where admin can add , delete the classes or can see how many student enrolled in courses . what is monthly sales or active learner . With Razorpay payment gate way intergeted for subscription base learning which can handke monthly subscription or course acces at one time payment',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQHuIYcN0wkPAw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1697041982516?e=2147483647&v=beta&t=Kslyd1KPGnCz6iAXuhDte9t1gh-1dc3Ub0-hHDZFAQU',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    liveLink: 'https://lms-project-delta-smoky.vercel.app/',
    githubLink: 'https://github.com/Mayanks08/LMS-Project',
  },
];

const Projects = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="section-heading">My Projects</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project represents different skills and technologies I've mastered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-gray-800 bg-opacity-30 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl glow-on-hover card-hover"
          >
            <div className="h-56 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-purple-300">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-gray-700 bg-opacity-50 text-gray-300 px-2 py-1 rounded text-sm transition-all duration-300 hover:bg-purple-700 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  <Github size={16} />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;