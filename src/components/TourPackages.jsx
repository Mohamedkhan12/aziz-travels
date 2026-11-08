const included = [
  "Super-luxury air-conditioned car or van with an English-speaking chauffeur-guide",
  "Chauffeur meals and accommodation",
  "Fuel and highway tickets",
  "Local vehicle insurance and passenger insurance",
  "Applicable taxes and service charges",
  "Complimentary bottled water",
];

const excluded = [
  "Entrance fees and attraction charges",
  "Jeep safaris and other activities such as elephant rides, boat rides, cruises and hot-air balloon rides",
  "Lunch and dinner",
  "Camera and video permits",
  "Visa and other government charges",
  "Tips, portages and personal expenses",
];

const attractions = [
  { name: "Sigiriya Rock Fortress", fee: "USD 30" },
  { name: "Dambulla Cave Temple", fee: "USD 10" },
  { name: "Temple of the Tooth, Kandy", fee: "USD 10" },
  { name: "Yala National Park (jeep safari)", fee: "USD 40–50" },
  { name: "Madu Ganga River Safari", fee: "USD 25–30" },
  { name: "Kosgoda Turtle Hatchery", fee: "USD 10" },
];

const TourPackages = () => {
  return (
    <section id="packages" className="py-16">
      <div className="text-center mb-14">
        <p className="text-[#D5AD69] uppercase tracking-[4px] text-sm font-semibold mb-3">
          Tailor-Made Travel
        </p>
        <h2 className="text-white font-bold text-[32px] sm:text-[45px] font-poppins">
          Tour Packages & Pricing
        </h2>
        <p className="text-gray-300 max-w-[700px] mx-auto mt-5 leading-7">
          Every itinerary is custom-built around your travel plans. The details
          below explain what a standard chauffeur-guided package covers.
          Contact us for a quote for your dates and group.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div className="bg-[#173D32] rounded-2xl p-7 sm:p-9 border border-white/10">
          <h3 className="text-white text-2xl font-bold mb-6">Package Includes</h3>
          <ul className="space-y-4">
            {included.map((item) => (
              <li key={item} className="flex gap-3 text-gray-200 text-sm leading-6">
                <span className="text-[#D5AD69] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#173D32] rounded-2xl p-7 sm:p-9 border border-white/10">
          <h3 className="text-white text-2xl font-bold mb-6">Package Excludes</h3>
          <ul className="space-y-4">
            {excluded.map((item) => (
              <li key={item} className="flex gap-3 text-gray-200 text-sm leading-6">
                <span className="text-[#D5AD69] font-bold">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 mt-7">
        <div className="lg:col-span-3 bg-[#173D32] rounded-2xl p-7 sm:p-9 border border-white/10">
          <div className="mb-6">
            <p className="text-[#D5AD69] uppercase tracking-[3px] text-xs font-semibold mb-2">
              Approximate Prices
            </p>
            <h3 className="text-white text-2xl font-bold">
              Popular Attraction Entry Fees
            </h3>
            <p className="text-gray-400 text-xs mt-2">
              Indicative figures from the supplied company information. Prices are subject to change.
            </p>
          </div>
          <div className="space-y-0">
            {attractions.map((item) => (
              <div
                key={item.name}
                className="flex justify-between gap-4 py-4 border-b border-white/10 last:border-0"
              >
                <span className="text-gray-200 text-sm">{item.name}</span>
                <span className="text-[#D5AD69] font-semibold text-sm whitespace-nowrap">
                  {item.fee}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-[#102D25] rounded-2xl p-7 sm:p-9 border border-[#D5AD69]/30 flex flex-col justify-center">
          <p className="text-[#D5AD69] uppercase tracking-[3px] text-xs font-semibold mb-3">
            Private Transport
          </p>
          <p className="text-white text-5xl font-bold mb-2">$50</p>
          <p className="text-gray-300 font-medium">Per day</p>
          <p className="text-gray-400 text-sm leading-7 mt-4">
            Car with driver and fuel. Special rates may be available for groups
            and longer stays.
          </p>
          <a
            href="#contact"
            className="inline-block text-center mt-7 bg-[#D5AD69] text-[#173D32] px-6 py-3 rounded-lg font-bold hover:bg-[#E8C58A] transition-all"
          >
            Get a Quote
          </a>
        </div>
      </div>
      <p className="text-gray-400 text-xs text-center mt-6">
        Attraction fees and transport rates are subject to confirmation when you enquire.
      </p>
    </section>
  );
};

export default TourPackages;
