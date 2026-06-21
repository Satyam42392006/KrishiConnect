'use client'; // Don't worry about this line - Next.js needs it!

import Navbar from '../components/Navbar'; // Import the top navbar
import Hero from '../components/Hero'; // Import the big hero section
import Card from '../components/Card'; // Import the card component
import Footer from '../components/Footer'; // Import the bottom footer
import websiteContent from '../components/content'; // Import our settings file!

// ========================================
// This is the HOME PAGE!
// ========================================
function HomePage() {
  // Get our list of services from the settings file
  let servicesList = websiteContent.services;

  // Make a card for each service
  let firstServiceCard = (
    <Card 
      title={servicesList[0].title} 
      description={servicesList[0].description} 
    />
  );
  let secondServiceCard = (
    <Card 
      title={servicesList[1].title} 
      description={servicesList[1].description} 
    />
  );
  let thirdServiceCard = (
    <Card 
      title={servicesList[2].title} 
      description={servicesList[2].description} 
    />
  );

  return (
    <> {/* This is just a wrapper so we can have multiple things at the top level */}
      <Navbar /> {/* Show the navbar */}
      
      <main className="flex-1"> {/* Main content area */}
        <Hero /> {/* Show the big hero section */}

        {/* ========================================
            OUR SERVICES SECTION
            ======================================== */}
        <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800"> 
          {/* py-16 = lots of padding at top and bottom */}
          {/* bg-gray-50 = very light gray background */}

          <div className="max-w-6xl mx-auto px-4"> 
            {/* max-w-6xl = don't let it get too wide */}
            {/* mx-auto = center it */}
            {/* px-4 = padding on left and right */}

            <h2 className="text-3xl font-bold text-center mb-10">{websiteContent.servicesTitle}</h2> 
            {/* text-3xl = big text */}
            {/* font-bold = bold */}
            {/* text-center = center the text */}
            {/* mb-10 = lots of space below the title */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
              {/* grid = arrange things in a grid */}
              {/* grid-cols-1 = 1 column on tiny screens */}
              {/* md:grid-cols-3 = 3 columns on bigger screens */}
              {/* gap-8 = lots of space between cards */}

              {firstServiceCard} {/* Show first service card */}
              {secondServiceCard} {/* Show second service card */}
              {thirdServiceCard} {/* Show third service card */}

            </div>

          </div>

        </section>

        {/* ========================================
            CONTACT US SECTION
            ======================================== */}
        <section id="contact" className="py-16"> 
          {/* py-16 = lots of padding at top and bottom */}

          <div className="max-w-4xl mx-auto px-4"> 
            {/* max-w-4xl = don't let it get too wide */}
            {/* mx-auto = center it */}
            {/* px-4 = padding on left and right */}

            <h2 className="text-3xl font-bold text-center mb-10">{websiteContent.contactTitle}</h2> 
            {/* text-3xl = big text */}
            {/* font-bold = bold */}
            {/* text-center = center the text */}
            {/* mb-10 = lots of space below the title */}

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm"> 
              {/* bg-gray-50 = very light gray background */}
              {/* p-8 = lots of padding */}
              {/* rounded-lg = rounded corners */}
              {/* shadow-sm = tiny shadow */}

              <p className="text-gray-700 dark:text-gray-300 mb-6">Have a question? We'd love to hear from you!</p> 
              {/* mb-6 = space below this text */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
                {/* grid = 2 columns on bigger screens */}
                {/* gap-6 = space between columns */}

                <div> 
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label> 
                  {/* block = take up full width */}
                  {/* text-sm = small text */}
                  {/* font-medium = medium thickness */}
                  {/* mb-2 = space below label */}

                  <p className="text-gray-600 dark:text-gray-400">{websiteContent.contactEmail}</p> 
                  {/* Show email from settings file */}
                </div>

                <div> 
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label> 
                  <p className="text-gray-600 dark:text-gray-400">{websiteContent.contactPhone}</p> 
                  {/* Show phone from settings file */}
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer /> {/* Show the footer */}
    </>
  );
}

export default HomePage; // This lets Next.js use this as the home page!
