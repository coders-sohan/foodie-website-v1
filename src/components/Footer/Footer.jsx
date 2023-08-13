import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-lightGray">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="px-5 w-full text-center bg-darkGray h-96 flex justify-center items-center">
            <div className="gap-2 flex flex-col">
              <h1 className="text-2xl font-normal uppercase mb-8">
                Contact Us
              </h1>
              <p className="text-sm font-light">
                123 ABS Street, Uni 21, Bangladesh
              </p>
              <p className="text-sm font-light">+88 123456789</p>
              <p className="text-sm font-light">Mon - Fri: 08:00 - 22:00</p>
              <p className="text-sm font-light">Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
          <div className="px-5 w-full text-center bg-darkBlack h-96 flex justify-center items-center">
            <div className="flex flex-col gap-10">
              <h1 className="text-2xl font-normal uppercase">Follow us</h1>
              <p className="text-sm font-light">Join us on social media</p>
              <div className="flex gap-5 items-center justify-center text-center">
                <a
                  className="p-1.5 group"
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="text-2xl group-hover:text-blue-700 transition-all duration-200 ease-linear" />
                </a>
                <a
                  className="p-1.5 group"
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="text-2xl group-hover:text-pink-500 transition-all duration-200 ease-linear" />
                </a>
                <a
                  className="p-1.5 group"
                  href="https://yelp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYelp className="text-2xl group-hover:text-yellow-500 transition-all duration-200 ease-linear" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-5 text-sm">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved by{" "}
            <a
              href="https://risosi.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-red-600 transition-all duration-200 ease-linear"
            >
              risosi.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
