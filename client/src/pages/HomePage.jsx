import Header from '../components/Header';
import Banner from '../components/Banner';
import BlogSection from '../components/BlogSection';
import '../Bootstrap.min.css';
import WhatWeDo from '../components/WhatWeDo';
import Footer from '../components/Footer';

const HomePage = ()=>{
    return(
        <body>
            <Header />
            <Banner />
            <WhatWeDo />
            <BlogSection />
            <Footer/>
        </body>
    )
}

export default HomePage;