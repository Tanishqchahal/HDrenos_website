import HeroWithSteps from '../components/HeroWithSteps';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import FAQ from '../components/FAQ';
import TestimonialsPage from './TestimonialsPage';

const Home = () => {
  return (
    <>
      <HeroWithSteps />
      <About />
      <Services />
      <Projects />
      <FAQ />
      <TestimonialsPage />
    </>
  );
};

export default Home; 