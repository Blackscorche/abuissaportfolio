import React from 'react';
import RevealOnScroll from '../RevealOnScroll';

function About() {
    const frontendSkills = [
        "HTML",
        "CSS",
        "React Js",
        "TypeScript",
        "TailwindCSS",
        "Bootstrap",
    ];

    const mobileSkills=[
        "React Native",
        "Flutter",
        "KivyMd",
        "Java Android studio"
    ]

    const desktopSkills=[
        "Java Swing",
        "Tkinter",
        "Electron",
        "KivyMd",
    ]

    const backendSkills = [
        "Node.js",
        "Express",
        "MongoDB",
        "GraphQL",
        "MySql"

    ];

    return (
        <section
            id='about'
            className='min-h-screen flex items-center justify-center py-20'
        >
            <RevealOnScroll>

                
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className='text-gray-300 mb-6'>
                            Passionate developer with expertise in building scalable web applications and creating innovative solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Frontend Skills */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend Skills */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Mobile Development</h3>
                                <div className="flex flex-wrap gap-2">
                                    {mobileSkills.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Desktop App Development</h3>
                                <div className="flex flex-wrap gap-2">
                                    {desktopSkills.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        

                    </div>

                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {/* Education Section */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>B.Eng. in Information and Communication Engineering</strong> - Airforce Institute of Technology, Kaduna
                                    <span className="text-gray-400">(Currently Studying)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Work Experience */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>Freelance Full-Stack Developer</strong>
                                    <span className="text-gray-400">(2023 - Present)</span>
                                </li>
                                <li>
                                    Built scalable web applications and provided tailored software solutions for various clients.
                                </li>

                                <li>
                                    <strong>Intern at KADHUB(Kaduna Ict Hub)</strong>
                                    <span className="text-gray-400">(2024 - Present)</span>
                                </li>
                                <li>
                                    Built scalable web applications and provided tailored software solutions for various clients.
                                </li>
                            </ul>
                        </div>

                        {/* Diplomas & Certifications */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">📜 Diplomas & Certifications</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>Diploma in Java Programming</strong>
                                </li>
                                <li>
                                    <strong>Diploma in ICT Fundamentals</strong>
                                </li>
                                <li>
                                    <strong>Diploma in Computer Literacy</strong>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
            </RevealOnScroll>
        </section>
    );
}

export default About;
