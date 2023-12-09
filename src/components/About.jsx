import Footer from "../HomeDetails/Footer";
import Navbar from "./Navbar";


const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>


                <div><h2 className="text-5xl font-bold text-center mt-24 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text ">Meet Our Team Members</h2></div>

                <div className="grid grid-cols-1 lg:grid-cols-3 ml-6 gap-6  lg:ml-28 mt-24 mb-16">


                    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" data-aos="flip-right" data-aos-duration="2000">
                        <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <img src="https://i.ibb.co/HPTXQ7d/053bff642d1fc903053bff642d1fc903-IMG-20230310-141841.jpg" alt="profile-picture" />
                        </div>
                        <div className="p-6 text-center">
                            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Parbez Mosharof
                            </h4>
                            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                                Owner
                            </p>
                        </div>
                        <div className="flex justify-center gap-7 p-6 pt-2">
                            <a
                                href="#facebook"
                                className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                            >
                                <i className="fab fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a
                                href="#twitter"
                                className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                            >
                                <i className="fab fa-twitter" aria-hidden="true"></i>
                            </a>
                            <a
                                href="#instagram"
                                className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                            >
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                    {/* 2nd card */}
                    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" data-aos="flip-right" data-aos-duration="2000">
                        <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <img src="https://i.ibb.co/vZtG84w/photo-1656338997878-279d71d48f6e.jpg" alt="profile-picture" />
                        </div>
                        <div className="p-6 text-center">
                            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Arjun Kapoor
                            </h4>
                            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                                Assistant
                            </p>
                        </div>
                        <div className="flex justify-center gap-7 p-6 pt-2">
                            <a
                                href="#facebook"
                                className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                            >
                                <i className="fab fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a
                                href="#twitter"
                                className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                            >
                                <i className="fab fa-twitter" aria-hidden="true"></i>
                            </a>
                            <a
                                href="#instagram"
                                className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                            >
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                    {/* 3rd card */}

                    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" data-aos="flip-right" data-aos-duration="2000">
                        <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <img src="https://i.ibb.co/Cv2nCxG/istockphoto-1200677760-612x612.jpg" alt="profile-picture" />
                        </div>
                        <div className="p-6 text-center">
                            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Natalie Paisley
                            </h4>
                            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                                Assistant
                            </p>
                        </div>
                        <div className="flex justify-center gap-7 p-6 pt-2">
                            <a
                                href="#facebook"
                                className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                            >
                                <i className="fab fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a
                                href="#twitter"
                                className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                            >
                                <i className="fab fa-twitter" aria-hidden="true"></i>
                            </a>
                            <a
                                href="#instagram"
                                className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                            >
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                </div>



                <div>

                    <div className="container my-24 mx-auto md:px-6">

                        <section className="mb-32 text-center">
                            <h2 className="mb-12 text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text ">
                                Meet the another team member
                            </h2>

                            <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-4">
                                <div className="mb-12">
                                    <img className="h-20 rounded-full w-20 flex ml-44 lg:ml-32" src="https://i.ibb.co/gM6V3L5/20161214164224-Getty-Images-533978993.jpg" alt="" />

                                    <p className="mb-2 font-bold">John Doe</p>
                                    <p className="text-neutral-500 dark:text-neutral-300">Jhon@gmail.com</p>
                                </div>

                                <div className="mb-12">
                                    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/XWmCMYN/images-1.jpg" alt="" />

                                    <p className="mb-2 font-bold">Lisa Ferrol</p>
                                    <p className="text-neutral-500 dark:text-neutral-300">Lisa@gmail.comr</p>
                                </div>

                                <div className="mb-12">
                                    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/8MYtrv4/images-2.jpg" alt="" />
                                    <p className="mb-2 font-bold">Maria Smith</p>
                                    <p className="text-neutral-500 dark:text-neutral-300">
                                        Maria@gmail.com
                                    </p>
                                </div>
                                <div className="mb-12">
                                    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/G26Rtrs/21-Pros-and-Cons-of-One-Person-Company.png" alt="" />
                                    <p className="mb-2 font-bold">Agatha Bevos</p>
                                    <p className="text-neutral-500 dark:text-neutral-300">Agantha@gmail.com</p>
                                </div>

                                <div className="mb-12">
                                    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/5r09BSM/download-1.jpg" alt="" />
                                    <p className="mb-2 font-bold">Darren Randolph</p>
                                    <p className="text-neutral-500 dark:text-neutral-300">
                                        Darren@gmail.com
                                    </p>
                                </div>

                                <div className="mb-12">
                                    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/9b6pNv7/images-3.jpg" alt="" />
                                    <p className="mb-2 font-bold">Soraya Letto</p>
                                    <p className="text-neutral-500 dark:text-neutral-300">Soraya@gmail.com</p>
                                </div>

                                <div className="mb-12">
                                    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/mBNqkKR/images-4.jpg" alt="" />
                                    <p className="mb-2 font-bold">Maliha Welch</p>
                                    <p className="text-neutral-500 dark:text-neutral-300">Maliha@gmail.com</p>
                                </div>

                                <div className="mb-12">
                                    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/zmTczVp/images-5.jpg" alt="" />
                                    <p className="mb-2 font-bold">Zeynep Dudley</p>
                                    <p className="text-neutral-500 dark:text-neutral-300">Dudley@gmail.com</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-4xl font-bold mb-4">Hotel History</h2>
                                <p className="text-lg">The history of hotel is intimately connected to that of civilizations. Or rather, it is a part of that history. Facilities offering guest hospitality have been in evidence since early biblical times. The Greeks developed thermal baths in villages designed for rest and recuperation. Later, the Romans built mansions to provide accommodation for travelers on government business. The Romans were the first to develop thermal baths in England, Switzerland and the Middle East. Later still, caravanserais appeared providing a resting place for caravans along Middle Eastern routes. In the Middle Ages, monasteries and abbeys were the first establishments to offer refuge to travelers on a regular basis. Religious orders built inns, hospices and hospitals to cater for those on the move.Inns multiplied but they did not yet offer meals. Staging posts were established for governmental transports and as rest stops. They provided shelter and allowed horses to be changed more easily. Numerous refuges then sprang up for pilgrims and crusaders on their way to the Holy Land.

                                    Travelling then became progressively more hazardous. At the same time, inns gradually appeared in most of Europe. Some of them have remained famous, for example, l’Auberge des Trois Rois in Basle, which dates from the Middle Ages. Around 1200, staging posts for travelers and stations for couriers were set up in China and Mongolia. In Europe, or more precisely in Belgium, l’Auberge Cour Saint Georges opened in Gant, while the Angel Inn was built at Grantham in Lincolnshire, England.</p>
                                <p className=" mt-4 text-2xl font-bold mb-4">The Start of the Hotel Industry</p>
                                <p className="text-lg">In France, at the beginning of the fifteenth century, the law required that hotels keep a register. English law also introduced rules for inns at that time. At the same time, around 1500 thermal spas were developed at Carlsbad and Marienbad. During this epoch, more than 600 inns were registered in England. Their architecture often consisted of a paved interior court with access through an arched porch. The bedrooms were situated on the two sides of the courtyard, the kitchen and the public rooms at the front, and the stables and storehouses at the back. The first guide books for travelers were published in France during this period.

                                    An embryonic hotel industry began to develop in Europe. Distinctive signs were hung outside establishments renowned for their refined cuisine. At the end of the 1600s, the first stage coaches following a regular timetable started operating in England. Half a century later, clubs similar to English gentlemen’s clubs and Masonic lodges began to appear in America.

                                    In Paris in the time of Louis XIV, the Place Vendôme offered the first example of a multiple-use architectural complex, where the classical façades accommodated boutiques, offices, apartments and also hotels. In New York first of all, and then in Copenhagen, hotels were established in city centres. At the beginning of the 1800s, the Royal Hotel was built in London. Holiday resorts began to flourish along the French and Italian rivieras (rivers).</p>
                            </div>

                            <div>
                                <h2 className="text-4xl font-bold mt-16 mb-4">Our Mission</h2>
                                <p className="text-lg">The mission of our hotel is to provide outstanding lodging facilities and services to our guests. Our hotel focuses on individual business and leisure travel, as well as travel associated with groups meetings .we emphasise high quality standards in our rooms and food and beverage divisions. We provide a fair return on investment for our owners and recognise that this cannot be done without well trained , motivated and enthusiastic employees. Goals are those activities and standards and organisation must successfully perform or achieve to effectively carry out its missions. A Goal is more specific than a mission; it requires a certain level of achievement that can be observed and measured.

Measurable goals encourage hotel employees to perform effectively while enabling management to monitor employee progress. Management can determine whether goals are being achieved or whether corrective action is necessary.</p>
                            </div>
                        </section>

                    </div>
                </div>
                <div>

                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default About;