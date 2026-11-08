import { destinations } from "../constants";

const Destinations = () => {
  return (
    <section id="destinations" className="py-16">
      <div className="text-center mb-14">
        <p className="text-[#D5AD69] uppercase tracking-[4px] text-sm font-semibold mb-3">
          Explore the Island
        </p>
        <h2 className="text-white font-bold text-[32px] sm:text-[45px] font-poppins">
          Discover Sri Lanka
        </h2>
        <p className="text-gray-300 max-w-[650px] mx-auto mt-5 leading-7">
          From ancient kingdoms and misty tea country to wildlife and golden
          beaches, discover the many experiences Sri Lanka has to offer.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {destinations.map((destination) => (
          <article
            key={destination.id}
            className="bg-[#173D32] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            {destination.image ? (
              <div className="h-[210px] overflow-hidden">
                <img
                  src={destination.image}
                  alt={`${destination.name}, Sri Lanka`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="h-[210px] bg-gradient-to-br from-[#315D4C] via-[#214B3E] to-[#102D25] flex items-center justify-center">
                <span className="text-[#D5AD69] uppercase tracking-[4px] text-sm font-semibold">
                  Sri Lanka
                </span>
              </div>
            )}

            <div className="p-6">
              <h3 className="text-white font-semibold text-xl mb-3">
                {destination.name}
              </h3>
              <p className="text-gray-300 text-sm leading-7">
                {destination.description}
              </p>
              <a
                href="#contact"
                className="inline-block mt-5 text-[#D5AD69] font-semibold hover:text-[#E8C58A] transition-colors"
              >
                Enquire About This Destination →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
