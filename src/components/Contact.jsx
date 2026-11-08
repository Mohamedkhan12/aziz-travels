
import { useState } from "react";

const WHATSAPP_NUMBER = "94722664945";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    destination: "",
    travelDate: "",
    travellers: "2",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello Aziz Travels!

I would like to enquire about a trip to Sri Lanka.

Name: ${formData.name}
Email: ${formData.email}
Country: ${formData.country}
Preferred Destination: ${formData.destination}
Travel Date: ${formData.travelDate}
Number of Travellers: ${formData.travellers}

Additional Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left Side */}
        <div>
          <p className="text-[#D5AD69] font-semibold tracking-[3px] text-sm mb-4">
            START YOUR JOURNEY
          </p>

          <h2 className="text-white font-bold text-4xl sm:text-5xl leading-tight">
            Let's Plan Your
            <br />
            <span className="text-[#D5AD69]">Sri Lankan Adventure.</span>
          </h2>

          <p className="text-gray-300 mt-7 leading-8 max-w-lg">
            Tell us about your travel plans. Share your preferred
            destination, travel dates and requirements. Our team can
            discuss your journey with you through WhatsApp.
          </p>

          <div className="mt-10 bg-[#173D32] border border-[#315344] rounded-xl p-6">
            <h3 className="text-white font-semibold text-lg mb-3">
              Prefer WhatsApp?
            </h3>

            <p className="text-gray-300 text-sm mb-5">
              Contact Aziz Travels directly to discuss your trip.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#D5AD69] text-[#173D32] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#E8C58A] transition-all"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-[#173D32] border border-[#315344] rounded-2xl p-7 sm:p-9">
          <h3 className="text-white text-2xl font-bold mb-2">
            Plan Your Trip
          </h3>

          <p className="text-gray-300 text-sm mb-8">
            Complete the form below to send your enquiry.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <div>
              <label className="text-gray-200 text-sm mb-2 block">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full bg-[#10291F] border border-[#315344] rounded-lg px-4 py-3 text-white outline-none focus:border-[#D5AD69]"
              />
            </div>

            <div>
              <label className="text-gray-200 text-sm mb-2 block">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full bg-[#10291F] border border-[#315344] rounded-lg px-4 py-3 text-white outline-none focus:border-[#D5AD69]"
              />
            </div>

            <div>
              <label className="text-gray-200 text-sm mb-2 block">
                Your Country *
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="e.g. United Kingdom"
                required
                className="w-full bg-[#10291F] border border-[#315344] rounded-lg px-4 py-3 text-white outline-none focus:border-[#D5AD69]"
              />
            </div>

            <div>
              <label className="text-gray-200 text-sm mb-2 block">
                Preferred Destination
              </label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full bg-[#10291F] border border-[#315344] rounded-lg px-4 py-3 text-white outline-none focus:border-[#D5AD69]"
              >
                <option value="">Select a destination</option>
                <option value="Sigiriya">Sigiriya</option>
                <option value="Ella">Ella</option>
                <option value="Galle">Galle</option>
                <option value="Kandy">Kandy</option>
                <option value="Mirissa">Mirissa</option>
                <option value="Nuwara Eliya">Nuwara Eliya</option>
                <option value="Multiple destinations">Multiple destinations</option>
                <option value="Not decided">Not decided yet</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-gray-200 text-sm mb-2 block">
                  Travel Date
                </label>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  className="w-full bg-[#10291F] border border-[#315344] rounded-lg px-4 py-3 text-white outline-none focus:border-[#D5AD69]"
                />
              </div>

              <div>
                <label className="text-gray-200 text-sm mb-2 block">
                  Travellers
                </label>
                <select
                  name="travellers"
                  value={formData.travellers}
                  onChange={handleChange}
                  className="w-full bg-[#10291F] border border-[#315344] rounded-lg px-4 py-3 text-white outline-none focus:border-[#D5AD69]"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6+">6+ People</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-gray-200 text-sm mb-2 block">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your travel plans..."
                rows="4"
                className="w-full bg-[#10291F] border border-[#315344] rounded-lg px-4 py-3 text-white outline-none focus:border-[#D5AD69] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#D5AD69] text-[#173D32] py-4 rounded-lg font-bold hover:bg-[#E8C58A] transition-all"
            >
              Send Enquiry via WhatsApp →
            </button>

            <p className="text-gray-400 text-xs text-center">
              Your enquiry will open in WhatsApp. You must press Send there
              to deliver it.
            </p>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
