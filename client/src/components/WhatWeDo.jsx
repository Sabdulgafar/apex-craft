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
                    <p>we specialize in crafting innovative solutions that drive business growth and improvement. Our team of experts work collaboratively to deliver exceptional results across various industries</p>
                    
                    <cite>Our core services includes;</cite>
                    <ul>
                        <li>Strategic Planning: We help businesses define and achieve their goals through tailored strategies.</li>
                        <li>Operational Efficiency: Our team optimizes processes to enhance productivity and reduce costs.</li>
                        <li>Digital Transformation: We leverage cutting-edge technology to drive business forward.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;