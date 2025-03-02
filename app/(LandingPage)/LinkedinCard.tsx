

export default function LinkedInCard() {
  return (
    <div className="w-full max-w-[240px] sm:max-w-[250px]">
      <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 h-auto hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-3 sm:mb-4 bg-blue-600 text-white px-2 py-1 sm:py-1.5 rounded-lg">
          <div className="font-semibold text-white text-xs sm:text-sm flex items-center rounded-3xl">
            <span className="bg-white rounded-sm mr-1.5">
              <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-blue-600 text-xs font-bold rounded-md">
                in
              </div>
            </span>
            <p className="text-base sm:text-xl">LinkedIn ATS</p>
          </div>
        </div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center space-x-2 pt-1 sm:pt-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-black rounded-sm flex items-center justify-center text-white text-xs font-bold">
              in
            </div>
            <span className="font-medium tracking-wide text-gray-900 text-sm sm:text-xl font-outfit">
              AI RAG Agents.
            </span>
          </div>
          
          <div className="flex items-center space-x-2 pt-2 sm:pt-4">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-black rounded-sm flex items-center justify-center text-white text-xs font-bold">
              in
            </div>
            <span className="font-semibold text-gray-900 text-sm sm:text-xl">
              UI/UX Design
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}