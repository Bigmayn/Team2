import React from 'react';
import { Clock, Leaf, Truck } from 'lucide-react';
import type { ValuePropositionType } from '../types';

const values: ValuePropositionType[] = [
  {
    id: 1,
    title: 'Snel & Gemak',
    description: 'Bespaar tijd met onze efficiënte bezorgservice',
    icon: 'clock'
  },
  {
    id: 2,
    title: 'Vers & Gezond',
    description: 'Dagelijks verse ingrediënten van lokale leveranciers',
    icon: 'leaf'
  },
  {
    id: 3,
    title: 'Duurzaam',
    description: 'Milieuvriendelijke bezorging en verpakkingen',
    icon: 'truck'
  }
];

const IconComponent = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'clock':
      return <Clock className="h-8 w-8 text-green-600" />;
    case 'leaf':
      return <Leaf className="h-8 w-8 text-green-600" />;
    case 'truck':
      return <Truck className="h-8 w-8 text-green-600" />;
    default:
      return null;
  }
};

const ValueProposition = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.id} className="text-center">
              <div className="flex justify-center mb-4">
                <IconComponent icon={value.icon} />
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;