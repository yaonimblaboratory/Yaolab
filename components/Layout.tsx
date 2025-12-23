import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Beaker, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { siteConfig } from '../lib/content';
import { MediaDisplay } from './MediaDisplay';
import clsx from 'clsx';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              {siteConfig.logo ? (
                <MediaDisplay 
                  src={siteConfig.logo} 
                  alt="Lab Logo" 
                  className="h-10 w-auto max-w-[120px] object-contain rounded-md" 
                />
              ) : (
                <div className="bg-primary-900 text-white p-1.5 rounded-md group-hover:bg-primary-800 transition-colors">
                  <Beaker size={24} />
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-neutral-900">{siteConfig.name}</span>
                <span className="text-xs text-neutral-500 uppercase tracking-wider">{siteConfig.institution}</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {siteConfig.navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    clsx(
                      "text-sm font-medium transition-colors hover:text-primary-600",
                      isActive ? "text-primary-700 font-semibold" : "text-neutral-600"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-600 hover:text-neutral-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-100 bg-white">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {siteConfig.navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      "block px-3 py-3 rounded-md text-base font-medium",
                      isActive ? "bg-primary-50 text-primary-700" : "text-neutral-700 hover:bg-neutral-50"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-50 border-t border-neutral-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Identity */}
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-4">{siteConfig.name}</h3>
              <p className="text-neutral-600 mb-4 max-w-xs">{siteConfig.description}</p>
              <div className="flex space-x-4">
                {siteConfig.footer.socials.map(social => (
                  <a key={social.platform} href={social.url} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-primary-600 transition-colors">
                    {social.platform}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Contact */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-neutral-600">
                  <MapPin size={18} className="mr-2 mt-0.5 text-neutral-400 shrink-0" />
                  <span>{siteConfig.footer.address}</span>
                </li>
                <li className="flex items-center text-neutral-600">
                  <Mail size={18} className="mr-2 text-neutral-400 shrink-0" />
                  <a href={`mailto:${siteConfig.footer.email}`} className="hover:text-primary-600">{siteConfig.footer.email}</a>
                </li>
                <li className="flex items-center text-neutral-600">
                  <Phone size={18} className="mr-2 text-neutral-400 shrink-0" />
                  <span>{siteConfig.footer.phone}</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">Explore</h3>
              <ul className="space-y-2">
                {siteConfig.navLinks.slice(1).map(link => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-neutral-600 hover:text-primary-600 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div 
            className="mt-12 pt-8 border-t border-neutral-200 text-center text-sm text-neutral-500 select-none hover:text-neutral-800 transition-colors cursor-default"
            onDoubleClick={() => navigate('/admin')}
            title="Double click to access admin"
          >
            &copy; {new Date().getFullYear()} {siteConfig.institution}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};