// ========================================
// This is the FOOTER component!
// It's the bar at the BOTTOM of every page!
// ========================================
import websiteContent from './content';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto"> 
      {/* bg-gray-900 = dark gray background */}
      {/* text-white = white text */}
      {/* py-8 = padding at top and bottom */}
      {/* mt-auto = push this footer to the bottom of the page */}

      <div className="max-w-6xl mx-auto px-4"> 
        {/* max-w-6xl = don't let it get too wide */}
        {/* mx-auto = center it on the page */}
        {/* px-4 = padding on left and right */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4"> 
          {/* flex-col = stack top-to-bottom on tiny screens */}
          {/* md:flex-row = side-by-side on bigger screens */}
          {/* justify-between = put space between things */}
          {/* items-center = line up in the middle */}
          {/* gap-4 = space between things */}

          <div className="text-gray-400"> 
            {/* text-gray-400 = light gray text */}
            © 2026 {websiteContent.siteName}. All rights reserved. 
          </div>

          <div className="flex gap-6"> 
            {/* flex = line things up next to each other */}
            {/* gap-6 = space between links */}

            <a href="https://github.com/satyam42392006" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              GitHub
            </a>
            {/* target="_blank" = open in a new tab */}

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              LinkedIn
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              Twitter
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
