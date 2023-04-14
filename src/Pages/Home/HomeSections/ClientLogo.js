import React from 'react';
import dropbox from '../../../images/dropbox.png'
import binance from '../../../images/binance.png'
import airbnb from '../../../images/airbnb.png'
import coinbase from '../../../images/coinbase.png'

const ClientLogo = () => {
    return (
        <div>
            <section className="py-14 lg:mt-28 lg:p-0 p-5 sm:py-16 lg:py-32">
                <div className="px-4 mx-auto lg:w-[1500px] sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-4">
                        <div>
                            <img className="object-contain " src={airbnb} alt="" />
                        </div>

                        <div>
                            <img className="object-contain " src={binance} alt="" />
                        </div>

                        <div>
                            <img className="object-contain " src={coinbase} alt="" />
                        </div>

                        <div>
                            <img className="object-contain " src={dropbox} alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ClientLogo;