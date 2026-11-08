const platforms = [
  { name: "TripAdvisor", rating: "4.7", detail: "24 ratings" },
  { name: "Google", rating: "4.5", detail: "45 ratings" },
  { name: "Holidify", rating: "4.2", detail: "72 ratings" },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <p className="text-[#D5AD69] uppercase tracking-[4px] text-sm font-semibold mb-3">
          Reputation
        </p>
        <h2 className="text-white font-bold text-[32px] sm:text-[45px] font-poppins">
          Trusted by Travellers
        </h2>
        <p className="text-gray-300 max-w-[650px] mx-auto mt-5 leading-7">
          The original Aziz Travelland company information lists the following
          review-platform figures.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="bg-[#173D32] rounded-2xl p-8 text-center border border-white/10"
          >
            <p className="text-[#D5AD69] text-3xl tracking-wider">★★★★★</p>
            <p className="text-white text-4xl font-bold mt-4">
              {platform.rating}<span className="text-xl">★</span>
            </p>
            <h3 className="text-white text-lg font-semibold mt-3">
              {platform.name}
            </h3>
            <p className="text-gray-400 text-sm mt-1">{platform.detail}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-500 text-xs text-center mt-5">
        Review scores and counts are reproduced from the supplied company content and should be checked against each platform before publication.
      </p>
    </section>
  );
};

export default Testimonials;
