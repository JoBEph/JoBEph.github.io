import { Header, Hero, Skills, Projects, About, Contact, Footer } from './components';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-[#f3ede3] to-emerald-100">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
