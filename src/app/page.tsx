import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react'
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col" >
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6">
            <div className='flex items-center gap-4'>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft />
              </button>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronRight />
              </button>
            </div>
            <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
          
            <div className='grid grid-cols-3 gap-4 mt-4'>
              <a href="#" className='bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                <Image src="/unicoalbum.jpeg" width={104} height={104}  alt="Capa do album único de Fernandinho"/>
                <strong>Único</strong>
                <button className='invisible w-12 h-12 flex items-center justify-center bg-green-400 rounded-full text-black ml-auto mr-8 group-hover:visible'>
                  <Play />
                </button>
              </a>
              <a href="#" className='bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                <Image src="/unicoalbum.jpeg" width={104} height={104}  alt="Capa do album único de Fernandinho"/>
                <strong>Único</strong>
                <button className='invisible w-12 h-12 flex items-center justify-center bg-green-400 rounded-full text-black ml-auto mr-8 group-hover:visible'>
                  <Play />
                </button>
              </a>
              <a href="#" className='bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                <Image src="/unicoalbum.jpeg" width={104} height={104}  alt="Capa do album único de Fernandinho"/>
                <strong>Único</strong>
                <button className='invisible w-12 h-12 flex items-center justify-center bg-green-400 rounded-full text-black ml-auto mr-8 group-hover:visible'>
                  <Play />
                </button>
              </a>
              <a href="#" className='bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                <Image src="/unicoalbum.jpeg" width={104} height={104}  alt="Capa do album único de Fernandinho"/>
                <strong>Único</strong>
                <button className='invisible w-12 h-12 flex items-center justify-center bg-green-400 rounded-full text-black ml-auto mr-8 group-hover:visible'>
                  <Play />
                </button>
              </a>
              <a href="#" className='bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                <Image src="/unicoalbum.jpeg" width={104} height={104}  alt="Capa do album único de Fernandinho"/>
                <strong>Único</strong>
                <button className='invisible w-12 h-12 flex items-center justify-center bg-green-400 rounded-full text-black ml-auto mr-8 group-hover:visible'>
                  <Play />
                </button>
              </a>
              <a href="#" className='bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                <Image src="/unicoalbum.jpeg" width={104} height={104}  alt="Capa do album único de Fernandinho"/>
                <strong>Único</strong>
                <button className='invisible w-12 h-12 flex items-center justify-center bg-green-400 rounded-full text-black ml-auto mr-8 group-hover:visible'>
                  <Play />
                </button>
              </a>
            </div>

            <h1 className='font-semibold text-2xl mt-10'>Made for Daniel Almeida</h1>
            <div className="grid grid-cols-8 gap-4 mt-4">
              <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src="/bfalbum.jpg" className='w-full' width={104} height={104}  alt="Capa do album único de Fernandinho"/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">Isaías Saad e toda a sua banda e palal...</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src="/bfalbum.jpg" className='w-full' width={104} height={104}  alt="Capa do album único de Fernandinho"/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">Isaías Saad e toda a sua banda e palal...</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src="/bfalbum.jpg" className='w-full' width={104} height={104}  alt="Capa do album único de Fernandinho"/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">Isaías Saad e toda a sua banda e palal...</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src="/bfalbum.jpg" className='w-full' width={104} height={104}  alt="Capa do album único de Fernandinho"/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">Isaías Saad e toda a sua banda e palal...</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src="/bfalbum.jpg" className='w-full' width={104} height={104}  alt="Capa do album único de Fernandinho"/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">Isaías Saad e toda a sua banda e palal...</span>
              </a>
            </div>

          
          </main>
        </div>
          <Footer />
        
      </div>
    </main>
  );
}
