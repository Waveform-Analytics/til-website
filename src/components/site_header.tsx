import React from "react";
import { Github, Globe } from "lucide-react";

interface SiteHeaderProps {
  // Empty for now, add props here as needed
  className?: string; // Added as an example of a valid prop
}

const SiteHeader: React.FC<SiteHeaderProps> = () => {
  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-8 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-lg font-bold text-gray-900">TIL</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/michellejw/til-website"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Source</span>
            </a>
            <a
              href="https://michw.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Website</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

// Add a proper type for the footer props instead of an empty interface
type SiteFooterProps = {
  className?: string; // Added as an example of a valid prop
};

const SiteFooter: React.FC<SiteFooterProps> = () => {
  return (
    <footer className="border-t bg-white mt-12">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Michelle Weirathmueller.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/michellejw/til-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://michw.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { SiteHeader, SiteFooter };
