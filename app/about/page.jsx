'use client'; // Don't worry about this line - Next.js needs it!

import Navbar from '../../components/Navbar'; // Import navbar
import Footer from '../../components/Footer'; // Import footer
import websiteContent from '../../components/content'; // Import settings

// ========================================
// This is the ABOUT PAGE!
// ========================================
function AboutPage() {
  // Get our features list from settings
  let featuresList = websiteContent.aboutFeatures;

  // Make a feature box for each feature
  let firstFeatureBox = (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"> 
      <h3 className="text-xl font-bold mb-2">{featuresList[0].title}</h3> 
      <p className="text-gray-600 dark:text-gray-300">{featuresList[0].description}</p> 
    </div>
  );
  let secondFeatureBox = (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"> 
      <h3 className="text-xl font-bold mb-2">{featuresList[1].title}</h3> 
      <p className="text-gray-600 dark:text-gray-300">{featuresList[1].description}</p> 
    </div>
  );
  let thirdFeatureBox = (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"> 
      <h3 className="text-xl font-bold mb-2">{featuresList[2].title}</h3> 
      <p className="text-gray-600 dark:text-gray-300">{featuresList[2].description}</p> 
    </div>
  );

  return (
    <>
      <Navbar />

      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">{websiteContent.aboutTitle}</h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            {websiteContent.aboutDescription1}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {websiteContent.aboutDescription2}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {firstFeatureBox}
            {secondFeatureBox}
            {thirdFeatureBox}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;
