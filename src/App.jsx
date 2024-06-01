import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'; // Pastikan Tailwind CSS diimpor di sini atau dalam index.css

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='min-h-dvh'>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12">
            <div className="col-span-3  border-l border-t border-b border-gray-300 p-2">
              <div className='flex flex-row justify-between items-center'>
                <p className='text-l font-semibold'>Messages</p>
                <button class="flex items-center justify-center w-8 h-8 rounded-full border bg-indigo-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-span-8 border border-gray-300 p-2">
              <div className='flex flex-row items-center justify-between space-x-4'>
                <div className='flex flex-row items-center space-x-4'>
                  <img src="/images/profile.png" alt="Placeholder" className="h-10 w-10 rounded-xl object-cover" />
                  <div className='flex flex-col'>
                    <p className='text-l font-semibold'>Ahmad Zulfan</p>
                    <div className='flex flex-row items-center space-x-2'>
                      <div className="w-2 h-2 rounded-full bg-green-400 inline-block align-middle"></div>
                      <p className='text-xs font-light inline-block align-middle'>online</p>
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-center w-20 h-9 rounded-md border bg-indigo-200 text-indigo-800 space-x-1 ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <p className='text-sm font-semibold'>calls</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="container mx-auto px-4">
          <div class="grid grid-cols-12">
            <div class="col-span-3 border-l border-b p-2 h-screen">
              <input type="text" class="w-full p-2 rounded-lg bg-slate-100 focus:outline-none mb-4" placeholder="search message" />

              <div className='flex flex-row items-start justify-between space-x-4'>
                <div className='flex flex-row items-start space-x-4'>
                  <img src="/images/profile.png" alt="Placeholder" className="h-10 w-10 rounded-xl object-cover" />
                  <div className='flex flex-col'>
                    <p className='text-sm font-semibold'>Ahmad Zulfan</p>
                    <p className='text-xs mb-2 text-gray-400 font-medium'>i love you sayang 😘</p>
                    <div className='flex flex-row items-center space-x-2'>
                      <div className="mr-2 mb-2 py-1 px-2 rounded-xl bg-indigo-500 text-white max-w-xs">
                        <p className='text-xs'>Question</p>
                      </div>
                      <div className="mr-2 mb-2 py-1 px-2 rounded-xl bg-green-400 text-white max-w-xs">
                        <p className='text-xs'>Help Wanted</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className='text-xs font-medium self-start'>12 m</p>
              </div>

              <div className='flex flex-row items-start justify-between space-x-4'>
                <div className='flex flex-row items-start space-x-4'>
                  <img src="/images/profile.png" alt="Placeholder" className="h-10 w-10 rounded-xl object-cover" />
                  <div className='flex flex-col'>
                    <p className='text-sm font-semibold'>Ahmad Zulfan</p>
                    <p className='text-xs mb-2 text-gray-400 font-medium'>i love you sayang 😘</p>
                    <div className='flex flex-row items-center space-x-2'>
                      <div className="mr-2 mb-2 py-1 px-2 rounded-xl bg-orange-300 text-orange-600 max-w-xs">
                        <p className='text-xs'>Question</p>
                      </div>
                      <div className="mr-2 mb-2 py-1 px-2 rounded-xl bg-green-400 text-white max-w-xs">
                        <p className='text-xs'>Help Wanted</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className='text-xs font-medium self-start'>12 m</p>
              </div>

            </div>


            <div class="col-span-8 border-l border-b border-r border-gray-300 p-2 h-screen">
              <div class="p-4">
                {/* dialog pertama */}
                <div class="flex justify-end mb-4">
                  <div class="flex flex-col items-end ">
                    <div class="mr-2 mb-2 py-2 px-4 rounded-xl bg-indigo-500 text-white max-w-xs">
                      <p className='text-sm'>omg, this is amazing</p>
                    </div>
                    <div class="mr-2 mb-2 py-2 px-4 rounded-xl bg-indigo-500 text-white max-w-xs">
                      <p className='text-sm'>perfect!</p>
                    </div>
                    <div class="mr-2 py-2 px-4 rounded-xl bg-indigo-500 text-white max-w-xs">
                      <p className='text-sm'>wow, this is really epic</p>
                    </div>
                  </div>
                  <img src="/images/profile.png" alt="Placeholder" className="h-10 w-10 rounded-xl object-cover" />
                </div>

                {/* dialog kedua */}
                <div class="flex justify-start mb-4">
                  <img src="/images/profile2.png" alt="Placeholder" class="h-10 w-10 rounded-xl object-cover" />
                  <div class="flex flex-col items-start ml-2">
                    <div class="mb-1 py-2 px-4 rounded-xl bg-slate-200 max-w-xs">
                      <p class="text-sm">How are you?</p>
                    </div>
                  </div>
                </div>

                {/* dialog ketiga */}
                <div class="flex justify-end mb-4">
                  <div class="flex flex-col items-end ">
                    <div class="mr-2 mb-2 py-2 px-4 rounded-xl bg-indigo-500 text-white max-w-xs">
                      <p className='text-sm'>just ideas for next time</p>
                    </div>
                    <div class="mr-2 mb-2 py-2 px-4 rounded-xl bg-indigo-500 text-white max-w-xs">
                      <p className='text-sm'>i'ii be there in 2 mins⏰</p>
                    </div>
                  </div>
                  <img src="/images/profile.png" alt="Placeholder" className="h-10 w-10 rounded-xl object-cover" />
                </div>

                {/* dialog ke empat */}
                <div class="flex justify-start mb-4">
                  <img src="/images/profile2.png" alt="Placeholder" class="h-10 w-10 rounded-xl object-cover" />
                  <div class="flex flex-col items-start ml-2">
                    <div class="mb-2 py-2 px-4 rounded-xl bg-slate-200 max-w-xs">
                      <p class="text-sm">wooooooooooo</p>
                    </div>
                    <div class="mb-2 py-2 px-4 rounded-xl bg-slate-200 max-w-xs">
                      <p class="text-sm">Haha oh honey</p>
                    </div>
                    <div class="mb-2 py-2 px-4 rounded-xl bg-slate-200 max-w-xs">
                      <p class="text-sm">Haha that's terrifying 😂</p>
                    </div>
                  </div>
                </div>

                {/* dialog ke lima */}
                <div class="flex justify-end mb-4">
                  <div class="flex flex-col items-end ">
                    <div class="mr-2 mb-2 py-2 px-4 rounded-xl bg-indigo-500 text-white max-w-xs">
                      <p className='text-sm'>awww</p>
                    </div>
                    <div class="mr-2 mb-2 py-2 px-4 rounded-xl bg-indigo-500 text-white max-w-xs">
                      <p className='text-sm'>omg, this is amazing</p>
                    </div>
                    <div class="mr-2 mb-2 py-2 px-4 rounded-xl bg-indigo-500 text-white max-w-xs">
                      <p className='text-sm'>woooooooooooooooo 🔥</p>
                    </div>
                  </div>
                  <img src="/images/profile.png" alt="Placeholder" className="h-10 w-10 rounded-xl object-cover" />
                </div>

                {/* card send */}
                <div class="flex items-center p-4 ">
                  <button class="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                    </svg>
                  </button>
                  <input type="text" class="flex-1 mx-2 p-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Type your message..." />
                  <button class="p-2 text-blue-500 hover:text-blue-700 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <line x1="22" y1="2" x2="11" y2="13" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                    </svg>
                  </button>
                </div>


              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App