import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {currentYear} SwiftLogin. All rights reserved.
        </p>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;