import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Section7Form() {
  const [formdetails, setformdetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [phoneError, setPhoneError] = useState("");

  function handleChange(event) {
    setformdetails({
      ...formdetails,
      [event.target.name]: event.target.value,
    });
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // CAN HANDLE THE SUBMITTED FORM HERE


    //handling indian number here.
    const phone = formdetails.phone;
    const isIndia = phone.startsWith("91");
    const numberWithoutCode = isIndia ? phone.slice(2) : phone;

    if (isIndia && numberWithoutCode.length !== 10) {
      setPhoneError("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    // Clear any previous errors and continue
    setPhoneError("");
    alert("Form submitted successfully!");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* First name */}
          <div>
            <label
              htmlFor="firstName"
              className="block mb-1 text-white text-sm md:text-[22px]"
            >
              First name*
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formdetails.firstName}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              required
              className="w-full p-3 rounded-full border-2 border-white text-white"
            />
          </div>

          
          <div>
            <label htmlFor="lastName" className="block text-white mb-1 text-sm md:text-[22px]">
              Last name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formdetails.lastName}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              required
              className="w-full p-3 rounded-full fill-white border-2 border-white text-white"
            />
          </div>

          
          <div>
            <label htmlFor="email" className="block text-sm md:text-[22px] text-white mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formdetails.email}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              required
              className="w-full p-3 rounded-full border-2 border-white text-white"
              placeholder="example@mysite.com"
            />
          </div>

          
          <div>
            <label htmlFor="phone" className="block text-sm md:text-[22px] text-white mb-1">
              Phone *
            </label>
            <PhoneInput
              id="phone"
              country={"in"}
              name="phone"
              value={formdetails.phone}
              onKeyDown={handleKeyDown}
              onChange={(phone) => setformdetails({ ...formdetails, phone })}
              containerClass="!w-full !relative"
              inputClass="!w-full !py-6 !pl-16 !pr-4 !rounded-full !border-2 !border-white !text-white !bg-transparent focus:!outline-none"
              buttonClass="!absolute !top-1/2 !left-4 !-translate-y-1/2 !bg-transparent !border-none !shadow-none hover:!bg-transparent focus:!bg-transparent active:!bg-transparent"
              dropdownClass="!bg-white !text-black !rounded-md !shadow-lg z-50"
              enableSearch={true}
            />
            {phoneError && (
              <p className="text-red-400 text-sm mt-1 ml-1">{phoneError}</p>
            )}
          </div>

          
          <div className="mt-6">
            <label htmlFor="message" className="block text-sm md:text-[22px] text-white mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formdetails.message}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="w-full p-3 rounded-2xl border-2 border-white text-white"
              rows="5"
              placeholder="Write your message here"
            />
          </div>

          {/* Submit */}
          <div className="mt-6 md:mt-25">
            <button
              type="submit"
              className="w-full py-3  bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
