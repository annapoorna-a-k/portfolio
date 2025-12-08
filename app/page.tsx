export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900 p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Annapoorna 👋</h1>
        <p className="text-lg mb-6">
          A passionate M.Tech in Artificial Intelligence student, interested in Data Analytics,
          Deep Learning, and building intelligent systems.
        </p>

        <div className="flex gap-4 justify-center">
          <a href="#projects" className="underline">Projects</a>
          <a href="https://github.com/annapoorna-a-k" className="underline">GitHub</a>
          <a href="https://linkedin.com" className="underline">LinkedIn</a>
        </div>
      </div>
    </main>
  );
}
