import { CiLocationOn } from 'react-icons/ci';
import { BiAnchor } from 'react-icons/bi';
import { LuCalendarDays } from 'react-icons/lu';
import { TfiAlarmClock, TfiCup } from 'react-icons/tfi';
import { GiCornerFlag, GiDirectionSigns } from 'react-icons/gi';
import { IoDiamondOutline, IoPaperPlaneOutline } from 'react-icons/io5';
import { BsDisplay } from 'react-icons/bs';
const Featured = () => {
    return (
        <div className='mb-20'>
            

     
            <div className="text-center py-2 ">
               
                <h3 className="text-5xl font-bold py-2 mb-3">
                    AT YOUR SERVICE
                </h3>
                <div className="lg:px-40 px-5 mb-6">
                    <p>
                        The staff is friendly and knowledgeable and can help you choose the right service. Our hotel offers excellent accommodations and services, perfect for business and leisure travelers alike. Our convenient location allows easy access to all the best the city has to offer. Book now and take advantage of our special deals and discounts.
                    </p>
                </div>
               
            </div>



            <div className='space-y-8'>

                <div className='flex justify-evenly flex-row items-center' data-aos="zoom-in" data-aos-duration="2000">
                    <div>
                        <div className='text-[#d6683d] text-[30px] flex justify-center'> <TfiAlarmClock></TfiAlarmClock></div>
                        <p>Wake-up call</p>
                    </div>
                    <div>
                        <div className='text-[#D6693D] text-[30px] flex justify-center'><BiAnchor></BiAnchor></div>
                        <p>Beachfront</p>
                    </div>
                    <div>
                        <div className='text-[#D6693D] text-[30px] flex justify-center'> <LuCalendarDays></LuCalendarDays></div>
                        <p>Online booking</p>
                    </div>
                    <div>
                        <div className='text-[#D6693D] text-[30px] flex justify-center'><CiLocationOn></CiLocationOn></div>
                        <p>Many locations</p>
                    </div>
                    <div>
                        <div className='text-[#D6693D] text-[30px] flex justify-center'><TfiCup></TfiCup></div>
                        <p>Best rated</p>
                    </div>
                </div>
                <div className='flex justify-evenly flex-row items-center gap-2' data-aos="zoom-in" data-aos-duration="2000">
                    <div>
                        <div className='text-[#D6693D] text-[30px] flex justify-center'> <IoPaperPlaneOutline></IoPaperPlaneOutline></div>
                        <p>Shuttle service</p>
                    </div>
                    <div>
                        <div className='text-[#D6693D] text-[30px] flex justify-center'><GiCornerFlag></GiCornerFlag></div>
                        <p>18 Hold golf</p>
                    </div>
                    <div>
                        <div className='text-[#D6693D] text-[30px] flex justify-center'> <GiDirectionSigns></GiDirectionSigns></div>
                        <p>Tour packages</p>
                    </div>
                    <div>
                        <div className='text-[#D6693D] text-[30px] flex justify-center'><IoDiamondOutline></IoDiamondOutline></div>
                        <p>Excellence</p>
                    </div>
                    <div>
                        <div className='text-[#D6693D] text-[30px] flex justify-center'> <BsDisplay></BsDisplay></div>
                        <p>Fast wifi</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Featured;