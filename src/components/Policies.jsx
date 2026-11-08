const cancellation = [
  { period: "1–6 days before arrival", charge: "100% charged" },
  { period: "7–13 days before arrival", charge: "50% charged" },
  { period: "14–28 days before arrival", charge: "25% charged" },
  { period: "More than 28 days before arrival", charge: "Hotel-specific; confirmed case by case" },
];

const Policies = () => {
  return (
    <section id="policies" className="py-16 scroll-mt-24">
      <div className="text-center mb-14">
        <p className="text-[#D5AD69] uppercase tracking-[4px] text-sm font-semibold mb-3">
          Before You Travel
        </p>
        <h2 className="text-white font-bold text-[32px] sm:text-[45px] font-poppins">
          Travel & Cancellation Policies
        </h2>
        <p className="text-gray-300 max-w-[700px] mx-auto mt-5 leading-7">
          Please review these terms when planning your trip. We recommend
          confirming the applicable terms with Aziz Travelland Tours before
          making a booking or payment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div className="bg-[#173D32] rounded-2xl p-7 sm:p-9 border border-white/10">
          <h3 className="text-white text-2xl font-bold mb-6">Cancellation Schedule</h3>
          <div>
            {cancellation.map((item) => (
              <div key={item.period} className="py-4 border-b border-white/10 last:border-0">
                <p className="text-gray-300 text-sm">{item.period}</p>
                <p className="text-[#D5AD69] font-semibold mt-1">{item.charge}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs leading-6 mt-5">
            For cancellations more than 28 days before arrival, the original
            company information states that the decision is handled by the
            hotel on a case-by-case basis.
          </p>
        </div>

        <div className="bg-[#173D32] rounded-2xl p-7 sm:p-9 border border-white/10">
          <h3 className="text-white text-2xl font-bold mb-6">Refunds & Guest Information</h3>
          <ul className="space-y-5 text-gray-300 text-sm leading-7">
            <li>
              Refund requests made within 72 hours of purchase, before an order
              is processed, are considered under the cancellation policy.
            </li>
            <li>
              The supplied company terms state that eligible refunds are
              processed within 21 days.
            </li>
            <li>
              If a hotel is changed after itinerary approval without your
              written consent, the supplied terms state that the hotel amount
              is fully refunded.
            </li>
            <li>
              Guests should hold a valid passport and visa and advise the team
              in advance about medical or wheelchair-accessibility needs.
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-400 text-xs leading-6 max-w-[760px] mx-auto">
          This section summarises the policy wording in the company information
          supplied for the website. Please confirm the current booking-specific
          terms in writing before payment.
        </p>
        <a
          href="#contact"
          className="inline-block mt-6 bg-[#D5AD69] text-[#173D32] px-6 py-3 rounded-lg font-semibold hover:bg-[#E8C58A] transition-all"
        >
          Ask About Booking Terms
        </a>
      </div>
    </section>
  );
};

export default Policies;
