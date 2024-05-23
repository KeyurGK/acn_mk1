import React from 'react';

function Card({ form, filled  }) {
  

  return (
    // <div classNameName={`shadow-md rounded-md border p-2 m-2 w-30 h-30 overflow-hidden ${filled ? 'bg-green-300' : 'border-red-300'}`}>
    //   <h5 classNameName="text-sm text-red-500">{form}</h5>
      
    // </div>
    <div>

<a href="#" className="block max-w-sm p-6 bg-white border border-white-500 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{form}</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Kindly fill the form, and click submit it</p>
</a>

    </div>
  );
}

export default Card;
