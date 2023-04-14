import React from 'react';

const TryOut = () => {
    return (
        <div>
            <section class="py-10 lg:max-w-[1170px] lg:p-0 p-10 mb-10 lg:mb-36 mt-10 mx-auto rounded-xl bg-gradient-to-l from-gray-600 to-neutral-800 sm:py-16 lg:py-20">
                <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
                        <div className='lg:w-[700px]'>
                            <h2 class="lg:text-5xl text-3xl font-semibold text-white ">Let’s try our service now!</h2>
                            <p className='text-white text-[18px] mt-6'>Everything you need to accept card payments  and grow your business anywhere on the planet.</p>
                        </div>

                        <button className='lg:mt-0 mt-12 bg-gradient-to-b from-[#DEF9FA] via-[#5CE1E6] to-[#33BBCF] pb-19 pt-19 pr-33 pl-33 text-black font-medium py-5 px-10 rounded-lg'>Get Started</button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TryOut;