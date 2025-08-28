'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { questions } from '../../lib/questions';
import { content } from '../../lib/content';

function ScorePageContent() {
  const searchParams = useSearchParams();
  const [score, setScore] = useState<number | null>(null);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const [shareDetails, setShareDetails] = useState(false);

  useEffect(() => {
    const scoreParam = searchParams.get('score');
    const dataParam = searchParams.get('data');
    const shareParam = searchParams.get('share');
    
    if (scoreParam) {
      setScore(parseInt(scoreParam));
    }
    
    if (dataParam) {
      const bigintValue = BigInt(dataParam);
      const items = new Array(100).fill(false);
      for (let i = 0; i < 100; i++) {
        items[i] = (bigintValue & (1n << BigInt(i))) !== 0n;
      }
      setCheckedItems(items);
    }
    
    // If share=1 parameter is present, automatically show details
    if (shareParam === '1' && dataParam) {
      setShareDetails(true);
    }
  }, [searchParams]);

  const getScoreMessage = (score: number) => {
    if (score >= 90) return content.scoreMessages.veryPure;
    if (score >= 70) return content.scoreMessages.prettyPure;
    if (score >= 50) return content.scoreMessages.moderate;
    if (score >= 30) return content.scoreMessages.experienced;
    if (score >= 10) return content.scoreMessages.veryExperienced;
    return content.scoreMessages.veteran;
  };

  if (score === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{content.score.noScoreTitle}</h1>
          <p className="text-gray-600 mb-8">{content.score.noScoreMessage}</p>
          <Link 
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            {content.score.takeTestButton}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.score.title}</h1>
          
          <div className="mb-8">
            <div className="text-6xl font-bold text-blue-600 mb-4">{score}</div>
            <div className="text-xl text-gray-600 mb-4">{getScoreMessage(score)}</div>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-4">
              {content.score.description}
            </p>
            <p className="text-sm text-gray-500">
              {content.score.disclaimer}
            </p>
          </div>

          {checkedItems.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <input
                  type="checkbox"
                  id="shareDetails"
                  checked={shareDetails}
                  onChange={(e) => setShareDetails(e.target.checked)}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="shareDetails" className="text-gray-700">
                  {content.score.shareDetailsLabel}
                </label>
              </div>
              
              {shareDetails && (
                <div className="bg-gray-100 rounded-lg p-4 max-h-60 overflow-y-auto">
                  <h3 className="font-bold text-gray-900 mb-3">{content.score.checkedItemsTitle}</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {checkedItems.map((checked, index) => 
                      checked && (
                        <li key={index} className="flex items-start">
                          <span className="font-medium text-gray-500 mr-2">{index + 1}.</span>
                          {questions[index]}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-center space-x-4">
            <Link 
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
            >
              {content.score.takeAgainButton}
            </Link>
            <button
              onClick={() => {
                let shareUrl = window.location.origin;
                let shareText = content.score.shareText.basic(score, shareUrl);
                
                if (shareDetails && checkedItems.length > 0) {
                  const dataParam = searchParams.get('data');
                  if (dataParam) {
                    shareUrl = `${window.location.origin}/score?score=${score}&data=${dataParam}&share=1`;
                    shareText = content.score.shareText.detailed(score, shareUrl);
                  }
                }
                
                if (navigator.share) {
                  navigator.share({
                    title: content.score.shareTitle,
                    text: shareText,
                    url: shareUrl,
                  });
                } else {
                  navigator.clipboard.writeText(shareText);
                  alert(content.score.clipboardMessage);
                }
              }}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
            >
              {content.score.shareButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ScorePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your score...</p>
        </div>
      </div>
    }>
      <ScorePageContent />
    </Suspense>
  );
}