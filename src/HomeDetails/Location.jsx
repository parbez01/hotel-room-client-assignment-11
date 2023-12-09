

const Location = () => {
   return (
      <div className="mt-14">
         <h2 className="text-center text-5xl font-bold mb-20">Our Location</h2>
         <div className="mb-36 lg:flex lg:ml-20 lg:justify-between"  >

            <div className="flex-1">
               <h2 className="text-center text-4xl font-semibold">Nearest some Interest Place</h2>

               <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10 "
               data-aos="zoom-in" data-aos-duration="2000">
                  <div>
                     <img className="lg:w-[400px] w-full h-[200px]" src="https://i.ibb.co/QCv5D0y/Sher-E-Bangla-National-Cricket-Stadium-1.webp" alt="" />
                     <h2 className="text-xl font-semibold mt-2 mb-2">Sher-e-bangla national cricket stadium</h2>
                     <hr />
                  </div>
                  <div>
                     <img className="lg:w-[400px] w-full h-[200px]" src="https://i.ibb.co/nsv4Tx8/the-national-zoo-at-washington-top.webp" alt="" />
                     <h2 className="text-xl font-semibold mt-2 mb-2">Bangladesh National Zoo</h2>
                     <hr />
                  </div>
                  <div >
                     <img className="lg:w-[400px] w-full h-[200px]" src="https://i.ibb.co/Bnbrj5r/OPEN-HOUSE-2.jpg" alt="" />
                     <h2 className="text-xl font-semibold mt-2 mb-2">Botanical Garden</h2>
                     <hr />
                  </div>
               </div>

            </div>

            <div className="flex-1 lg:ml-[150px]" >

               <iframe className="lg:w-[600px] w-full lg:h-[600px] h-[400px] frameborder-[0px] scrolling-[0px] marginheight-[0px] marginwidth-[opx]" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Mirpur,%20Dhaka%201216,%20Bangladesh.+(Mirpur)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
            </div>

         </div>
      </div>
   );
};

export default Location;