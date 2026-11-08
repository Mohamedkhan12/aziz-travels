import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    destination: "",
    travelDate: "",
    travellers: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `
Hello Aziz Travelland Tours!

I would like to enquire about a trip to Sri Lanka.

Name: ${formData.name}
Email: ${formData.email}
Country: ${formData.country}
Interested Destination: ${formData.destination}
Travel Date: ${formData.travelDate}
Number of Travellers: ${formData.travellers}

Additional Information:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/94758519429?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-16 scroll-mt-24">
      <div className="text-center mb-14">
        <p className="text-[#D5AD69] uppercase tracking-[4px] text-sm font-semibold mb-3">
          Get in Touch
        </p>
        <h2 className="text-white font-bold text-[32px] sm:text-[45px]">
          Plan Your Sri Lankan Journey
        </h2>
        <p className="text-gray-300 max-w-[650px] mx-auto mt-5 leading-7">
          Tell us a little about your travel plans. Our contact details are
          below, and you can send your enquiry directly through WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-[#173D32] p-8 rounded-2xl">
          <h3 className="text-white font-bold text-2xl mb-7">
            Contact Information
          </h3>

          <div className="space-y-7">
            <div>
              <p className="text-[#D5AD69] text-sm font-semibold mb-2">
                Phone / WhatsApp
              </p>
              <a
                href="https://wa.me/94758519429"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#D5AD69]"
              >
                +94 75 851 9429
              </a>
            </div>

            <div>
              <p className="text-[#D5AD69] text-sm font-semibold mb-2">Email</p>
              <a
                href="mailto:aziz.travellandt@gmail.com"
                className="text-white hover:text-[#D5AD69]"
              >
                aziz.travellandt@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[#D5AD69] text-sm font-semibold mb-2">Address</p>
              <p className="text-white leading-7">
                200/B Kolonnawa Road,
                <br />
                Kolonnawa, Colombo,
                <br />
                Sri Lanka.
              </p>
            </div>

            <div>
              <p className="text-[#D5AD69] text-sm font-semibold mb-2">Instagram</p>
              <a
                href="https://www.instagram.com/aziztravels/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#D5AD69]"
              >
                @aziztravels
              </a>
            </div>

            <div>
              <p className="text-[#D5AD69] text-sm font-semibold mb-2">Facebook</p>
              <p className="text-white">Aziz Travelland</p>
              <p className="text-gray-400 text-xs mt-1">
                Facebook page link to be added.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#173D32] p-8 rounded-2xl">
          <h3 className="text-white font-bold text-2xl mb-3">
            Send an Enquiry
          </h3>
          <p className="text-gray-400 text-sm leading-6 mb-7">
            Complete this form and WhatsApp will open with your enquiry ready
            for you to review and send.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-[#214B3E] text-white border border-white/10 outline-none focus:border-[#D5AD69]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-[#214B3E] text-white border border-white/10 outline-none focus:border-[#D5AD69]"
            />
            <input
              type="text"
              name="country"
              placeholder="Your Country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-[#214B3E] text-white border border-white/10 outline-none focus:border-[#D5AD69]"
            />
            <input
              type="text"
              name="destination"
              placeholder="Destination You Are Interested In"
              value={formData.destination}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-[#214B3E] text-white border border-white/10 outline-none focus:border-[#D5AD69]"
            />
            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-[#214B3E] text-white border border-white/10 outline-none focus:border-[#D5AD69]"
            />
            <input
              type="number"
              name="travellers"
              min="1"
              placeholder="Number of Travellers"
              value={formData.travellers}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-[#214B3E] text-white border border-white/10 outline-none focus:border-[#D5AD69]"
            />
            <textarea
              name="message"
              placeholder="Tell us more about your travel plans..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-[#214B3E] text-white border border-white/10 outline-none focus:border-[#D5AD69] resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[#D5AD69] text-[#173D32] font-bold py-4 rounded-lg hover:bg-[#E8C58A] transition-all"
            >
              Continue to WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
