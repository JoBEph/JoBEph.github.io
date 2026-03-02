import { Shield } from 'lucide-react';
import { colors } from '../data/colors';

export const Footer = () => {
  return (
    <footer className="border-t py-8 px-6" style={{ borderColor: colors.borderSecondary }}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-stone-600">
            <Shield className="w-5 h-5" style={{ color: colors.secondary }} />
            <span>JoBEph - Cybersecurity - Frontend Developer</span>
          </div>
          <div className="text-stone-500">
            © 2026 - En formation à Holberton School
          </div>
        </div>
      </div>
    </footer>
  );
};
