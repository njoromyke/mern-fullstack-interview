import { useState } from "react";

const StarIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill={filled !== false ? "#FBBF24" : "none"}
    stroke="#FBBF24"
    className="w-full h-full"
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
      clipRule="evenodd"
    />
  </svg>
);

const Rating = ({ rating, size, readonly }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (newRating) => {
    setHoverRating(newRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className={`flex w-24`}>
      {[...Array(5)].map((_, index) => {
        const starNumber = index + 1;
        let filled = false;

        // Check if the current star should be filled
        if (!readonly && hoverRating > 0) {
          filled = starNumber <= hoverRating;
        } else {
          filled = starNumber <= rating;
        }

        // If we need to display a half-star, override the filled value
        if (starNumber === Math.ceil(rating) && rating % 1 !== 0) {
          filled = "half";
        }

        return (
          <div
            key={index}
            className={`cursor-pointer`}
            onMouseEnter={() => handleMouseEnter(starNumber)}
            onMouseLeave={handleMouseLeave}
          >
            <StarIcon filled={filled} />
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
