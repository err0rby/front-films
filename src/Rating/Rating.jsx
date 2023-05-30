import React, { useState, useEffect } from 'react';

const Rating = () => {
    const [rating, setRating] = useState(parseInt(localStorage.getItem('rating')) || 0);
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(() => {
        localStorage.setItem('rating', rating);
    }, [rating]);

    const onMouseEnter = (index) => {
        setHoverRating(index);
    };

    const onMouseLeave = () => {
        setHoverRating(0);
    };

    const onSaveRating = (index) => {
        setRating(index);
    };

    const renderStar = (index) => {
        const starClass = index <= (hoverRating || rating) ? 'star active' : 'star';
        return (
            <span
            
                className={starClass}
                style={{fontSize: '2rem', cursor: 'pointer', color: 'gold'}}
                key={index}
                onMouseEnter={() => onMouseEnter(index)}
                onMouseLeave={() => onMouseLeave()}
                onClick={() => onSaveRating(index)}
            >
                &#9733;
            </span>
        );
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((index) => renderStar(index))}
            <h3>Вы поставили оценку {rating}</h3>
        </div>
    );
};

export default Rating;
