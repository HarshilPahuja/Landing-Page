import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export default function Section4() {
  return (
    <div id="section4" className="h-screen bg-black flex items-center justify-start px-8 sm:px-16">
      <div className="max-w-5xl">
        <h2 className="text-white text-2xl sm:text-5xl font-bold mb-6">
          ABOUT US
        </h2>

        <p className="text-white text-3xl sm:text-4xl leading-snug sm:leading-relaxed max-w-4xl mb-10 font-light">
          Fyntrest is an edtech platform that teaches financial literacy to kids and teens through schools. Its mission is to help learners aged 12–18 understand money, make smart financial choices, and learn personal finance early through engaging, curriculum-based, gamified courses.
        </p>

        <button className="flex items-center gap-3 text-lg sm:text-3xl bg-gradient-to-r from-violet-600 to-purple-400 px-8 py-3 rounded-full text-white hover:bg-[#c5bbff] hover:from-transparent hover:to-transparent hover:text-[#1c1c1c] transition">
          Get Started <ArrowCircleRightOutlinedIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}
