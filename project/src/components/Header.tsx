import { colors } from '../data/colors';

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-stone-50/80 backdrop-blur-md border-b border-stone-200/70 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2" style={{ color: colors.secondary }}>
          <div className="relative w-10 h-10 rounded-full p-[3px]" style={{
            background: colors.gradientPrimarySecondary
          }}>
            <img
              src="/data/githubprofil.png"
              alt="PictureGithub"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <span className="text-xl font-bold">JoBEph</span>
        </div>
        <div className="hidden md:flex gap-8 text-stone-600">
          <a href="#about" className="hover:text-stone-900 transition-colors">À propos</a>
          <a href="#skills" className="hover:text-stone-900 transition-colors">Compétences</a>
          <a href="#projects" className="hover:text-stone-900 transition-colors">Projets</a>
          <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
};
