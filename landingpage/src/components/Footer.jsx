export default function Footer() {
  return (
    <footer className="text-white py-16 px-10 md:px-32">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 text-lg md:text-xl leading-relaxed">
        {/* About */}
        <div>
          <h3 className="font-bold text-2xl text-[#c5c9e9]  mb-4">About</h3>
          <ul className="space-y-2">
            <li><a>Getting Started</a></li>
            <li><a>Our Story</a></li>
            <li><a>Vision</a></li>
            <li><a>Mission</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-2xl text-[#c5c9e9]  mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a>Blog</a></li>
            <li><a>Testimonials</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-2xl text-[#c5c9e9]  mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a>Privacy Policy</a></li>
            <li><a>Terms of service</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-2xl text-[#c5c9e9]  mb-4">Social Media</h3>
          <ul className="space-y-2">
            <li><a>Instagram</a></li>
            <li><a>Youtube</a></li>
            <li><a>LinkedIn</a></li>
            <li><a>X / Twitter</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-2xl text-[#c5c9e9] mb-4">Contact</h3>
          <ul className="space-y-2">
            <li><a>Reach out to us</a></li>
            <li className="flex items-center gap-2">
            +91 0000000000
            </li>
            <li>Office location would come here,<br />Pune–411052</li>
            <li className="text-purple-100 cursor-pointer hover:underline">
              <a href="https://maps.app.goo.gl/CtKxzYxySgy6qQW19">Google Maps 📍</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
