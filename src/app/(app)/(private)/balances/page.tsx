'use client'

import { gql, useQuery, useQuilttSession } from '@quiltt/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

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

const Balances = () => {
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
          <h1 className="text-3xl font-bold text-gray-900">Account Balances</h1>
          <p className="mt-2 text-lg text-gray-600">View and manage your account balances</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Total Balance Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Total Balance</h2>
              <div className="text-3xl font-bold text-gray-900">
                ${totalBalance.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Individual Accounts */}
          {loading ? (
            <div className="col-span-2 bg-white overflow-hidden shadow rounded-lg p-6">
              <div className="text-gray-500">Loading accounts...</div>
            </div>
          ) : (
            <div className="col-span-2 bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Account Details</h2>
                <div className="space-y-4">
                  {accounts?.map((account) => (
                    <div key={account.id} className="flex justify-between items-center border-b pb-4">
                      <span className="text-gray-700">{account.name}</span>
                      <span className="font-medium text-gray-900">
                        ${account?.balance?.current?.toFixed(2) || '0.00'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Balances
