import Section7Pt1 from "./Section7pt1";
import Section7Form from "./Section7form";


export default function Section7(){

    return(
        <div id="section7" className="min-h-[120vh] bg-gradient-to-b from-[#812BF6] to-[#B584EF]">
            <div className="pl-[25px] pt-[37px] md:pt-[70px] md:pl-[60px]">
            <Section7Pt1/>
            </div>

            <div className="pl-[25px] pr-[25px] pb-[10px]  md:pl-[60px] pt-[37px] md:pt-[70px]">
            <Section7Form/>
            </div>

        </div>


    );
}