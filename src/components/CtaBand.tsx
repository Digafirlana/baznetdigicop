'use client'

import { useTheme } from 'next-themes'
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok } from 'react-icons/fa'

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-[#0a0a0c] transition-colors duration-300">
      <div className="w-full max-w-4xl p-16 rounded-2xl shadow-xl flex flex-col items-center
                      bg-gradient-to-r from-blue-50 to-amber-50
                      dark:from-[#1c3243] dark:to-[#3b3627] 
                      transition-colors duration-300">
        
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white flex gap-2">
          Media 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
            Sosial
          </span>
        </h2>

        <div className="flex gap-8 text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:text-cyan-500 dark:hover:text-white transition-colors">
            <FaInstagram size={35} />
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-white transition-colors">
            <FaFacebookF size={35} />
          </a>
          <a href="#" className="hover:text-green-500 dark:hover:text-white transition-colors">
            <FaWhatsapp size={35} />
          </a>
      
          <a href="#" className="hover:text-pink-500 dark:hover:text-white transition-colors">
            <FaTiktok size={35} />
          </a>
        </div>
      </div>
    </main>
  )
}