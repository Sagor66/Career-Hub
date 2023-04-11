import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-sky-50 to-blue-50">
        <div className="max-w-[1600px] min-h-[300px] mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 text-center pt-28">
            Blog
          </h1>
        </div>
      </div>
      <div className='max-w-[1600px] mx-auto my-32'>
        <div>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>When should you use context API?</h2>
          <p className='mb-8'>Answer: When we have to use prop drilling that time context API comes in handy</p>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>What is a custom hook?</h2>
          <p className='mb-8'>Answer: A custom hook is a hook that is created by the developer according to his/her needs. It can be created using multiple in-built hooks</p>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>What is useRef?</h2>
          <p className='mb-8'>Answer: useRef is a hook that allows us to create a mutable reference to a DOM element or any other value persists across renders</p>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>What is useMemo?</h2>
          <p className='mb-8'>Answer: useMemo is a hook that allows us to memorize the result od a function call and avoid unnecessary re-computations</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;