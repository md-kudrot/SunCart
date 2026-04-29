import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
    return (
        <section className="p-">
            <div
                className="w-full h-[45vh] rounded-2xl sm:h-[60vh] md:h-[75vh] lg:h-[90vh] bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg.src})`,
                }}>
                <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 lg:py-32 text-center text-yellow-500">
                    <div className="mt-12 sm:mt-20 md:mt-28 lg:mt-40">
                        <h1 className="text-5xl sm:text-6xl  lg:text-[8rem] font-bold mb-4">Summer Sale</h1>
                        <p className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] mb-6 font-semibold">50% OFF</p>
                        <button className=" cursor-pointer bg-[#c09441] text-xl sm:text-2xl md:text-3xl lg:text-4xl px-6 sm:px-8 md:px-10 rounded-2xl text-white font-bold py-2 sm:py-3 md:py-4">Hot Deals <span className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl">🔥</span></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;