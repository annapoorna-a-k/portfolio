export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 backdrop-blur-lg bg-white/70 shadow-sm py-4 px-8 flex justify-between items-center z-50">
      <h2 className="text-xl font-bold">Annapoorna</h2>

      <div className="flex gap-6">
        <a href="#home" className="hover:text-blue-600">Home</a>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#skills" className="hover:text-blue-600">Skills</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
}
