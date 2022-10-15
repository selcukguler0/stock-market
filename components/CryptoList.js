import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { coins } from '../utils/coins'

export default function CryptoList() {
	const router = useRouter()
	const [cryptoList, setCryptoList] = useState([])
	useEffect(() => {
	
	}, [])
	if (!cryptoList) {
		return <div>Loading...</div>
	}
	
	const redirect = (e) => {
		console.log(e.target);
		// router.push(`/crypto/${e.target.key}`)
	}

	return (
		<div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
			<div className="text-xs text-gray-400 tracking-wider">CRYPTOS</div>
			<div className="relative mt-2">
				<input
					type="text"
					className="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm"
					placeholder="Search"
				/>
				<svg
					viewBox="0 0 24 24"
					className="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2"
					stroke="currentColor"
					strokeWidth={2}
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx={11} cy={11} r={8} />
					<line x1={21} y1={21} x2="16.65" y2="16.65" />
				</svg>
			</div>
			<div className="space-y-4 mt-3" onClick={redirect}>
				{coins.map((coin) => (
					<Link href={`http://localhost:3000/price/${coin}`} key={coin}>
						<a href="">
							<button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
								<div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
									<img
										src={`/crypto/${coin.replace('USDT', '')}.svg`}
									/>
									{coin}
								</div>
								<div className="flex items-center w-full">
									<div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">
										crypto
									</div>
									<div className="ml-auto text-xs text-gray-500">More Info</div>
								</div>
							</button>
						</a>
					</Link>
				))}
				
				{/* active */}
				{/* <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
					<div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
						<img
							src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512"
							className="w-7 h-7 mr-2 rounded-full"
							alt="profile"
						/>
						Mert Cukuren
					</div>
					<div className="flex items-center w-full">
						<div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md">
							Sales
						</div>
						<div className="ml-auto text-xs text-gray-500">$2,794.00</div>
					</div>
				</button> */}
				
			</div>
		</div>
	)
}
