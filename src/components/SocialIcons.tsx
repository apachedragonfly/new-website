import React from 'react';
import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaXTwitter,
  FaInstagram,
  FaTiktok
} from 'react-icons/fa6'; // Using fa6 for the latest X icon

interface SocialLink {
  href: string;
  icon: React.ElementType;
  label: string;
  colorClass: string;
}

const socialLinks: SocialLink[] = [
  { href: "https://open.spotify.com/artist/6LgLJCfIgQ5VDL8J9F1sfv?si=sSQE05U3THStGVu0FuQkeg", icon: FaSpotify, label: "Spotify", colorClass: "hover:text-[#1DB954]" },
  { href: "https://music.apple.com/ca/artist/jeremy-craig-saunders/1715078505", icon: FaApple, label: "Apple Music", colorClass: "hover:text-[#A2AAAD]" }, // Color can be more specific if desired
  { href: "https://www.youtube.com/@jeremycraigsaunders", icon: FaYoutube, label: "YouTube", colorClass: "hover:text-[#FF0000]" },
  { href: "https://x.com/JeremyOnX", icon: FaXTwitter, label: "X (Twitter)", colorClass: "hover:text-[#1DA1F2]" }, // Or black for X
  { href: "https://instagram.com/jeremyspictures", icon: FaInstagram, label: "Instagram", colorClass: "hover:text-[#E1306C]" },
  { href: "https://tiktok.com/jeremystoks", icon: FaTiktok, label: "TikTok", colorClass: "hover:text-[#00f2ea]" }, // TikTok has a few common colors
];


const SocialIcons: React.FC = () => {
  return (
    <div className="flex justify-center space-x-3">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`text-2xl text-eaeaea transition-colors duration-200 ${social.colorClass}`}
        >
          <social.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons; 