// src/components/FAQ.jsx
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';



export default function FAQ({items}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-6">
            {items.map((item, index) => (
            <div key={index} className="border rounded-xl shadow-md overflow-hidden">
                <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-gray-800 hover:bg-gray-50 transition"
                >
                {item.question}
                <ChevronDownIcon
                    className={`h-6 w-6 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                    }`}
                />
                </button>
                {openIndex === index && (
                <div className="px-6 pb-5 text-base text-gray-700 bg-gray-50">
                    {item.answer}
                </div>
                )}
            </div>
            ))}
        </div>
    </div>

  );
}
