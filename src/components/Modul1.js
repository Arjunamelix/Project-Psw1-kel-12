import React, { useEffect } from "react";

const lessons = [
    {
        title: 'DINAMIKA ROTASI BENDA TEGAR',
        content: 'Penjelasan mengenai dinamika gerak rotasi, termasuk torsi, momen inersia, dan hukum-hukum Newton.'
    },
];

const Modul1 = () => {
    return (
        <div className="Modul1">
            {lessons.map((lesson, index) => (
                <div key={index} className="lesson">
                     <h2>{lesson.title}</h2>
                     <p>{lesson.content}</p>
                    </div>
            ))}
        </div>    
    );
};

export default Modul1;