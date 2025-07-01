import Icons from "./Icons";
import Footer from "./Footer";
import FooterDate from "./FooterDate";

export default function Section8(){

    return(




<div className="min-h-[120vh] bg-[#171717]">
  <div className="flex flex-col">
    {/* Heading + Icons Section */}
    <div className="flex flex-col md:flex-row flex-wrap items-center min-h-[25vh] md:min-h-[55vh] px-5 md:px-12 gap-y-6 gap-x-8">
      <h1 className="text-6xl sm:text-8xl md:text-[120px] lg:text-[150px] xl:text-[190px] font-bold text-white leading-none tracking-tight text-center md:text-left">
        FYNTREST
      </h1>
      <div className="pt-4 md:pt-10 flex justify-center md:justify-start">
        <Icons />
      </div>
    </div>

    {/* Footer */}
    <div className="pt-10">
      <Footer />
    </div>

    {/* Footer Date */}
    <div className="text-white md:pl-32 text-center md:text-left text-base md:text-xl py-4">
      <FooterDate />
    </div>
  </div>
</div>
 );

}