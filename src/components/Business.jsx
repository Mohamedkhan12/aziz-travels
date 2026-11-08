
import { travelBenefits } from "../constants";

const Business = () => {
  return (
    <section
      id="about"
      className="flex md:flex-row flex-col py-20 gap-12"
    >
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-[#D5AD69] font-semibold tracking-[3px] text-sm mb-4">
          WHY TRAVEL WITH US
        </p>

        <h2 className="font-poppins font-bold text-white text-[38px] sm:text-[48px] leading-tight">
          Experience Sri Lanka
          <br />
          <span className="text-[#D5AD69]">
            Beyond Expectations.
          </span>
        </h2>

        <p className="font-poppins text-gray-300 text-base leading-7 max-w-[500px] mt-6">
          At Aziz Travels, we believe every journey should be special.
          Discover the beauty, culture and hospitality of Sri Lanka
          through travel experiences designed around you.
        </p>

        <a
          href="#contact"
          className="bg-[#D5AD69] text-[#173D32] font-semibold px-7 py-4 rounded-md w-fit mt-8 hover:bg-[#E8C58A] transition-all"
        >
          Plan Your Journey →
        </a>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col gap-5">
        {travelBenefits.map((benefit, index) => (
          <div
            key={benefit.id}
            className="flex gap-5 items-start p-6 rounded-xl bg-[#173D32] border border-[#315344]"
          >
            <div className="w-12 h-12 rounded-full bg-[#D5AD69] flex items-center justify-center shrink-0">
              <span className="text-[#173D32] font-bold text-lg">
                0{index + 1}
              </span>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {benefit.title}
              </h3>

              <p className="text-gray-300 text-sm leading-6">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
