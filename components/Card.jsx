// ========================================
// This is the CARD component!
// It's a little box that shows a service!
// ========================================
function Card(props) {
  // props are like little packages of info we give to this component!
  let cardTitle = props.title; // This is the title for this card
  let cardDescription = props.description; // This is the description for this card

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"> 
      {/* bg-white = white background */}
      {/* rounded-lg = rounded corners */}
      {/* shadow-md = add a little shadow to make it look 3D */}
      {/* overflow-hidden = hide anything that sticks out */}
      {/* border = add a border line */}
      {/* border-gray-200 = light gray border color */}

      <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center"> 
        {/* h-48 = 48 units tall */}
        {/* bg-gray-100 = very light gray background */}
        {/* flex items-center justify-center = put the emoji in the middle */}

        <span className="text-4xl">📦</span> 
        {/* text-4xl = big emoji! */}
        {/* This is a box emoji! 📦 */}

      </div>

      <div className="p-6"> 
        {/* p-6 = padding of 6 units inside */}

        <h3 className="text-xl font-bold mb-2">{cardTitle}</h3> 
        {/* text-xl = extra large text */}
        {/* font-bold = bold text */}
        {/* mb-2 = a little space below the title */}

        <p className="text-gray-600 dark:text-gray-300">{cardDescription}</p> 
        {/* text-gray-600 = medium gray text */}

      </div>

    </div>
  );
}

export default Card; // This lets other files use this component!
