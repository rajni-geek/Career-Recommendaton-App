import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <Briefcase size={28} className="text-primary-600 mr-2" />
              <span className="font-bold text-xl tracking-tight">
                CareerPath
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Discover the right career path for your unique skills and interests.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Twitter size={20} />} href="https://twitter.com" />
              <SocialLink icon={<Facebook size={20} />} href="https://facebook.com" />
              <SocialLink icon={<Instagram size={20} />} href="https://instagram.com" />
              <SocialLink icon={<Linkedin size={20} />} href="https://linkedin.com" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Explore</h3>
            <FooterLinkList 
              links={[
                { label: "Career Assessment", to: "/assessment" },
                { label: "Career Database", to: "/careers" },
                { label: "Industries", to: "/industries" },
                { label: "Salary Calculator", to: "/salary" },
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <FooterLinkList 
              links={[
                { label: "Career Blog", to: "/blog" },
                { label: "Learning Paths", to: "/learning" },
                { label: "Resume Builder", to: "/resume" },
                { label: "Interview Tips", to: "/interview" },
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <FooterLinkList 
              links={[
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
                { label: "Privacy Policy", to: "/privacy" },
                { label: "Terms of Service", to: "/terms" },
              ]}
            />
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} CareerPath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

interface FooterLinkListProps {
  links: Array<{
    label: string;
    to: string;
  }>;
}

const FooterLinkList: React.FC<FooterLinkListProps> = ({ links }) => {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.to}>
          <Link 
            to={link.to}
            className="text-gray-600 hover:text-primary-500 transition-colors duration-300"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Footer;