
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United Kingdom",
    message:
      "Sri Lanka was an unforgettable experience. The beautiful landscapes and cultural attractions made the journey special.",
  },
  {
    id: 2,
    name: "Michael Brown",
    country: "Australia",
    message:
      "A wonderful destination with so much to explore. We loved discovering the beaches, mountains and local culture.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    country: "Germany",
    message:
      "An amazing experience exploring Sri Lanka. Every destination had something unique to offer.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <p className="text-[#D5AD69] font-semibold tracking-[3px] text-sm mb-4">
          TRAVELLER STORIES
        </p>
        <h2 className="text-white font-bold text-3xl sm:text-5xl">
          Memories That Last Forever
        </h2>
        <p className="text-gray-300 mt-5 max-w-2xl mx-auto">
          Discover what travellers love about exploring the Pearl of the Indian Ocean.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-[#173D32] border border-[#315344] rounded-xl p-7"
          >
            <div className="text-[#D5AD69] text-3xl mb-4">★★★★★</div>
            <p className="text-gray-200 text-sm leading-7">
              "{item.message}"
            </p>
            <div className="border-t border-[#315344] mt-6 pt-5">
              <h3 className="text-white font-semibold">{item.name}</h3>
              <p className="text-[#D5AD69] text-sm">{item.country}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
