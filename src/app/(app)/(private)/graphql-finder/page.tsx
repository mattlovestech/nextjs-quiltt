'use client';

import { useState } from 'react';

export default function GraphQLFinder() {
  const [naturalQuery, setNaturalQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedQuery, setSuggestedQuery] = useState('');

  const handleQueryGeneration = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/graphql-finder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          query: naturalQuery,
        }),
      });

      const data = await response.json();
      setSuggestedQuery(data.suggestedQuery);
    } catch (error) {
      console.error('Error generating query:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">GraphQL Query Finder</h1>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Describe what you want to query
          </label>
          <textarea
            value={naturalQuery}
            onChange={(e) => setNaturalQuery(e.target.value)}
            placeholder="Example: Find all transactions from last month with amounts greater than $100"
            className="w-full h-32 p-3 border rounded-md"
          />
        </div>

        <button
          onClick={handleQueryGeneration}
          disabled={isLoading || !naturalQuery}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Generating...' : 'Generate Query'}
        </button>

        {suggestedQuery && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Suggested GraphQL Query:</h2>
            <div className="bg-gray-50 rounded-md p-4">
              <pre className="whitespace-pre-wrap break-words">
                {suggestedQuery}
              </pre>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(suggestedQuery)}
              className="mt-2 px-3 py-1 text-sm border rounded hover:bg-gray-50"
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 