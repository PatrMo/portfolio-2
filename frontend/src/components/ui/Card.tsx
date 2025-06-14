import Link from 'next/link';
import React from 'react';

type CardProps = {
    image: string;
    title: string;
    description: string;
    link: string;
};

export const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <Link
      href={link}
      className="block p-6 bg-background/60 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-base opacity-90">{description}</p>
    </Link>
  );
};