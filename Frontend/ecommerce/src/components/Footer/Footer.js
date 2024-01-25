import React from "react";
import "./Footer.css";
import shiftcart_logo from "../../assets/ecommerce.svg";

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

import visa from "../../assets/payments-icons/visa.svg";
import paypal from "../../assets/payments-icons/paypal.svg";
import master_card from "../../assets/payments-icons/master-card.svg";
import gpay from "../../assets/payments-icons/gpay.svg";
import discover from "../../assets/payments-icons/discover.svg";
import dinners_club from "../../assets/payments-icons/dinners-club.svg";
import apple_pay from "../../assets/payments-icons/apple-pay.svg";

const Footer = () => {
  const catagoryLinks = [
    { catagoryName: "Mens-shoes", link: "" },
    { catagoryName: "Mens-shirts", link: "" },
    { catagoryName: "Mens-watches", link: "" },
    { catagoryName: "Womens-watches", link: "" },
    { catagoryName: "Womens-bags", link: "" },
    { catagoryName: "Smartphones", link: "" },
    { catagoryName: "SHOP ALL", link: "" },
  ];
  const paymentsicons = [
    { src: visa },
    { src: paypal },
    { src: master_card },
    { src: discover },
    { src: gpay },
    { src: dinners_club },
    { src: apple_pay },
  ];

  const footerCatagoryLinks = catagoryLinks.map((ele, index) => {
    return (
      <li key={index} style={{ marginBottom: 2 }}>
        <a className="ft-links" href={ele.link}>
          {ele.catagoryName}
        </a>
      </li>
    );
  });
  const socialContacts = (
    <ul style={{}} className="ft-social-icons-list ft-list">
      <li className="ft-social-icons-item">
        <a href="">
          <FaFacebookSquare
            size={24}
            title="Facebook"
            className="ft-facebook-icon ft-social-icon"
          />
        </a>
      </li>
      <li className="ft-social-icons-item">
        <FaInstagram
          size={24}
          title="Instagram"
          className="ft-instagram-icon ft-social-icon"
        />
      </li>
      <li className="ft-social-icons-item">
        <FaXTwitter
          size={24}
          title="XTwitter"
          className="ft-xtwitter-icon ft-social-icon"
        />
      </li>
      <li className="ft-social-icons-item">
        <FaYoutube
          size={24}
          title="YouTube"
          className="ft-youtube-icon ft-social-icon"
        />
      </li>
    </ul>
  );
  const helpList = (
    <ul className="ft-list">
      <li>
        <a href="" className="ft-links">
          Payments
        </a>
      </li>
      <li>
        <a href="" className="ft-links">
          Shipping
        </a>
      </li>
      <li>
        <a href="" className="ft-links">
          Returns/Exchange
        </a>
      </li>
      <li>
        <a href="" className="ft-links">
          FAQ
        </a>
      </li>
    </ul>
  );
  const paymentsIconsList = (
    <ul className="ft-list ft-payments-list">
      {paymentsicons.map((ele, index) => {
        return (
          <li key={index} className="m-2">
            <img src={ele.src} alt="" />
          </li>
        );
      })}
    </ul>
  );
  return (
    <div className="footer-container">
      <div className="container ft-container-1">
        <div className=" ft-logo-container">
          <img src={shiftcart_logo} alt="" height={100} width={100} />
        </div>
        <div className="ft-line" style={{ marginLeft: 15 }} />
        <div className="ft-online-shopping ">
          <h6 className="ft-cat-h6">Online Shopping</h6>
          <ul
            style={{
              paddingInlineStart: "16px",
            }}
            className="ft-list"
          >
            {footerCatagoryLinks}{" "}
          </ul>
        </div>
        <div className="ft-line" style={{ marginLeft: 35 }} />
        <div className="ft-social-container">
          <h6 className="ft-cat-h6">Social Contacts</h6>
          {socialContacts}
        </div>
        <div className="ft-line" style={{ marginLeft: 35 }} />
        <div className="ft-help-container">
          <h6 className="ft-cat-h6">Help</h6>
          {helpList}
        </div>
        <div className="ft-line" style={{ marginLeft: 35 }} />
        <div className="ft-about-container">
          <h6 className="ft-cat-h6">About</h6>
          <ul className="ft-list">
            <li>
              <a href="" className="ft-links">
                Contact us
              </a>
            </li>
            <li>
              <a href="" className="ft-links">
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="ft-container-2 p-2 ">
        <div className="ft-payments">{paymentsIconsList}</div>
        <div className="mb-3">
          <span className="" style={{ fontSize: 14 }}>
            &copy; 2023 SwiftCart, Inc. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
