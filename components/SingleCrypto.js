import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SingleCrypto() {
	const [data, setData] = useState(null);
	const router = useRouter();
	const name = router.query.name?.toUpperCase() || "BTCUSDT";
	const icon = name.replace("USDT", "").toLowerCase();

	useEffect(() => {
		(async () => {
			var price = await fetch(
				`https://api.binance.com/api/v3/avgPrice?symbol=${name}`
			);
			var priceHistory = await fetch(
				`https://api.binance.com/api/v3/trades?symbol=${name}&limit=1000`
			);
			var priceData = await price.json();
			var priceHistoryData = await priceHistory.json();
			console.log(priceData);
			console.log("priceHistoryData", priceHistoryData);
			setData({
				price: priceData.price,
				priceHistory: priceHistoryData,
			});
		})();
	}, []);

	if (!data) {
		return <div>Loading...</div>;
	}
	console.log(`single`, data);
	console.log(`data.price`, data.price.price);
	return (
		<div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
			<div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0">
				<div className="flex w-full items-center">
					<div className="flex items-center text-3xl text-gray-900 dark:text-white">
						<img src={`/crypto/${icon}.svg`} alt={name} />
						{name}
					</div>
					<div className="ml-auto sm:flex hidden items-center justify-end">
						<div className="text-right">
							<div className="text-xs text-gray-400 dark:text-gray-400">
								Current Price:
							</div>
							<div className="text-gray-900 text-lg dark:text-white">
								${data.price}
							</div>
						</div>
						<button className="w-8 h-8 ml-4 text-gray-400 shadow dark:text-gray-400 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
							<svg
								viewBox="0 0 24 24"
								className="w-4"
								stroke="currentColor"
								strokeWidth={2}
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round">
								<circle cx={12} cy={12} r={1} />
								<circle cx={19} cy={12} r={1} />
								<circle cx={5} cy={12} r={1} />
							</svg>
						</button>
					</div>
				</div>
				<div className="flex items-center space-x-3 sm:mt-7 mt-4">
					<a
						href="#"
						className="px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5">
						Activities
					</a>
					<a
						href="#"
						className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5">
						Transfer
					</a>
				</div>
			</div>
			<div className="sm:p-7 p-4">
				<div className="flex w-full items-center mb-7"></div>
				<table className="w-full text-left">
					<thead>
						<tr className="text-gray-400">
							<th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
								Price
							</th>
							<th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
								QTY
							</th>

							<th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
								Quote QTY
							</th>
							<th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">
								Time
							</th>
						</tr>
					</thead>
					{data.priceHistory.map((item) => (
						<tbody key={item.id} className="text-gray-600 dark:text-gray-100">
							<tr>
								<td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
									<div className="flex items-center">
										
										{item.price}
									</div>
								</td>
								<td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">
									{item.qty}
								</td>
								<td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">
									{item.quoteQty}
								</td>
								<td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
									<div className="flex items-center">
										<div className="sm:flex hidden flex-col">
											{new Date(item.time).toLocaleDateString()}
											<div className="text-gray-400 text-xs">
												{/* {`${new Date(item.time).getHours()}:${new Date(item.time).getMinutes()}`} */}
												{new Date(item.time).getMinutes()}
											</div>
										</div>
										<button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
											<svg
												viewBox="0 0 24 24"
												className="w-5"
												stroke="currentColor"
												strokeWidth={2}
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round">
												<circle cx={12} cy={12} r={1} />
												<circle cx={19} cy={12} r={1} />
												<circle cx={5} cy={12} r={1} />
											</svg>
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					))}
				</table>
				<div className="flex w-full mt-5 space-x-2 justify-end">
					<button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
						<svg
							className="w-4"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round">
							<polyline points="15 18 9 12 15 6" />
						</svg>
					</button>
					<button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
						1
					</button>
					<button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-white leading-none">
						2
					</button>
					<button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
						3
					</button>
					<button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
						4
					</button>
					<button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
						<svg
							className="w-4"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round">
							<polyline points="9 18 15 12 9 6" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
