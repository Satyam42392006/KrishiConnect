'use client'; // Don't worry about this line - Next.js needs it!

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; // Import the top navbar
import Hero from '../components/Hero'; // Import the big hero section
import Card from '../components/Card'; // Import the card component
import Footer from '../components/Footer'; // Import the bottom footer
import websiteContent from '../components/content'; // Import our settings file!
import { Loader, useToast } from '../components/ui'; // Import loader and toast hook!

// ========================================
// This is the HOME PAGE!
// ========================================
function HomePage() {
  // State for services, loading, error
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToast(); // Get addToast function from our ToastProvider!

  // Fetch services from backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/services');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        setServices(data);
        addToast({ type: 'success', message: 'Services loaded successfully!' }); // Show success toast!
      } catch (err) {
        addToast({ type: 'error', message: err.message }); // Show error toast!
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, [addToast]);

  return (
    <> {/* This is just a wrapper so we can have multiple things at the top level */}
      <Navbar /> {/* Show the navbar */}
      
      <main className="flex-1"> {/* Main content area */}
        <Hero /> {/* Show the big hero section */}

        {/* ========================================
            OUR SERVICES SECTION
            ======================================== */}
        <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800"> 
          <div className="max-w-6xl mx-auto px-4"> 
            <h2 className="text-3xl font-bold text-center mb-10">{websiteContent.servicesTitle}</h2> 
            {loading ? (
              <div className="flex justify-center py-10">
                <Loader size="lg" /> {/* Show our Loader component instead of just text! */}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
                {services.map(service => (
                  <Card 
                    key={service.id}
                    title={service.title} 
                    description={service.description} 
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ========================================
            CONTACT US SECTION
            ======================================== */}
        <section id="contact" className="py-16"> 
          <div className="max-w-4xl mx-auto px-4"> 
            <h2 className="text-3xl font-bold text-center mb-10">{websiteContent.contactTitle}</h2> 
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm"> 
              <p className="text-gray-700 dark:text-gray-300 mb-6">Have a question? We'd love to hear from you!</p> 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
                <div> 
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label> 
                  <p className="text-gray-600 dark:text-gray-400">{websiteContent.contactEmail}</p> 
                </div>
                <div> 
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label> 
                  <p className="text-gray-600 dark:text-gray-400">{websiteContent.contactPhone}</p> 
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
