import Image from "next/image";
import bag_icon from '@/public/assets/Case Minimalistic.svg'
import alx from '@/public/assets/alx.png'
import search from '@/public/assets/search.svg'
import rooms from '@/public/assets/living-room 1.svg'
import mansion from '@/public/assets/mansion 1.svg'
import countryside from '@/public/assets/farm 1.svg'
import villa from '@/public/assets/villa 1.svg'
import Tropical from '@/public/assets/palm-tree 1.svg'
import New from '@/public/assets/key-chain 1.svg'
import pool from '@/public/assets/swimming-pool 1.svg'
import beach from '@/public/assets/vacations 1.svg'
import island from '@/public/assets/island (1) 1.svg'
import camping from '@/public/assets/tent 1.svg'
import apartment from '@/public/assets/apartment 1.svg'
import house from '@/public/assets/home 1.svg'
import lakefront from '@/public/assets/cottage 1.svg'
import farmHouse from '@/public/assets/barn 1.svg'
import treehouse from '@/public/assets/treehouse (1) 1.svg'
import cabins from '@/public/assets/cabin 1.svg'
import castles from '@/public/assets/castle-tower 1.svg'
import lakeside from '@/public/assets/farm 1.svg'




const Header: React.FC = () => {
    return(
        <header>
            {/* first */}
            <div className="flex flex-wrap items-center justify-center gap-4 bg-[#34967C] h-[47px]">
                <Image src={bag_icon} alt="bag-icon"/>
                <p className="text-white">Overseas trip? Get the latest information on travel guides</p>
                <button className="bg-black text-white rounded-[50px] px-3">More Info</button>
            </div>

            {/* middle */}
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
                    <button className="bg-[#34967C] rounded-[50px] p-3">Sign in</button>
                    <button className="border border-[#E9E9E9] rounded-[50px] p-3">Sign Up</button>
                </div>
            </div>

            {/* last */}
            <div className="flex flex-wrap items-center justify-between py-5 pl-10 text-[#616161]">
                {[
                    { img: rooms, label: "Rooms" },
                    { img: mansion, label: "Mansion" },
                    { img: countryside, label: "Countryside" },
                    { img: villa, label: "Villa" },
                    { img: Tropical, label: "Tropical" },
                    { img: New, label: "New" },
                    { img: pool, label: "Amazing pool" },
                    { img: beach, label: "Beach house" },
                    { img: island, label: "Island" },
                    { img: camping, label: "Camping" },
                    { img: apartment, label: "Apartment" },
                    { img: house, label: "House" },
                    { img: lakefront, label: "Lakefront" },
                    { img: farmHouse, label: "Farm house" },
                    { img: treehouse, label: "Tree house" },
                    { img: cabins, label: "Cabins" },
                    { img: castles, label: "Castles" },
                    { img: lakeside, label: "Lakeside" },
                ].map((item, i) => (
                        <button 
                            key={i}
                            className="flex flex-col items-center justify-center text-center border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-black">
                                <Image
                                 src={item.img} 
                                 alt={item.label} 
                                 className=" w-7 h-7"
                                />
                                <p className="text-sm font-small ">{item.label}</p>
                        </button>
                ))}
            </div>
        </header>
    )
}

export default Header;