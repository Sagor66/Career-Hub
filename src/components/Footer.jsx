import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-24 mt-32">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-6 gap-10 border-b-2 pb-16 mb-8 border-gray-600">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">Job-Search</h3>
            <p className="text-gray-400 mb-4">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <div className="flex items-center justify-start gap-5">
              <FontAwesomeIcon
                className="bg-white text-blue-500 px-4 py-3 rounded-full"
                icon={faFacebookF}
              />
              <FontAwesomeIcon className="bg-white text-sky-500 px-3 py-3 rounded-full" icon={faTwitter} />
              <FontAwesomeIcon
                className="bg-white text-red-500 px-3 py-3 rounded-full"
                icon={faInstagram}
              />
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium text-lg mb-2">Company</h4>
            <p className="text-gray-400 mb-2">Work</p>
            <p className="text-gray-400 mb-2">About Us</p>
            <p className="text-gray-400 mb-2">Latest News</p>
            <p className="text-gray-400 mb-2">Careers</p>
          </div>
          <div>
            <h4 className="text-white font-medium text-lg mb-2">Product</h4>
            <p className="text-gray-400 mb-2">Prototype</p>
            <p className="text-gray-400 mb-2">Plans&Pricing</p>
            <p className="text-gray-400 mb-2">Customers</p>
            <p className="text-gray-400 mb-2">Integrations</p>
          </div>
          <div>
            <h4 className="text-white font-medium text-lg mb-2">Support</h4>
            <p className="text-gray-400 mb-2">Help Desk</p>
            <p className="text-gray-400 mb-2">Sales</p>
            <p className="text-gray-400 mb-2">Become a partner</p>
            <p className="text-gray-400 mb-2">Developers</p>
          </div>
          <div>
            <h4 className="text-white font-medium text-lg mb-2">Contact</h4>
            <p className="text-gray-400 mb-2">524 Broadway , NYC</p>
            <p className="text-gray-400 mb-2">+1 777 - 978 - 5570</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">&copy; 2023 Job-Search. All Rights Reserved</p>
          <p className="text-gray-500">Powered by Job-Search</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
