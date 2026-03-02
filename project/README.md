# Landing Page Personnelle - JoBEph

Portfolio moderne et sécurisé d'un développeur cybersécurité, construit avec React, TypeScript, et Tailwind CSS.

## 🚀 Technologies

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend**: Supabase (gestion des contacts)
- **Linting**: ESLint

## 📁 Structure du projet

```
project/
├── src/
│   ├── components/          # Composants React réutilisables
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── config/             # Configuration (Supabase)
│   │   └── supabase.ts
│   ├── data/               # Données statiques
│   │   ├── colors.ts
│   │   ├── skills.ts
│   │   ├── socialLinks.ts
│   │   └── projects.ts
│   ├── hooks/              # Hooks personnalisés
│   │   └── useContactForm.ts
│   ├── types/              # Types TypeScript
│   │   └── index.ts
│   ├── App.tsx             # Composant principal
│   ├── main.tsx            # Point d'entrée
│   └── index.css           # Styles globaux
├── supabase/
│   └── migrations/         # Migrations de base de données
└── package.json
```

## ⚙️ Installation

1. **Cloner le dépôt**
   ```bash
   git clone <votre-repo>
   cd project
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   
   Créer un fichier `.env` à la racine:
   ```bash
   cp .env.example .env
   ```
   
   Remplir avec vos identifiants Supabase.

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

5. **Accéder à l'application**
   
   Ouvrir [http://localhost:5173](http://localhost:5173)

## 🛠️ Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run typecheck` - Vérifie les types TypeScript

## 🗄️ Configuration Supabase

### Créer une table contacts

```sql
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  organization TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);
```

La migration est disponible dans `supabase/migrations/`.

## 🎨 Personnalisation

### Couleurs

Modifier les couleurs dans [src/data/colors.ts](src/data/colors.ts):
```typescript
export const colors = {
  primary: '#004aad',      // Bleu principal
  secondary: '#cb6ce6',    // Violet secondaire
  // ...
};
```

### Compétences

Modifier les compétences dans [src/data/skills.ts](src/data/skills.ts).

### Projets

Modifier les projets dans [src/data/projects.ts](src/data/projects.ts).

### Liens sociaux

Modifier les liens dans [src/data/socialLinks.ts](src/data/socialLinks.ts).

## 📝 Composants

### Architecture modulaire

Chaque section de la page est un composant indépendant:

- **Header**: Navigation fixe avec liens d'ancrage
- **Hero**: Section d'introduction avec présentation
- **Skills**: Grille de compétences techniques
- **Projects**: Présentation des projets
- **About**: Approche et objectifs
- **Contact**: Formulaire de contact avec intégration Supabase
- **Footer**: Pied de page avec copyright

### Hook personnalisé

`useContactForm` gère la logique du formulaire de contact:
- Validation des données
- Soumission à Supabase
- Gestion des états de chargement et messages

## 🚢 Déploiement

### Vercel (recommandé)

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

## 📄 Licence

Tous droits réservés © 2024 JoBEph

## 👤 Contact

- **GitHub**: [@JoBEph](https://github.com/JoBEph)
- **LinkedIn**: [Votre profil](https://linkedin.com)
- **Email**: Via le formulaire de contact

---

**Note**: Ce portfolio met en avant une expertise en cybersécurité et développement sécurisé. Le code suit les meilleures pratiques de sécurité web.
