'use client'

import { gql, useQuery, useQuilttSession } from '@quiltt/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

import type { Account } from '@/generated/graphql'

const QUERY = gql`query Query {
  accounts {
    id
    name
    balance {
      current
    }
  }
}`

const Dashboard = () => {
  const { data, loading } = useQuery<{ accounts: Array<Partial<Account>> }>(QUERY)
  const { session } = useQuilttSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/login')
    }
  }, [session, router])

  if (!session) {
    return null
  }

  const { accounts } = data || {}
  const totalBalance = accounts?.reduce((sum, account) => sum + (account?.balance?.current || 0), 0) || 0

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-lg text-gray-600">Welcome to your financial dashboard</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Quick Links Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg col-span-2">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link 
                  href="/balances" 
                  className="block w-full px-4 py-3 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <div className="text-xl font-medium">View Balances</div>
                  <div className="text-sm opacity-80">Check your account balances</div>
                </Link>
                <Link 
                  href="/statements" 
                  className="block w-full px-4 py-3 text-center text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
                >
                  <div className="text-xl font-medium">View Statements</div>
                  <div className="text-sm opacity-80">Access your account statements</div>
                </Link>
                <Link 
                  href="/transactions" 
                  className="block w-full px-4 py-3 text-center text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors"
                >
                  <div className="text-xl font-medium">View Transactions</div>
                  <div className="text-sm opacity-80">Review your transaction history</div>
                </Link>
                <Link 
                  href="/settings" 
                  className="block w-full px-4 py-3 text-center text-white bg-gray-600 rounded-md hover:bg-gray-700 transition-colors"
                >
                  <div className="text-xl font-medium">Settings</div>
                  <div className="text-sm opacity-80">Manage your account settings</div>
                </Link>
              </div>
            </div>
          </div>

          {/* Summary Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Summary</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500">Total Balance</div>
                  <div className="text-2xl font-bold text-gray-900">
                    ${totalBalance.toFixed(2)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Number of Accounts</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {accounts?.length || 0}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
