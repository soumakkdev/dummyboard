'use client'

import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function AppLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<Sidebar />
			<div className="lg:pl-72">
				<Topbar />

				<main className="py-10">
					<div className="px-4 sm:px-6 lg:px-8">{children}</div>
				</main>
			</div>
		</div>
	)
}
