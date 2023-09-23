import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";

export const social = [
    {
      id: 1,
      child: (
        <>
           <FaTwitter size={30}/>
        </>
      ),
      href: 'https://www.twitter.com/sourcereflect1'
    },
    {
      id: 2,
      child: (
        <>
           <FaWhatsapp size={30}/>
        </>
      ),
      href: 'https://wa.me/message/YL3HPLETTPM5O1?src=qr',
    },
    {
      id: 3,
      child: (
        <>
           <FaInstagram size={30}/>
        </>
      ),
      href: 'https://instagram.com/sourcereflect?igshid=MmIzYWVlNDQ5Yg==',
    },
    {
      id: 4,
      child: (
        <>
           <FaFacebook size={30}/>
        </>
      ),
      href: 'https://www.facebook.com/sourcereflec?mibextid=LQQJ4d',
    },
  ];

  export default social 