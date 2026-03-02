import { colors } from '../data/colors';

export const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 flex items-center">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <p className="text-sm tracking-widest uppercase" style={{ color: colors.secondary }}>
            Cybersecurity - Frontend Developer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 leading-tight">
            <span className="block text-transparent bg-clip-text font-bold" style={{
              backgroundImage: colors.gradientPrimarySecondary
            }}>
              Cybersecurity
            </span>
            <span className="block">Frontend Developer</span>
          </h1>
          <p className="text-xl text-stone-700 leading-relaxed">
            Étudiant en cybersécurité à <span className="font-semibold" style={{ color: colors.secondary }}>Holberton School</span>,
            je combine <span className="font-semibold" style={{ color: colors.primary }}>développement frontend moderne</span> et <span className="font-semibold" style={{ color: colors.secondary }}>sécurité applicative</span> pour créer des solutions robustes et élégantes.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="px-6 py-3 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
              style={{ backgroundColor: colors.primary }}
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
