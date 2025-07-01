import Section2Card from "./Section2card";

export default function Section2Content(){


return (


<div className="flex flex-col pt-10 sm:pt-0 sm:flex-row h-full items-center justify-between px-6 sm:px-16 text-white">
      

    <div className="max-w-xl">

        <h3 className="text-3xl md:text-[27px] font-bold uppercase tracking-wide mb-4 pl-1 pb-0">
          Why Fyntrest?
        </h3>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-6  pb-2">
          Built for Schools, <br className="hidden sm:block" />
          Backed by Experts
        </h2>

        <p className="text-[17px]  sm:text-base md:text-[22px] leading-relaxed max-w-xs md:max-w-xl text-white">
          Fyntrest delivers curriculum-aligned, age-appropriate, and highly engaging
          financial literacy programs for grades 8–12.
        </p>

    </div>

    
     <div className="flex flex-col gap-0 sm:gap-4 mt-6"> 
        <div className="w-full max-w-md self-start transform -translate-x-4">
        <Section2Card  color="bg-[#504c4c]" title="Curriculum-Aligned" content="Designed to fit right into your existing syllabus" />
        </div>
        <div className="w-full max-w-md self-end transform translate-x-4" >
        <Section2Card  color="bg-[#bdbdff]" title="Age-Specific Learning" content="Tailored modules by age group and class level"/>
        </div>
        <div className=" w-full max-w-md self-start transform -translate-x-4">
        <Section2Card  color="bg-[#504c4c]" title="Engaging Formats" content="Games, storytelling, and real-life simulations" />
        </div>
        <div className="hidden sm:block w-full max-w-md self-end transform translate-x-4">
        <Section2Card  color="bg-[#bdbdff]" title="Comprehensive Coverage" content="Budgeting, saving, credit, investing, and beyond"/>
        </div>
    </div>  
    

</div>
);
}





