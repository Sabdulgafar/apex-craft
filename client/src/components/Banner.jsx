import Left from '../components/imgs/Left.png';

const Banner = ()=>{
    return(
        <div className="container-fluid banner">
            <div className="row">
                <div className="col">
                    <img src={Left} alt="corporate" className="corporate-img"></img>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 right">
                    <h1>HERE AT <span className="apexcraft">APEXCRAFT</span></h1>
                    <p>We focus on helping to build your dreams and stay at the top of your goals.<br /> Your dreams, your goals, your ambition is our priority. </p>

                    <button className="btn btn-dark">Contact us</button>
                    <button className="btn btn-outline-dark">Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;