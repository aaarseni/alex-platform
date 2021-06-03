import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import HomepageCards from '../HomepageCards'

function Home () {
    return(
        <>
            <HeroSection />
            {/* <Cards />   */}
            <HomepageCards/>
            <Footer />
        </>
    );
}

export default Home;