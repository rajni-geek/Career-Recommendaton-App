import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Briefcase size={28} className="text-primary-600 mr-2" />
          <span className="font-bold text-xl tracking-tight">
            CareerPath
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" current={location.pathname} label="Home" />
          <NavLink to="/assessment" current={location.pathname} label="Assessment" />
          <NavLink to="/careers" current={location.pathname} label="Explore Careers" />
          <NavLink to="/dashboard" current={location.pathname} label="Dashboard" />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            <MobileNavLink to="/" label="Home" onClick={toggleMobileMenu} />
            <MobileNavLink to="/assessment" label="Assessment" onClick={toggleMobileMenu} />
            <MobileNavLink to="/careers" label="Explore Careers" onClick={toggleMobileMenu} />
            <MobileNavLink to="/dashboard" label="Dashboard" onClick={toggleMobileMenu} />
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  current: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, current }) => {
  const isActive = current === to || (to !== '/' && current.startsWith(to));
  
  return (
    <Link
      to={to}
      className={`transition-colors duration-300 py-2 ${
        isActive 
          ? 'text-primary-600 font-semibold' 
          : 'text-gray-700 hover:text-primary-500'
      }`}
    >
      {label}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  label: string;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label, onClick }) => {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-primary-500 font-medium py-2"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;