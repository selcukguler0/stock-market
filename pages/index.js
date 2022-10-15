import Head from 'next/head'
import Image from 'next/image'
import CryptoList from '../components/CryptoList'
import Header from '../components/Header'
import SingleCrypto from '../components/SingleCrypto'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
	console.log(data);
  return (
		<div className="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
			
			<div className="flex-grow overflow-hidden h-full flex flex-col">
				{/* <Header /> */}
				<div className="flex-grow flex overflow-x-hidden">
					<CryptoList />
					<SingleCrypto />
				</div>
			</div>
		</div>
      
  )
}
