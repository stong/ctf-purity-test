'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '../lib/questions';
import { content } from '../lib/content';

export default function Home() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(100).fill(false));
  const router = useRouter();

  const score = useMemo(() => {
    const checkedCount = checkedItems.filter(Boolean).length;
    return 100 - checkedCount;
  }, [checkedItems]);

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleSubmit = () => {
    let bigintValue = 0n;
    for (let i = 0; i < checkedItems.length; i++) {
      if (checkedItems[i]) {
        bigintValue |= (1n << BigInt(i));
      }
    }
    router.push(`/score?score=${score}&data=${bigintValue.toString()}`);
  };

  const handleReset = () => {
    setCheckedItems(new Array(100).fill(false));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
          <p className="text-gray-600 mb-4">
            {content.main.subtitle}
          </p>
          <p className="text-sm text-gray-500 italic">
            {content.main.description}
          </p>
        </header>


        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={index} className="flex items-start space-x-3 hover:bg-gray-50 rounded">
                <input
                  type="checkbox"
                  id={`question-${index}`}
                  checked={checkedItems[index]}
                  onChange={() => handleCheckboxChange(index)}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label 
                  htmlFor={`question-${index}`} 
                  className="flex-1 text-gray-700 cursor-pointer"
                >
                  <span className="font-medium text-gray-500 mr-2">{index + 1}.</span>
                  {question}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            {content.main.submitButton}
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            {content.main.resetButton}
          </button>
        </div>

        <footer className="text-center mt-6 text-gray-500 text-sm">
          <p>{content.main.footer}</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/stong/ctf-purity-test">View me on GitHub</a>
            <a href="https://x.com/gf_256/status/1206393845497376768">Original Tweet</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
