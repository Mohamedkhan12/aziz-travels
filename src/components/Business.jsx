const services = [
  {
    number: "01",
    title: "Airport & Transport",
    description: "Airport welcomes and comfortable air-conditioned cars or vans with professional English-speaking chauffeur-guides.",
  },
  {
    number: "02",
    title: "Hotels & Lodges",
    description: "Help arranging accommodation through hotel and lodge partners across Sri Lanka.",
  },
  {
    number: "03",
    title: "Customised Tours",
    description: "Cultural, heritage, adventure and private tours for honeymooners, families, couples and solo travellers.",
  },
  {
    number: "04",
    title: "Travel Support",
    description: "Assistance with itineraries, SIM cards, travel documentation, vacation arrangements and travel insurance enquiries.",
  },
];

const Business = () => {
  return (
    <section id="about" className="py-16">
      <div className="text-center mb-14">
        <p className="text-[#D5AD69] uppercase tracking-[4px] text-sm font-semibold mb-3">
          Get to Know Us
        </p>
        <h2 className="text-white font-bold text-[32px] sm:text-[45px] font-poppins">
          About Aziz Travelland Tours
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <img
          src="/images/sigiriya.jpg"
          alt="Sigiriya Rock Fortress in Sri Lanka"
          className="w-full h-[350px] object-cover rounded-2xl shadow-xl"
        />

        <div>
          <h3 className="text-[#D5AD69] font-bold text-2xl mb-5">
            A Local Team, Here to Help You Discover Sri Lanka
          </h3>
          <p className="text-gray-300 leading-8 mb-5">
            Established in Colombo in 2017, Aziz Travelland Tours is a Sri Lankan
            inbound travel enterprise dedicated to fulfilling clients' tour and
            travel requirements through thoughtful planning and personal service.
          </p>
          <p className="text-gray-300 leading-8">
            We work with hotels and local service providers across Sri Lanka to
            help organise a smooth journey. From your arrival to the places you
            explore, our aim is to make your travel experience enjoyable and
            well organised.
          </p>
          <p className="text-[#D5AD69] font-semibold mt-6">
            Proudly based in Colombo, Sri Lanka · Established 2017
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-20">
        <div className="bg-[#173D32] border border-white/10 rounded-2xl p-8">
          <p className="text-[#D5AD69] uppercase tracking-[3px] text-xs font-semibold mb-3">
            Our Mission
          </p>
          <h3 className="text-white text-2xl font-bold mb-3">
            Your satisfaction comes first
          </h3>
          <p className="text-gray-300 leading-7">
            To focus on customer satisfaction by delivering excellent-quality
            service and an unforgettable travel experience.
          </p>
        </div>
        <div className="bg-[#173D32] border border-white/10 rounded-2xl p-8">
          <p className="text-[#D5AD69] uppercase tracking-[3px] text-xs font-semibold mb-3">
            Our Vision
          </p>
          <h3 className="text-white text-2xl font-bold mb-3">
            A trusted name in travel
          </h3>
          <p className="text-gray-300 leading-7">
            To become a leading online travel agency, recognised among the
            best tourism companies for professionalism.
          </p>
        </div>
      </div>

      <div id="services" className="scroll-mt-24">
        <div className="text-center mb-12">
          <p className="text-[#D5AD69] uppercase tracking-[4px] text-sm font-semibold mb-3">
            What We Offer
          </p>
          <h3 className="text-white font-bold text-[30px] sm:text-[38px]">
            Travel Services
          </h3>
          <p className="text-gray-300 max-w-[650px] mx-auto mt-4 leading-7">
            Practical travel arrangements for individuals, families, groups and corporate visitors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-[#173D32] p-7 rounded-xl border border-white/10 hover:border-[#D5AD69] transition-all duration-300"
            >
              <span className="text-[#D5AD69] font-bold text-sm">{service.number}</span>
              <h4 className="text-white font-semibold text-xl mt-4 mb-3">
                {service.title}
              </h4>
              <p className="text-gray-300 text-sm leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
