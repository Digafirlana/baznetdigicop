'use client'

import { useTheme } from 'next-themes'
import { FaInstagram, FaFacebook,FaTiktok } from 'react-icons/fa'

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-[#0a0a0c] transition-colors duration-300">
   <div className="w-full max-w-4xl p-16 rounded-2xl shadow-xl flex flex-col items-center
                bg-gradient-to-r from-slate-50 to-gray-50
                dark:from-[#15171a] dark:to-[#1a1c1e] 
                transition-colors duration-300">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white flex gap-2">
          Media 
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
  Sosial
</span>
        </h2>

        <div className="flex gap-8 text-gray-500 dark:text-gray-400">
          <a href="https://www.instagram.com/baznetprint.pisangkipas/" className="hover:text-cyan-500 dark:hover:text-white transition-colors">
            <FaInstagram size={25} />
          </a>
          <a href="" className="hover:text-blue-600 dark:hover:text-white transition-colors">
            <FaFacebook size={25} />
          </a>
        
      
          <a href="https://www.tiktok.com/@baznetdigicorp" className="hover:text-pink-500 dark:hover:text-white transition-colors">
            <FaTiktok size={25} />
          </a>
        </div>
      </div>
    </main>
  )
}