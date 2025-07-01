import Section5Pt1 from "./Section5pt1";
import Section5Pt2 from "./Section5pt2";
import Library from "../assets/library_img.jpg"

export default function Section5(){
return (
<div id="section5" className="pt-30 min-h-[120vh] text-white bg-black flex flex-col lg:flex-row">

    {/* left side */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 py-12" >
        <Section5Pt1/>
        <div  className="mt-30">
            <Section5Pt2 number="01" title="Understanding Money" content="Learn what money is, how it’s earned, and its role in everyday life"/>
            <Section5Pt2 number="02" title="Needs vs Wants" content="Develop decision-making skills by distinguishing essentials from desires"/>
            <Section5Pt2 number="03" title="Banking Basics" content="Get introduced to savings accounts, digital payments, and how banks work"/>
        </div>
    </div>

    {/*right side*/}
    
    <div className="hidden md:block w-full lg:w-1/2 h-[60vh] lg:h-auto">
        <img
          src={Library} // replace with actual path
          alt="Library"
          className="w-full h-full object-cover"
        />
    </div>
    


</div>
);


}