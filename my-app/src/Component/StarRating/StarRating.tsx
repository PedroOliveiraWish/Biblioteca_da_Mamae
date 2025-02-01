import React from 'react';

const StarRating = ({rating}: {rating: number}) => {
  // Ensure the rating is between 1 and 5
  const validRating = Math.max(1, Math.min(5, rating));

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {[...Array(5)].map((_, index) => {
        return (
          <span key={index}>
            {index < validRating ? '★' : '☆'}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;