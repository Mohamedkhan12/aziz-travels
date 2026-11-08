
const services = [
  {
    number: "01",
    title: "Airport Transfers",
    description:
      "Convenient airport pickup and transportation to help you begin your Sri Lankan journey.",
  },
  {
    number: "02",
    title: "Private Transportation",
    description:
      "Travel around Sri Lanka in private air-conditioned cars and vans with English-speaking chauffeur-guides.",
  },
  {
    number: "03",
    title: "Accommodation Arrangements",
    description:
      "Assistance with hotel and lodge reservations to suit your travel plans.",
  },
  {
    number: "04",
    title: "Customised Tours",
    description:
      "Explore Sri Lanka through cultural, heritage and adventure journeys tailored to your interests.",
  },
  {
    number: "05",
    title: "Travel Experiences",
    description:
      "Travel options for honeymooners, families, couples and solo travellers.",
  },
  {
    number: "06",
    title: "Travel Assistance",
    description:
      "Support with itineraries, SIM cards and travel documentation assistance.",
  },
];

const Business = () => {
  return (
    <section id="about" className="py-16">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <p className="text-[#D5AD69] uppercase tracking-[4px] text-sm font-semibold mb-3">
          Get to Know Us
        </p>

        <h2 className="text-white font-bold text-[32px] sm:text-[45px] font-poppins">
          About Aziz Travelland Tours
        </h2>
      </div>

      {/* Company Introduction */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <img
            src="/images/sigiriya.jpg"
            alt="Sigiriya Rock Fortress in Sri Lanka"
            className="w-full h-[350px] object-cover rounded-2xl shadow-xl"
          />
        </div>

        <div>
          <h3 className="text-[#D5AD69] font-bold text-2xl mb-5">
            Your Journey Through Sri Lanka Starts Here
          </h3>

          <p className="text-gray-300 leading-8 mb-5">
            Established in 2017, Aziz Travelland Tours is a Sri Lankan inbound
            travel agency dedicated to helping international visitors discover
            the beauty, culture and heritage of Sri Lanka.
          </p>

          <p className="text-gray-300 leading-8 mb-5">
            From airport pickups and private transportation to hotel
            reservations and customised travel experiences, we assist
            travellers in planning their journeys around the island.
          </p>

          <p className="text-gray-300 leading-8">
            Whether you are travelling with family, as a couple or on your
            own, we can help you explore Sri Lanka according to your interests
            and travel plans.
          </p>

          <div className="mt-7">
            <span className="text-[#D5AD69] font-semibold">
              Established in 2017
            </span>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="text-center mb-12">
        <p className="text-[#D5AD69] uppercase tracking-[4px] text-sm font-semibold mb-3">
          What We Offer
        </p>

        <h3 className="text-white font-bold text-[30px] sm:text-[38px]">
          Our Travel Services
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {services.map((service) => (
          <div
            key={service.number}
            className="bg-[#173D32] p-7 rounded-xl border border-white/10 hover:border-[#D5AD69] transition-all duration-300"
          >
            <span className="text-[#D5AD69] font-bold text-sm">
              {service.number}
            </span>

            <h4 className="text-white font-semibold text-xl mt-4 mb-3">
              {service.title}
            </h4>

            <p className="text-gray-300 text-sm leading-7">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
