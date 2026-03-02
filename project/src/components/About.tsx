import { Shield, Code2, Lock } from 'lucide-react';
import { colors } from '../data/colors';

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-stone-100/60">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Approche & Objectifs
          </h2>
        </div>
        <div className="bg-white/80 backdrop-blur border rounded-2xl p-8 md:p-12" style={{ borderColor: colors.borderSecondary }}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto" style={{ backgroundColor: colors.bgPrimaryLight }}>
                <Shield className="w-8 h-8" style={{ color: colors.primary }} />
              </div>
              <h3 className="text-xl font-bold text-stone-900">Analyse détaillée</h3>
              <p className="text-stone-600">
                Approche méticuleuse de l'analyse de sécurité et identification des vulnérabilités
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto" style={{ backgroundColor: colors.bgSecondaryLight }}>
                <Code2 className="w-8 h-8" style={{ color: colors.secondary }} />
              </div>
              <h3 className="text-xl font-bold text-stone-900">Code de qualité</h3>
              <p className="text-stone-600">
                Focus sur la qualité du code et le durcissement des systèmes
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto" style={{ backgroundColor: colors.bgPrimaryLight }}>
                <Lock className="w-8 h-8" style={{ color: colors.primary }} />
              </div>
              <h3 className="text-xl font-bold text-stone-900">Sécurité intégrée</h3>
              <p className="text-stone-600">
                Engagement envers les meilleures pratiques de développement sécurisé
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
