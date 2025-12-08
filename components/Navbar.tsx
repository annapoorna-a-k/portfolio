export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm py-4 px-8 flex justify-between items-center fixed top-0 left-0">
      <h2 className="text-xl font-bold">Annapoorna</h2>

      <div className="flex gap-6">
        <a href="#about" className="hover:underline">About</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
