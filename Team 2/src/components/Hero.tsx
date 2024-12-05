import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1567129937968-cdad8f07e2f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-primary/40 backdrop-blur-[1px]" />
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Oli-4wheel drive
          </h1>
          <p className="text-xl sm:text-2xl mb-8 drop-shadow-md max-w-2xl mx-auto">
            Verse, op maat gemaakte gerechten zonder het gedoe
          </p>
          <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Bestel Nu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;