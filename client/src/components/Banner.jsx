import Left from '../components/imgs/Left.png';

const Banner = ()=>{
    return(
        <div className="container-fluid banner">
            <div className="row">
                <div className="col">
                    <img src={Left} alt="corporate" className="corporate-img"></img>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 right">
                    <h1>WELCOME TO <span className="apexcraft">APEXCRAFT</span></h1>
                    <p>ApexCraft is a leading training and consultancy firm that specialises in crafting and delivering tailored training courses suited to public and private sector organisations.</p>

                    <button className="btn btn-dark">Contact us</button>
                    <span className='spacer'></span>
                    <button className="btn btn-outline-dark">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;