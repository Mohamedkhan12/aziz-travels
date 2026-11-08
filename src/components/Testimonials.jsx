
const commitments = [
  {
    number: "01",
    title: "Personalised Travel",
    description:
      "We help plan journeys around your interests, preferences and travel schedule.",
  },
  {
    number: "02",
    title: "Local Experiences",
    description:
      "Discover Sri Lanka's culture, heritage, landscapes and attractions.",
  },
  {
    number: "03",
    title: "Travel Assistance",
    description:
      "Get assistance with transportation, accommodation arrangements and travel planning.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-14">
        <p className="text-[#D5AD69] uppercase tracking-[4px] text-sm font-semibold mb-3">
          The Aziz Travelland Experience
        </p>

        <h2 className="text-white font-bold text-[32px] sm:text-[45px] font-poppins">
          Make Your Sri Lankan Journey Special
        </h2>

        <p className="text-gray-300 max-w-[650px] mx-auto mt-5 leading-7">
          Every traveller has a different story. We aim to make planning your
          Sri Lankan holiday easier with personalised travel arrangements and
          local assistance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {commitments.map((item) => (
          <div
            key={item.number}
            className="bg-[#173D32] rounded-2xl p-8 border border-white/10 hover:border-[#D5AD69] transition-all duration-300"
          >
            <span className="text-[#D5AD69] text-sm font-bold">
              {item.number}
            </span>

            <h3 className="text-white text-xl font-semibold mt-5 mb-4">
              {item.title}
            </h3>

            <p className="text-gray-300 text-sm leading-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
