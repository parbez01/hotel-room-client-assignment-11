
import img3 from '../assets/banner7.jpg'
import img4 from '../assets/vip.jpg'
import img5 from '../assets/president.jpg'


const SpecialOffer = () => {
    return (
        <div className='mb-28'>
            {/* <h2 className="text-5xl font-bold text-center lg:mt-10">Special Offer Our Hotel</h2> */}
            <h2 className="text-5xl text-gray-700 font-semibold text-center   lg:mt-8">Special Offers and Promotions</h2>
            <p className="text-center space-y-4 mt-8 text-base ">Our suites are the perfect place to stay for a relaxing and comfortable getaway.  Each suite includes  a bedroom, living room, and kitchenette, as well as a private balcony or patio. You’ll have plenty <br /> of space to spread out and enjoy your stay. Plus, our suites come equipped with all the amenities</p>

            {/* <img className="lg:h-[500px] rounded-lg w-full mt-10" src="https://i.ibb.co/S02vj1C/8753892.jpg" alt="" /> */}


            <div className='grid grid-cols-1  lg:grid-cols-3 gap-10 mt-10'>

                <div data-aos="zoom-in" data-aos-duration="2000">
                    <img className='h-[350px]' src={img3} alt="" />
                    <p className='text-base mt-2 mb-2 font-medium text-gray-700' >Private bathroom</p>
                    <hr />
                    <h1 className='text-xl font-bold mt-2 mb-2'>AMBASSADOR SUITE</h1>
                    <h1 className='text-xl font-bold mt-2 mb-2'>Price per Night: $100</h1>
                    <p className='text-xm font-normal'>The Ambassador Suite is a large and luxurious suite typically found in top-tier hotels. It often features a separate bedroom and living area, as well as a private bathroom.</p>
                </div>

                <div data-aos="zoom-in" data-aos-duration="2000">
                    <img className='h-[350px]' src={img4} alt="" />
                    <p className='text-base mt-2 mb-2 font-medium text-gray-700'>State-of-the-art amenities</p>
                    <hr />
                    <h1 className='text-xl font-bold mt-2 mb-2'>ROYAL SUITE</h1>
                    <h1 className='text-xl font-bold mt-2 mb-2'>Price per Night: $200</h1>
                    <p className='text-xm font-normal'>The Royal Suite is the most luxurious suite at a hotel. It features a bedroom, a living room, a dining area, and a private bathroom. It is often decorated with luxurious furnishings.</p>
                </div>

                <div data-aos="zoom-in" data-aos-duration="2000">
                    <img className='h-[350px]' src={img5} alt="" />
                    <p className='text-base mt-2 mb-2 font-medium text-gray-700'>Separate bedroom, living room</p>
                    <hr />
                    <h1 className='text-xl font-bold mt-2 mb-2'>PRESIDENTIAL SUITE</h1>
                    <h1 className='text-xl font-bold mt-2 mb-2'>Price per Night: $300</h1>
                    <p className='text-xm font-normal'>The Presidential Suite is the most luxurious and expensive suite at a hotel. It typically features a separate bedroom, living room, and dining area, as well as a kitchenette and multiple bathrooms.</p>
                </div>






            </div>

        </div>
    );
};

export default SpecialOffer;