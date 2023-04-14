import React from 'react';
import dribble from '../../../images/dribbble-seeklogo.com 1.svg'
import netflix from '../../../images/Group 481776.svg'
import plogone from '../../../images/Polygon 3.svg'
import plogone2 from '../../../images/Polygon 4.svg'
import line from '../../../images/Group 481777.svg'
import paypal from '../../../images/paypal.svg'
import play from '../../../images/play.svg'
import apple from '../../../images/apple.svg'
import toast, { Toaster } from 'react-hot-toast';

const MakePayment = () => {
    const notify = () => toast.success('Great! Your Payment is succesfully.');
    return (
        <div>
            <div>
                <div className="p-5 lg:p-0 lg:flex justify-between lg:max-w-[1500px] mx-auto   sm:mt-20 ">

                    <div className=''>

                        <div className="lg:grid  lg:w-[400px] lg:absolute lg:ml-64 lg:-mt-60">

                            <div className="lg:mt-6  p-8 rounded-xl bg-gradient-to-t from-gray-600 to-neutral-800">


                                <div className='flex  justify-between'>
                                    <div className="flex ">
                                        <div>
                                            <img className='w-[64px]' src={paypal} alt="" srcset="" />
                                        </div>

                                        <div className='ml-5'>
                                            <h2 className='text-white font-semibold mt-2 text-[25px] '>Paypal</h2>
                                            <p className=' text-white text-[12px] mt-2'>Checkout</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex  pt-5 justify-between'>
                                    <div >
                                        <div className='ml-5'>
                                            <p className=' text-white text-[18px] mt-2'>Total</p>
                                            <h2 className='text-white font-semibold mt-2 text-[28px] '>$210</h2>
                                        </div>
                                    </div>

                                    <div className='flex mt-4 justify-between'>
                                        <button className=' border text-cyan-400 border-cyan-200  font-medium  px-10 rounded-lg'>Change</button>
                                    </div>
                                </div>

                                <div className='mx-auto'>
                                    <button onClick={notify} className='mt-7 ml-16 bg-gradient-to-b from-[#DEF9FA] via-[#5CE1E6] to-[#33BBCF] pb-19 pt-19 pr-33 pl-33 text-black font-medium py-5 px-10 rounded-xl'>Make Payment</button>
                                    <Toaster />
                                </div>


                            </div>
                        </div>

                        <section className='lg:w-[450px] ' >
                            <div className="grid ">

                                <div className="mt-6  p-8 rounded-xl bg-gradient-to-t from-gray-600 to-neutral-800">
                                    <h2 className='text-white p-2 font-semibold text-[22px] '>Last Transaction</h2>
                                    <div className='flex mt-4 pt-5 justify-between'>
                                        <div className="flex ">
                                            <div>
                                                <img className='w-[64px]' src={dribble} alt="" srcset="" />
                                            </div>

                                            <div className='ml-5'>
                                                <h2 className='text-white font-semibold mt-2 text-[16px] '>Dribbble Pro</h2>
                                                <p className=' text-white text-[12px] mt-2'>15 Days ago</p>
                                            </div>
                                        </div>

                                        <div className='flex mt-2 justify-between'>
                                            <div>
                                                <img src={plogone} className='-mb-6 mr-3 w-auto h-5' alt="" srcset="" />
                                            </div>
                                            <div>
                                                <h2 className='text-white mb-2 '>-$250,93</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex mt-4 pt-5 justify-between'>
                                        <div className="flex ">
                                            <div>
                                                <img className='w-[64px]' src={netflix} alt="" srcset="" />
                                            </div>

                                            <div className='ml-5'>
                                                <h2 className='text-white font-semibold mt-2 text-[16px] '>Netflix</h2>
                                                <p className=' text-white text-[12px] mt-2'>4 Days ago</p>
                                            </div>
                                        </div>

                                        <div className='flex mt-2 justify-between'>
                                            <div>
                                                <img src={plogone} className='-mb-6 mr-3 w-auto h-5' alt="" srcset="" />
                                            </div>
                                            <div>
                                                <h2 className='text-white mb-2 '>-$250,93</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex mt-4 pt-5 justify-between'>
                                        <div className="flex ">
                                            <div>
                                                <img className='w-[64px]' src={line} alt="" srcset="" />
                                            </div>

                                            <div className='ml-5'>
                                                <h2 className='text-white font-semibold mt-2 text-[16px] '>Manulife Cash</h2>
                                                <p className=' text-white text-[12px] mt-2'>4 Days ago</p>
                                            </div>
                                        </div>

                                        <div className='flex mt-2 justify-between'>
                                            <div>
                                                <img src={plogone2} className='-mb-6 mr-3 w-auto h-5' alt="" srcset="" />
                                            </div>
                                            <div>
                                                <h2 className='text-white mb-2 '>-$250,93</h2>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </section>


                    </div>

                    <div className="space-y-8  lg:mr-36 xl:pr-24 lg:col-span-6 lg:space-y-12">
                        <div className="">
                            <div className="ml-5 mt-11">
                                <h3 className="lg:text-[48px] text-3xl leading-normal font-semibold text-white">Easily control your <br /> billing & invoicing.</h3>
                                
                                <p className='text-[18px] font-normal text-white mt-[24px]'>Elit enim sed massa etiam. Mauris eu adipiscing <br /> ultrices ametodio aenean neque. Fusce ipsum orci <br /> rhoncus aliporttitor integer platea placerat.</p>

                                <div className='flex mt-10 justify-between'>
                                    <div>
                                        <img src={apple} alt="" srcset="" />
                                    </div>
                                    <div>
                                        <img src={play} alt="" srcset="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakePayment;