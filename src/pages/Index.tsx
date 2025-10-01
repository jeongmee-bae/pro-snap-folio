import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Experience from '@/components/portfolio/Experience';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Awards from '@/components/portfolio/Awards';
import Contact from '@/components/portfolio/Contact';
import LoadingScreen from '@/components/portfolio/LoadingScreen';
import AdminPanel from '@/components/portfolio/AdminPanel';
import { PortfolioData } from '@/types/portfolio';
import { initialPortfolioData } from '@/data/portfolioData';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [showAdmin, setShowAdmin] = useState(false);
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(initialPortfolioData);

  useEffect(() => {
    // Load data from localStorage if available
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
      try {
        setPortfolioData(JSON.parse(savedData));
      } catch (error) {
        console.error('Failed to parse saved data:', error);
      }
    }
  }, []);

  const handleLogoClick = () => {
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);

    if (newCount === 5) {
      setShowAdmin(true);
      setLogoClickCount(0);
    }
  };

  const handleSaveData = (data: PortfolioData) => {
    setPortfolioData(data);
    localStorage.setItem('portfolioData', JSON.stringify(data));
  };

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          <Header onLogoClick={handleLogoClick} />
          
          <main>
            <Hero 
              name={portfolioData.about.name} 
              tagline={portfolioData.about.tagline} 
            />
            <About data={portfolioData.about} />
            <Experience items={portfolioData.experience} />
            <Skills categories={portfolioData.skills} />
            <Projects projects={portfolioData.projects} />
            <Awards awards={portfolioData.awards} />
            <Contact data={portfolioData.contact} />
          </main>

          <footer className="bg-background border-t border-border py-8">
            <div className="container mx-auto px-6 text-center">
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} {portfolioData.about.name}. All rights reserved.
              </p>
            </div>
          </footer>

          <AdminPanel
            isOpen={showAdmin}
            onClose={() => setShowAdmin(false)}
            data={portfolioData}
            onSave={handleSaveData}
          />
        </motion.div>
      )}
    </>
  );
};

export default Index;
