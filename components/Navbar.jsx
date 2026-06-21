'use client'; // Don't worry about this line - Next.js needs it!

import Link from 'next/link'; // This lets us click links to go to other pages
import websiteContent from './content'; // This imports our "settings" file!

// ========================================
// This is the NAVBAR component!
// It's the bar at the top with links!
// ========================================
function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50"> 
      {/* bg-gray-900 = dark gray background color */}
      {/* text-white = white text color */}
      {/* p-4 = padding (space inside) of 4 units */}

      <div className="max-w-6xl mx-auto flex justify-between items-center"> 
        {/* max-w-6xl = don't let it get too wide */}
        {/* mx-auto = center it on the page */}
        {/* flex = line things up next to each other */}
        {/* justify-between = put space between things */}
        {/* items-center = line things up in the middle */}

        <div className="text-xl font-bold">{websiteContent.siteName}</div> 
        {/* text-xl = extra large text */}
        {/* font-bold = bold text */}
        {/* This shows our website name from the settings file! */}

        <div className="hidden md:flex gap-6"> 
          {/* hidden = hide these links on tiny screens (like phones) */}
          {/* md:flex = show them on bigger screens (like tablets/computers) */}
          {/* gap-6 = put space between the links */}

          <Link href="/" className="hover:text-gray-300">Home</Link> 
          {/* href="/" = go to the home page when clicked */}
          {/* hover:text-gray-300 = turn light gray when you hover the mouse over it */}

          <Link href="/about" className="hover:text-gray-300">About</Link>
          {/* href="/about" = go to the about page */}

          <Link href="/#services" className="hover:text-gray-300">Services</Link>
          {/* href="/#services" = go to the services section on home page */}

          <Link href="/components" className="hover:text-gray-300">Components</Link>
          {/* href="/components" = go to component showcase */}

          <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
          {/* href="/dashboard" = go to the dashboard */}

          <Link href="/#contact" className="hover:text-gray-300">Support</Link>
          {/* href="/#contact" = go to the contact/support section on home page */}

          <Link href="/signin" className="hover:text-gray-300">Sign In</Link>
          {/* href="/signin" = go to the sign in page (was /login) */}

        </div>

        <div className="flex items-center gap-4"> 
          <Link href="/signin" className="hidden md:inline hover:text-gray-300">Sign In</Link>

          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"> 
          {/* w-8 = 8 units wide */}
          {/* h-8 = 8 units tall */}
          {/* rounded-full = make it a circle */}
          {/* bg-gray-700 = medium gray background */}
          {/* flex items-center justify-center = put the emoji in the middle */}

            <span className="text-sm">👤</span> 
          {/* text-sm = small text (the emoji) */}
          {/* This is a little person icon! */}

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar; // This lets other files use this component!
