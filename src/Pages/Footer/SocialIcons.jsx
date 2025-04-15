import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const SocialIcons = () => {
  const icons = [
    { icon: <FaFacebook />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
    { icon: <FaWhatsapp />, link: "#" },
    { icon: <FaLinkedin />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
  ];

  return (
    <div className="text-teal-500">
      {icons.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          className="p-2 text-base sm:text-xl cursor-pointer inline-flex items-center
          rounded-full bg-gray-700 mx-1.5 hover:text-gray-100 hover:bg-teal-500
          duration-300"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
