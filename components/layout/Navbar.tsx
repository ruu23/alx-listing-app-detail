import Image from "next/image";
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


const Navbar: React.FC = () => {
    return(
        <div>
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
        </div>
    )
}

export default Navbar
