'use client'

import { gql, useQuery, useQuilttSession } from '@quiltt/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import type { Transaction } from '@/generated/graphql'

const QUERY = gql`query Query {
  accounts {
    id
    name
    transactions {
      edges {
        node {
          id
          description
          amount
          date
        }
      }
    }
  }
}`

const Transactions = () => {
  const [mounted, setMounted] = useState(false)
  const { data, loading, error } = useQuery<{ 
    accounts: Array<{ 
      id: string
      name: string
      transactions: { 
        edges: Array<{ 
          node: Partial<Transaction> 
        }> 
      } 
    }> 
  }>(QUERY)
  const { session } = useQuilttSession()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    if (!session) {
      router.push('/login')
    }
  }, [session, router])

  if (!session || !mounted) {
    return null
  }

  const transactions = data?.accounts?.flatMap(account => 
    account.transactions?.edges?.map(edge => ({
      ...edge.node,
      account: { name: account.name }
    })) || []
  ) || []

  const hasAccounts = data?.accounts && data.accounts.length > 0
  const hasTransactions = transactions.length > 0

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
          <p className="mt-2 text-lg text-gray-600">View your recent transactions</p>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-6">
            {loading ? (
              <div className="text-gray-500">Loading transactions...</div>
            ) : error ? (
              <div className="text-red-500">Error loading transactions: {error.message}</div>
            ) : !hasAccounts ? (
              <div className="text-gray-500">No accounts found. Please connect a bank account to view transactions.</div>
            ) : !hasTransactions ? (
              <div className="text-gray-500">No transactions found in your connected accounts.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(transaction.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {transaction.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.account?.name}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          (transaction.amount || 0) >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          ${Math.abs(transaction.amount || 0).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions
