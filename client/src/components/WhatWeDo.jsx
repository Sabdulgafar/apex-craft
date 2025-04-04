import avatar from '../components/imgs/img3.png';

const WhatWeDo = () =>{
    return(
        <div className="Container-fluid whatwedo">
            <h1 className="section-titles">What We Do</h1>
            <hr />
            <br />
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src={avatar} alt='avatar' className="avatar"/>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 textside">
                    <h2>Here at <span className='apexcraft'>ApexCraft</span></h2>
                    <p>Our strength lies in understanding our client’s unique training needs and organisational contexts, enabling us to create impactful learning experiences that drive growth and achieve their objectives.</p>
                    
                    <cite>Our core services includes;</cite>
                    <ul>
                        <li>Innovative Methods: We help our clients define and achieve their goals using innovative methods</li>
                        <li>Hands-on Experience: Our team relies on hands-on experience to enhance productivity and efficiency.</li>
                        <li>Bespoke: We define tailored support and service deliver for clients improving goal achievement</li>
                    </ul>
                    
                    <a href='/' className="btn btn-dark">Contact Us</a>
                    <span className='spacer'></span>
                    <a href="/" className="btn btn-outline-dark">Find Out More</a>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;