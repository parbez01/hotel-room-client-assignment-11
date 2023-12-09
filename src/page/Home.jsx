import Navbar from "../components/Navbar";
import img1 from '../assets/banner1.jpg'
import img2 from '../assets/banner2.jpg'
import img3 from '../assets/banner3.jpg'
import img4 from '../assets/banner4.jpg'
import SpecialOffer from "../HomeDetails/SpecialOffer";
import Location from "../HomeDetails/Location";
import Featured from "../HomeDetails/Featured";
import Footer from "../HomeDetails/Footer";




const Home = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="carousel mt-10 lg:w-full h-[300px] lg:h-[700px] rounded-xl">
                <div id="slide1" className="carousel-item relative lg:w-full w-full">
                    <img src={img1} className="lg:w-full" />

                    <div className="absolute h-full  flex items-center   lg:left-0  lg:top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 w-1/2 lg:pl-12'>
                            <h1 className='lg:text-6xl text-2xl font-bold'>THE MOST LUXURIOUS HOTEL IN TOWN.</h1>
                            <p>Our luxurious accommodations and impeccable service are sure to make your stay unforgettable.</p>

                        </div>
                    </div>

                    <div className="absolute flex  transform -translate-y-1/2 lg:left-5 left-[300px] right-5 justify-between bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </div>


                <div id="slide2" className="carousel-item relative lg:w-full w-full">
                    <img src={img2} className="lg:w-full" />

                    <div className="absolute h-full  flex items-center   lg:left-0  lg:top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 w-1/2 lg:pl-12'>
                            <h1 className='lg:text-6xl text-2xl font-bold'>THE MOST LUXURIOUS HOTEL IN TOWN.</h1>
                            <p>Our luxurious accommodations and impeccable service are sure to make your stay unforgettable.</p>

                        </div>
                    </div>

                    <div className="absolute flex  transform -translate-y-1/2 lg:left-5 left-[300px] lg:right-5  lg:justify-between bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>

                </div>


                <div id="slide3" className="carousel-item relative lg:w-full w-full">
                    <img src={img3} className="lg:w-full" />

                    <div className="absolute h-full  flex items-center   lg:left-0  lg:top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 w-1/2 lg:pl-12'>
                            <h1 className='lg:text-6xl text-2xl font-bold'>THE MOST LUXURIOUS HOTEL IN TOWN.</h1>
                            <p>Our luxurious accommodations and impeccable service are sure to make your stay unforgettable.</p>

                        </div>
                    </div>

                    <div className="absolute flex  transform -translate-y-1/2 lg:left-5 left-[300px] lg:right-5  lg:justify-between bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>

                </div>



                <div id="slide4" className="carousel-item relative lg:w-full w-full">
                    <img src={img4} className="lg:w-full" />

                    <div className="absolute h-full  flex items-center   lg:left-0  lg:top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 w-1/2 lg:pl-12'>
                            <h1 className='lg:text-6xl text-2xl font-bold'>THE MOST LUXURIOUS HOTEL IN TOWN.</h1>
                            <p>Our luxurious accommodations and impeccable service are sure to make your stay unforgettable.</p>

                        </div>
                    </div>

                    <div className="absolute flex  transform -translate-y-1/2 lg:left-5 left-[300px] lg:right-5  lg:justify-between bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>

                </div>

            </div>

            <Location></Location>         
<SpecialOffer></SpecialOffer>

<Featured></Featured>
<Footer></Footer>

{/* <Featured></Featured> */}




        </div>
    );
};

export default Home;