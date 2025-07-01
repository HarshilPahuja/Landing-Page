import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function Herocontent() {
  return (
    <div className="pt-10 sm:pt-3 md:pt-0  px-0 sm:px-10 "> 
      <div className="flex flex-col justify-center sm:h-[80vh] px-10 max-w-4xl">
        <h1 className="text-6xl sm:text-5xl md:text-8xl font-normal mb-9 text-white">
          Fyntrest: Finance Made Easy
        </h1>

        <button className="w-[250px] flex items-center bg-white text-black rounded-full md:px-4 py-1 md:w-[320px] mb-8 shadow-md hover:bg-violet-300 transition">
          <span className="flex items-center gap-2 font-normal text-sm sm:text-base md:text-[22px] whitespace-nowrap ml-2 mr-4">
            Request a demo
          </span>
          <ArrowCircleRightIcon className="text-black ml-15 sm:ml-22 md:ml-15" style={{ fontSize: '50px' }}  />
        </button>

        <p className="text-[25px] sm:text-base md:text-[22px] leading-relaxed max-w-xs md:max-w-sm text-white">
          Empower your students with financial literacy seamlessly integrated into your school's curriculum.
        </p>
      </div>
    </div>
  )
}
