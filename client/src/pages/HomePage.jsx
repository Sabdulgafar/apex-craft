import Header from '../components/Header';
import Banner from '../components/Banner';
import BlogSection from '../components/BlogSection';
import AboutUs from '../components/About';
import '../Bootstrap.min.css';
import WhatWeDo from '../components/WhatWeDo';

const HomePage = ()=>{
    return(
        <body>
            <Header />
            <Banner />
            <WhatWeDo />
            <BlogSection />
            <AboutUs />
        </body>
    )
}

export default HomePage;