import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


import Section6Card from "./Section6card";
export default function Section6(){
return(
    <div id="section6" className=" px-12 py-25  bg-white text-black" >
        <h3 className="text-3xl md:text-[30px] font-semi-bold tracking-wide mb-4">
          VALUE FOR YOUR SCHOOL
        </h3>
        <div className="pt-15 flex flex-col gap-10 md:flex-row md:justify-between md:items-start md:gap-16 ">
            <Section6Card icon={GppGoodOutlinedIcon} title="Boost Academic Relevance" content="Go beyond theory with practical life skills" />
            <Section6Card icon={PeopleAltOutlinedIcon} title="Appeal To Modern Parents" content="Meet the expectations of 21st-century families" />
            <Section6Card icon={MonetizationOnOutlinedIcon} title="Affordable & Scalable" content="Quality education that fits every school’s budge" />
        </div>


    </div>
);

}