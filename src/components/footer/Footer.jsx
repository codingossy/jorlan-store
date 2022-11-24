import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full  bg-black py-10 text-white ">
      <Link to="/">
        {" "}
        <h1 className="container text-start text-2xl font-semibold text-white py-6">
          Joorlan's Store
        </h1>
      </Link>
      <div className="mb-1 grid w-full grid-cols-2 place-items-center gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-4">
        <ul className="footerList">
          <li className="footerListItem">Countries</li>
          <li className="footerListItem">Regions</li>
          <li className="footerListItem">Cities</li>
          <li className="footerListItem">Districts</li>
          <li className="footerListItem">Airports</li>
          <li className="footerListItem">Hotels</li>
        </ul>
        <ul className="footerList" >
          <li className="footerListItem">Homes </li>
          <li className="footerListItem">loans </li>
          <li className="footerListItem">Returns </li>
          <li className="footerListItem">credits</li>
          <li className="footerListItem">accounts</li>
          <li className="footerListItem">data</li>
        </ul>
        <ul className="footerList" >
          <li className="footerListItem">Walk in </li>
          <li className="footerListItem">stores</li>
          <li className="footerListItem">buy </li>
          <li className="footerListItem">sell </li>
          <li className="footerListItem">hot deals </li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">login </li>
          <li className="footerListItem">register</li>
          <li className="footerListItem">register</li>
          <li className="footerListItem">appointments </li>
          <li className="footerListItem">Agents </li>
        </ul>
       
      </div>
      <div className="socails container mx-auto flex gap-x-4 py-5">
        <IoLogoFacebook size={20} />
        <IoLogoWhatsapp size={20} />
        <IoLogoTwitter size={20} />
        <IoLogoInstagram size={20} />
      </div>
    </footer>
  );
};

export default Footer;
