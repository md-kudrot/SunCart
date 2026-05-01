import { Globe, Mail, Phone } from 'lucide-react';
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#00575E] mt-10'>
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-6 lg:gap-8 w-full max-w-7xl mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">

                <div className="flex-1">
                    <h1 className="text-lg md:text-xl font-bold">Contact</h1>
                    <div className="flex mt-6 md:mt-8 flex-col gap-4">
                        <p className='flex items-center gap-3 text-sm md:text-base'><Mail className='w-5 h-5 flex-shrink-0'></Mail> info@sun-cart.com</p>
                        <p className='flex items-center gap-3 text-sm md:text-base'><Phone className='w-5 h-5 flex-shrink-0'></Phone> +1 (123) 456-7890</p>
                        <p className='flex items-center gap-3 text-sm md:text-base'><Globe className='w-5 h-5 flex-shrink-0'></Globe> www.sun-cart.com</p>
                    </div>
                </div>

                <div className="flex-1">
                    <h1 className="text-lg md:text-xl font-bold">Social Links</h1>
                    <div className="flex mt-6 md:mt-8 flex-col gap-4">
                        <p className='flex items-center gap-3 text-sm md:text-base'><FaFacebook className='flex-shrink-0' /> Facebook</p>
                        <p className='flex items-center gap-3 text-sm md:text-base'><FaYoutube className='flex-shrink-0' /> YouTube</p>
                        <p className='flex items-center gap-3 text-sm md:text-base'><FaXTwitter className='flex-shrink-0' /> Twitter</p>
                    </div>
                </div>

                <div className="flex-1">
                    <h1 className="text-lg md:text-xl font-bold">Privacy Policy</h1>
                    <div className="mt-6 md:mt-8 text-xs md:text-sm text-white/90 max-w-sm">
                        <p>
                            We respect your privacy. We collect only the information necessary to
                            provide and improve our services. We never sell your personal data.
                        </p>
                        <p className="mt-3">
                            For full details, see our{' '}
                            <a href="/privacy" className="underline hover:text-white transition">
                                Privacy Policy
                            </a>.
                        </p>
                    </div>
                </div>

            </div>
            <div className="text-center text-xs md:text-sm text-white/80 py-4 md:py-5 border-t border-gray-500">
                &copy; {new Date().getFullYear()} SunCart. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;