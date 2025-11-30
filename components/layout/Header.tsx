import Image from "next/image";
import bag_icon from '@/public/assets/Case Minimalistic.svg'
import alx from '@/public/assets/alx.png'
import search from '@/public/assets/search.svg'

const Header: React.FC = () => {
    return(
        <header className="">
            {/* ================= TOP BAR ================= */}
            <div className="flex flex-wrap items-center justify-center gap-4 bg-[#34967C] h-[47px] text-[12px] sm:text-[16px]">
                <Image src={bag_icon} alt="bag-icon"/>
                <p className="text-white text-white leading-tight max-w-[240px] text-left 
                                sm:max-w-none sm:leading-normal">
                    Overseas trip? Get the latest information on travel guides</p>
                <button className="bg-black text-white rounded-[50px] px-3">More Info</button>
            </div>

            {/* ================= MIDDLE SECTION ================= */}
            <div className="flex flex-wrap items-center justify-between border border-[#E9E9E9] px-10 py-2">
                <Image src={alx} alt="alx-logo"/>

                {/* the form */}
                <form action="" className="flex items-center border border-[#E9E9E9] rounded-[50px] px-2">
                    {/* Location */}
                    <div className="flex flex-col flex-[3] m-2 px-2">
                        <label htmlFor="" className="text-xs font-semibold text-black">Location</label>
                        <input 
                            type="text" 
                            placeholder="Search for destination" 
                            className="w-full text-sm outline-none border-none text-gray-400 placeholder-gray-400 bg-transparent"
                        />
                    </div>
                    {/* check in */}
                    <div className="flex flex-col flex-1 border-l border-[#E9E9E9] m-2 px-2">
                        <label htmlFor="" className="text-xs font-semibold text-black">Check in</label>
                        <input 
                            type="text" 
                            placeholder="Add date" 
                            className="w-full text-sm outline-none border-none text-gray-400 placeholder-gray-400 bg-transparent"
                        />
                    </div>
                    {/* check out */}
                    <div className="flex flex-col flex-1 border-l border-[#E9E9E9] m-2 px-2">
                        <label htmlFor="" className="text-xs font-semibold text-black">Check out</label>
                        <input 
                            type="text" 
                            placeholder="Add date" 
                            className="w-full text-sm outline-none border-none text-gray-400 placeholder-gray-400 bg-transparent"
                        />
                    </div>
                    {/* people */}
                    <div className="flex flex-col flex-1 border-l border-[#E9E9E9] m-2 px-2">
                        <label htmlFor="" className="text-xs font-semibold text-black">People</label>
                        <input 
                            type="text" 
                            placeholder="Add guest" 
                            className="w-full text-sm outline-none border-none text-gray-400 placeholder-gray-400 bg-transparent"
                        />
                    </div>
                    {/* button */}
                    <button className="bg-[#FFB700] rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0">
                        <Image src={search} alt="search" />
                    </button>
                </form>
            
                <div className="flex flex-wrap items-center justify-center gap-2 font-medium">
                    <button className="bg-[#34967C] rounded-3xl px-4 py-2 text-white">Sign in</button>
                    <button className="border border-[#E9E9E9] rounded-3xl px-4 py-2">Sign Up</button>
                </div>
            </div>
            
        </header>
    )
}

export default Header;