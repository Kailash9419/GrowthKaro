import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ServicesSection from '../components/ServicesSection';
import WhyGrowthKaro from '../components/WhyGrowthKaro';
import ProcessSection from '../components/ProcessSection';
import CaseStudiesPreview from '../components/CaseStudiesPreview';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home-page">
            <Hero />
            <Stats />
            <ServicesSection />
            <WhyGrowthKaro />
            <ProcessSection />
            <CaseStudiesPreview />
            <FinalCTA />
        </div>
    );
};

export default Home;
