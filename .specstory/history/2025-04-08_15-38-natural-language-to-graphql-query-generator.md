<!-- Generated by SpecStory -->

# Natural Language to GraphQL Query Generator (2025-04-08 11:38:33)

_**User**_

create a page that enters in natrual language then ues open ai to determine the right query in graph ql

---

_**Assistant**_

I'll help you create a page that takes natural language input and converts it to the appropriate GraphQL query using OpenAI. We'll create a new page called "smart-search" that handles this functionality.

```typescript:src/app/(app)/(private)/smart-search/page.tsx
'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { OpenAI } from 'openai';

interface SearchResults {
  transactions?: any[];
  accounts?: any[];
  // Add other possible result types
}

export default function SmartSearchPage() {
  const [naturalQuery, setNaturalQuery] = useState('');
  const [graphqlQuery, setGraphqlQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<SearchResults | null>(null);

  const handleSearch = async () => {
    try {
      setIsLoading(true);

      // Initialize OpenAI
      const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true // Note: In production, make API calls through backend
      });

      // Convert natural language to GraphQL query
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: `You are a GraphQL query generator. Convert natural language queries into GraphQL queries using this schema:
            - Transactions can be queried with: transactions(filter: TransactionFilter, sort: TransactionSort)
            - Accounts can be queried with: accounts(filter: AccountFilter, sort: AccountSort)
            Only return the GraphQL query, no explanation.`
          },
          {
            role: 'user',
            content: naturalQuery
          }
        ],
        model: 'gpt-3.5-turbo',
      });

      const generatedQuery = completion.choices[0].message.content;
      setGraphqlQuery(generatedQuery || '');

      // Execute the GraphQL query
      if (generatedQuery) {
        const query = gql`${generatedQuery}`;
        // Execute query and set results
        // Implementation depends on your GraphQL client setup
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Smart Search</h1>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            What would you like to know?
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={naturalQuery}
              onChange={(e) => setNaturalQuery(e.target.value)}
              placeholder="e.g., Show me all transactions from last month"
              className="flex-1 p-2 border rounded"
            />
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>

        {graphqlQuery && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Generated Query:</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
              {graphqlQuery}
            </pre>
          </div>
        )}

        {results && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Results:</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
              {JSON.stringify(results, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
```

You'll also need to create an API route to handle the OpenAI requests securely:

```typescript:src/app/api/generate-query/route.ts
import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  try {
    const { naturalQuery } = await request.json();

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are a GraphQL query generator. Convert natural language queries into GraphQL queries using this schema:
          - Transactions can be queried with: transactions(filter: TransactionFilter, sort: TransactionSort)
          - Accounts can be queried with: accounts(filter: AccountFilter, sort: AccountSort)
          Only return the GraphQL query, no explanation.`
        },
        {
          role: 'user',
          content: naturalQuery
        }
      ],
      model: 'gpt-3.5-turbo',
    });

    return NextResponse.json({ query: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to generate query' }, { status: 500 });
  }
}
```

Make sure to add your OpenAI API key to your environment variables:

```text:.env.local
OPENAI_API_KEY=your_openai_api_key_here
```

This implementation:

1. Creates a new page with a text input for natural language queries
2. Uses OpenAI to convert natural language to GraphQL queries
3. Shows the generated GraphQL query
4. Executes the query and displays results
5. Includes error handling and loading states
6. Uses a secure API route for OpenAI calls

To use this page:

1. Install required dependencies:
```bash
npm install openai @apollo/client graphql
```

2. Add the page to your navigation menu
3. Set up your OpenAI API key in the environment variables
4. Customize the system prompt and result handling based on your specific needs

Note: This is a basic implementation. You might want to add:
- Better error handling
- Query result caching
- Input validation
- Rate limiting
- More sophisticated query generation
- Better result formatting
- Type safety for the generated queries

---

_**User**_

wait you misunderstood lets start with creating a ui called graph ql finder. I want someone to be able to use the graphql.ts that was generated in /generated/graphql.ts to determine the right query based on natural language. maybe i need to provide chatgpt with the context. 

---

_**Assistant**_

Ah, I understand now! You want to create a UI that helps users construct GraphQL queries by using natural language, specifically working with your generated GraphQL schema. Let's create a GraphQL Finder component that will help users explore and construct queries based on your schema.

```typescript:src/app/(app)/(private)/graphql-finder/page.tsx
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
```

And here's the API route that will process the natural language query:

```typescript:src/app/api/graphql-finder/route.ts
import { NextResponse } from 'next/server';
import schema from '@/generated/graphql';

const SCHEMA_CONTEXT = `
This is a GraphQL API for financial data. Here are the main types and their important fields:

Transaction {
  id: ID!
  amount: Float!
  date: Date!
  description: String!
  status: TransactionStatus!
  account: Account!
}

Account {
  id: ID!
  name: String!
  balance: Balance
  type: AccountType!
  transactions: TransactionConnection!
}

You can filter transactions with:
- date
- amount
- status (PENDING, POSTED)
- accountIds

You can sort transactions by:
- DATE_ASC (oldest first)
- DATE_DESC (newest first)

Example query:
{
  transactions(
    filter: { 
      date_gte: "2024-01-01",
      amount_gte: 100
    },
    sort: DATE_DESC
  ) {
    nodes {
      id
      amount
      date
      description
    }
  }
}
`;

export async function POST(request: Request) {
  try {
    const { query } = await request.json();

    // Call OpenAI API with your schema context
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a GraphQL query generator. Use the following schema context to generate appropriate queries: ${SCHEMA_CONTEXT}`
          },
          {
            role: 'user',
            content: query
          }
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const suggestedQuery = data.choices[0].message.content;

    return NextResponse.json({ suggestedQuery });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate query' }, 
      { status: 500 }
    );
  }
}
```

This implementation:

1. Creates a clean UI for entering natural language queries
2. Provides the GraphQL schema context to ChatGPT
3. Generates appropriate GraphQL queries based on your schema
4. Includes copy-to-clipboard functionality
5. Shows loading states and error handling

To improve this further, you could:

1. Add more schema context from your `graphql.ts` file
2. Add example queries for common use cases
3. Add a way to execute the generated queries
4. Add syntax highlighting for the generated queries
5. Add a way to modify the generated queries
6. Add validation for the generated queries

Would you like me to implement any of these improvements or would you like to see any other changes?

---



---

