import React from 'react';
import star from '../../../images/star.png'
import tele from '../../../images/tele.png'
import secure from '../../../images/secure.png'

const Features = () => {
    return (
        <div>
            <div className=" lg:flex justify-between mb-10 lg:mb-64 max-w-[1500px] mx-auto  mt-12  sm:mt-20 ">

                <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-3 lg:space-y-12">
                    <div className="">
                        <div className="ml-5">
                            <h3 className="lg:text-[48px] leading-normal text-3xl font-semibold text-white">You do the business, <br /> we’ll handle the money.</h3>
                            <p className='text-[18px] font-normal text-white mt-[24px]'>With the right credit card, you can improve your financial life <br /> by building credit, earning rewards and saving money. But <br /> with hundreds of credit cards on the market.</p>

                            <button className=' mt-12 bg-gradient-to-b from-[#DEF9FA] via-[#5CE1E6] to-[#33BBCF] pb-19 pt-19 pr-33 pl-33 text-black font-medium py-5 px-10 rounded-lg'>Get Started</button>
                        </div>
                    </div>
                </div>

                <div>
                    <section className='lg:mr-60 lg:mt-0 mt-10' >
                        <div className="grid ">
                            <div className="p-4">
                                <div className="flex ">
                                    <div>
                                        <img className='w-[64px]' src={star} alt="" srcset="" />
                                    </div>
                                    <div className='ml-5'>
                                        <h2 className='text-white font-semibold text-[18px]'>Rewards</h2>
                                        <p className=' text-white mt-2'>The best credit cards offer some tantalizing <br />
                                        combinations of promotions and prizes</p>
                                    </div>

                                </div>
                            </div>
                            
                            
                            <div className="mt-3 p-4 rounded-xl bg-gradient-to-t from-gray-600 to-neutral-800">
                                <div className="flex mt-8">
                                    <div>
                                        <img className='w-[64px]' src={secure} alt="" srcset="" />
                                    </div>

                                    <div className='ml-5'>
                                        <h2 className='text-white font-semibold text-[18px] '>100% Secured</h2>
                                        <p className=' text-white mt-2'>We take proactive steps make sure your <br /> information and transactions are secure.</p>
                                    </div>

                                </div>
                            </div>
                            
                            
                            <div className="mt-3 p-4">
                                <div className="flex mt-8">
                                    <div>
                                        <img className='w-[64px]' src={tele} alt="" srcset="" />
                                    </div>
                                    <div className='ml-5'>
                                        <h2 className='text-white font-semibold text-[18px]'>Balance Transfer</h2>
                                        <p className=' text-white mt-2'>A balance transfer credit card can save <br /> you a lot of money in interest charges.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </div>
        </div>
    );
};

export default Features;