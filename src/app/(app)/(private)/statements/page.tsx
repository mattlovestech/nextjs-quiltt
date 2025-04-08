'use client'

import { gql, useQuery, useQuilttSession } from '@quiltt/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import type { Statement } from '@/generated/graphql'

const QUERY = gql`query Query {
  statements {
    nodes {
      id
      url
      startOn
      endOn
      account {
        id
      }
    }
  }
}`

const Statements = () => {
	const [mounted, setMounted] = useState(false)
	const { data, loading } = useQuery<{ statements: { nodes: Array<Partial<Statement>> } }>(QUERY)
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

	const { statements } = data || {}

	return (
		<div className="p-8 space-y-6">
			<section>
				<h1 className="text-2xl font-bold mb-4">Statements</h1>
			</section>

			<section>
				{loading ? (
					<div>Loading...</div>
				) : (
					<ul className="list-disc">
						{statements?.nodes?.map((statement) => (
							<li key={statement.id}>
								<a href={statement.url} target="_blank" rel="noopener noreferrer">
									Statement from {statement.startOn} to {statement.endOn}
								</a>
							</li>
						))}
					</ul>
				)}
			</section>
		</div>
	)
}

export default Statements
