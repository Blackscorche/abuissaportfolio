import RevealOnScroll from '../RevealOnScroll';

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "ScorchePay",
                                description: "A VTU platform By ScorcheTech.",
                                techStack: ["React", "Node.js", "In Progress"],
                                link: "https://scorchenet.vercel.app"
                            },
                            {
                                title: "ScorcheTech Website Builder",
                                description: "A platform where users can order custom-built websites or buy pre-made templates.",
                                techStack: ["React", "Node.js", "Firebase"],
                                link: "scorchetech.vercel.app"
                            },
                            {
                                title: "Eccormerce UI",
                                description: "An ecommerce store consisting mainly of Electronic Products.",
                                techStack: ["React", "Node.js"],
                                link: "https://headphone-store-murex.vercel.app/"
                            },
                            {
                                title: "Weather Searcher",
                                description: "A simple weather app that provides detailed weather information.",
                                techStack: ["React", "Node.js"],
                                link: "https://weather-searcher-beta.vercel.app/"
                            },
                            {
                                title: "My Goals Site",
                                description: "A platform where you can see my goals.",
                                techStack: ["HTML", "CSS"],
                                link: "https://mygoalssite.vercel.app/"
                            }
                        ].map((project, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl border border-white/10 hover:translate-y-0.5 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition text-left"
                            >
                                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>

                                <div className="flex gap-2 mt-4 flex-wrap">
                                    {project.techStack.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center my-4">
                                    <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors">
                                        View Project ➡
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Projects;
