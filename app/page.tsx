import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-8 bg-white text-gray-900">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10" id="home">

        {/* Profile Photo */}
        <Image
          src="/images/profile.jpg"
          width={180}
          height={180}
          alt="Profile photo"
          className="rounded-full shadow-lg"
        />

        {/* Intro */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600">Annapoorna</span> 👋
          </h1>

          <p className="text-lg mb-6">
            I'm a passionate M.Tech Artificial Intelligence student interested in
            Data Analytics, Deep Learning, and building intelligent systems that make an impact.
          </p>

          <div className="flex gap-6 justify-center md:justify-start">
            <a href="mailto:akannapoorna94@gmail.com" className="underline">Email</a>
            <a href="https://github.com/annapoorna-a-k" className="underline" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/annapoorna-a-k/" className="underline" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

      </section>

    </main>
  );
}
