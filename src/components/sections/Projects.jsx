import RevealOnScroll from '../RevealOnScroll'

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center">

            <RevealOnScroll>

            
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:translate-y-0.5 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition text-left">
                            <h3 className="text-xl font-bold mb-4">ScorcheTech Website Builder</h3>
                            <p className="text-gray-400 mb-4">A platform where users can order custom-built websites or buy pre-made templates.</p>

                            <div className="flex gap-2 mt-4 flex-wrap">
                                {["React", "Node.js", "Firebase"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className=" flex justify-between items-center my-4">
                                <a href="http://github.com/Blackscorche/ScorcheTechCompany" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    View Projects ➡
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:translate-y-0.5 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition text-left">
                            <h3 className="text-xl font-bold mb-4">Nike Store</h3>
                            <p className="text-gray-400 mb-4">An eccormerce store consisting mainly of nike shoes</p>

                            <div className="flex gap-2 mt-4 flex-wrap">
                                {["React", "Node.js"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className=" flex justify-between items-center my-4">
                                <a href="https://github.com/Blackscorche/NikeCloneWithReact" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    View Projects ➡
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:translate-y-0.5 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition text-left">
                            <h3 className="text-xl font-bold mb-4">Weather Searcher</h3>
                            <p className="text-gray-400 mb-4">A simple weather app that tells you in detail weathers of places you search.</p>

                            <div className="flex gap-2 mt-4 flex-wrap">
                                {["React", "Node.js"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className=" flex justify-between items-center my-4">
                                <a href="https://github.com/Blackscorche/WeatherSearcher" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    View Projects ➡
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:translate-y-0.5 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition text-left">
                            <h3 className="text-xl font-bold mb-4">My Goals site</h3>
                            <p className="text-gray-400 mb-4">A platform where you see my goals.</p>

                            <div className="flex gap-2 mt-4 flex-wrap">
                                {["Html","Css"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className=" flex justify-between items-center my-4">
                                <a href="https://github.com/Blackscorche/MyGoalsSite" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    View Projects ➡
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </RevealOnScroll>
        </section>

    );
};

export default Projects;
