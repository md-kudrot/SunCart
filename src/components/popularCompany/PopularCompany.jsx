import React from 'react';

const PopularCompany = () => {
    const companies = [
        {
            "id": 1,
            "company_name": "Havaianas",
            "description": "A world-renowned Brazilian brand famous for its iconic rubber flip-flops. Known for comfort and vibrant designs, it is a staple for beachwear and casual summer style."
        },
        {
            "id": 2,
            "company_name": "Ray-Ban",
            "description": "A global leader in the premium eyewear market. It is best known for its timeless sunglasses models like the Aviator and Wayfarer, providing both high-fashion and essential UV protection."
        },
        {
            "id": 3,
            "company_name": "Supergoop!",
            "description": "A prestige skincare brand exclusively dedicated to sun protection. They specialize in innovative, clean-formula sunscreens that integrate seamlessly into daily beauty and summer routines."
        },
        {
            "id": 4,
            "company_name": "Billabong",
            "description": "An iconic Australian surf and lifestyle brand. They are leaders in functional summer apparel, including high-performance boardshorts, swimwear, and coastal-inspired clothing."
        }
    ]
    return (
        <div className=' p-8 mt-10'>
            <h1 className='text-4xl font-bold'>Popular Companies</h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
               {
                    companies.map((company) => (
                        <div key={company.id} className=" p-4 rounded-lg shadow-md border border-gray-500 ">
                            <h2 className="text-2xl font-semibold text-center text-[#f0b000ce]">{company.company_name}</h2>
                            <p className="text-[#00575E] text-center">{company.description}</p>
                        </div>
                    ))
               }
                
            </div>
        </div>
    );
};

export default PopularCompany;