import { Globe, Mail, Phone } from 'lucide-react';
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#00575E] mt-10'>
            <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-4 w-full sm:w-full lg:w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-4">

                <div className="flex-1 sm:flex-none">
                    <h1 className="text-lg sm:text-xl lg:text-xl font-bold">Contact</h1>
                    <div className="flex mt-6 sm:mt-10 flex-col gap-3 sm:gap-4">
                        <p className='flex items-center gap-3 sm:gap-4 text-sm sm:text-base'><Mail className='w-5 h-5'></Mail> info@sun-cart.com</p>
                        <p className='flex items-center gap-3 sm:gap-4 text-sm sm:text-base'><Phone className='w-5 h-5'></Phone> +1 (123) 456-7890</p>
                        <p className='flex items-center gap-3 sm:gap-4 text-sm sm:text-base'><Globe className='w-5 h-5'></Globe> www.sun-cart.com</p>
                    </div>
                </div>

                <div className="flex-1 sm:flex-none">
                    <h1 className="text-lg sm:text-xl lg:text-xl font-bold">Social Links</h1>
                    <div className="flex mt-6 sm:mt-10 flex-col gap-2 sm:gap-3">
                        <p className='flex items-center gap-3 sm:gap-4 text-sm sm:text-base'><FaFacebook /> Facebook</p>
                        <p className='flex items-center gap-3 sm:gap-4 text-sm sm:text-base'><FaYoutube /> YouTube</p>
                        <p className='flex items-center gap-3 sm:gap-4 text-sm sm:text-base'><FaXTwitter /> Twitter</p>
                    </div>
                </div>

                <div className="flex-1 sm:flex-none">
                    <h1 className="text-lg sm:text-xl lg:text-xl font-bold">Privacy Policy</h1>
                    <div className="mt-4 sm:mt-6 lg:mt-4 text-xs sm:text-sm lg:text-sm text-white/90 max-w-sm">
                        <p>
                            We respect your privacy. We collect only the information necessary to
                            provide and improve our services. We never sell your personal data.
                        </p>
                        <p className="mt-2">
                            For full details, see our{' '}
                            <a href="/privacy" className="underline">
                                Privacy Policy
                            </a>.
                        </p>
                    </div>
                </div>

            </div>
            <div className="text-center text-xs sm:text-sm text-white/80 py-3 sm:py-4 border-t border-gray-500">
                &copy; {new Date().getFullYear()} SunCart. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;