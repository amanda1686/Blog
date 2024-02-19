import React from 'react';
import perfil from '../../public/img/perfil.png'

export default function About() {
  return (
    <div className="container mx-auto p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48 rounded-full mt-10 ml-4" src={perfil} alt="Foto de perfil" />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">About Me</h1>
            <p className="mt-2 text-gray-500">
              I'm is a coffee enthusiast and avid reader with a deep passion for both indulgences. Every morning, her day begins with the rich aroma of freshly brewed coffee, a ritual that awakens her senses and sets the tone for the day ahead. She takes pleasure in experimenting with different coffee beans, brewing methods, and flavors, delighting in the intricate nuances of each cup.
            </p>
            <p className="mt-2 text-gray-500">
              In the quiet moments of the evening, you'll often find me curled up in a cozy corner with a book in hand, immersed in a captivating story or exploring the depths of knowledge within the pages of a thought-provoking novel. She finds solace and joy in the world of literature, where imagination knows no bounds and every turn of the page offers a new adventure.
            </p>
            <p className="mt-2 text-gray-500">
              For me, coffee and books are not merely indulgences but integral parts of her life—a source of inspiration, comfort, and endless fascination. Whether savoring a freshly brewed espresso or getting lost in the pages of a beloved classic, she cherishes the simple pleasures that enrich her days and fill her heart with warmth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

