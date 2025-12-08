import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-8 bg-white text-gray-900">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10" id="home">
        <Image
          src="/images/profile.jpg"
          width={180}
          height={180}
          alt="Profile"
          className="rounded-full shadow-lg"
        />
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600">Annapoorna</span> 👋
          </h1>
          <p className="text-lg mb-6">
            M.Tech AI student passionate about Data Analytics, Deep Learning &
            building intelligent systems that make an impact.
          </p>
          <div className="flex gap-6 justify-center md:justify-start">
            <a href="mailto:akannapoorna94@gmail.com" className="underline">Email</a>
            <a href="https://github.com/annapoorna-a-k" className="underline" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/annapoorna-a-k/" className="underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I am currently pursuing M.Tech in Artificial Intelligence. I enjoy solving
          real-world challenges through data analytics and deep learning innovations.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 text-center bg-gray-100 w-full">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {["Python", "Deep Learning", "TensorFlow", "PyTorch", "React", "Django", "SQL", "Machine Learning"].map(
            (skill) => (
              <span key={skill} className="px-4 py-2 bg-white rounded-lg shadow text-sm">
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 text-center max-w-6xl w-full">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="p-6 shadow-md rounded-xl border bg-white text-left transition-transform duration-300 hover:scale-105">

            <h3 className="text-xl font-bold mb-2">LightsUp – Mental Health Platform</h3>
            <p className="text-sm mb-4">
              Full-stack wellness platform with mood tracking, personalized goals, affirmations & recommendations.
            </p>
            <a
              href="https://github.com/annapoorna-a-k/LightsUp-An-Automated-Mental-Health-Support-Platform-using-Django"
              target="_blank"
              className="text-blue-600 underline"
            >
              View on GitHub →
            </a>
          </div>

          {/* Project 2 */}
          <div className="p-6 shadow-md rounded-xl border bg-white text-left">
            <h3 className="text-xl font-bold mb-2">COVID-19 Detection using CNN</h3>
            <p className="text-sm mb-4">
              CNN model for early COVID-19 diagnosis through chest X-ray image classification.
            </p>
            <a
              href="https://github.com/annapoorna-a-k/COVID-19-DETECTION-using-CNN"
              target="_blank"
              className="text-blue-600 underline"
            >
              View on GitHub →
            </a>
          </div>

          {/* Project 3 */}
          <div className="p-6 shadow-md rounded-xl border bg-white text-left">
            <h3 className="text-xl font-bold mb-2">Spam Email Filtering</h3>
            <p className="text-sm mb-4">
              Email spam detection using Gaussian Naive Bayes for cyber-security enhancement.
            </p>
            <a
              href="https://github.com/annapoorna-a-k/SPAM-EMAIL-FILTERING-Using-Naive-Bayes"
              target="_blank"
              className="text-blue-600 underline"
            >
              View on GitHub →
            </a>
          </div>

          {/* Project 4 */}
          <div className="p-6 shadow-md rounded-xl border bg-white text-left">
            <h3 className="text-xl font-bold mb-2">Guardzilla – Security Robot</h3>
            <p className="text-sm mb-4">
              Raspberry Pi-based robot with face detection, live streaming & intrusion alert system.
            </p>
            <a
              href="https://github.com/annapoorna-a-k/GUARDZILLA-Unauthorized-Access-Averter-using-Raspberry-pi"
              target="_blank"
              className="text-blue-600 underline"
            >
              View on GitHub →
            </a>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center max-w-xl">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-4">Let’s connect and create something amazing!</p>

        <div className="flex gap-6 justify-center">
          <a href="mailto:akannapoorna94@gmail.com" className="underline">Email</a>
          <a href="https://github.com/annapoorna-a-k" className="underline" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/annapoorna-a-k/" className="underline" target="_blank">LinkedIn</a>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full text-center py-6 bg-gray-900 text-white mt-10">
        <p className="text-sm mb-2">© {new Date().getFullYear()} Annapoorna A K</p>

        <a
          href="/files/Resume.pdf"
          download
          className="text-blue-300 underline hover:text-blue-500"
        >
          Download Resume
        </a>
      </footer>

    </main>
  );
}
