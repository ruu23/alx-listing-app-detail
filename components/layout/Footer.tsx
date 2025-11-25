import alx from '@/public/assets/alx-footer.svg'
import Image from 'next/image';
const Footer: React.FC = () => {
    return(
        <footer className="text-[#CACACA] bg-[#222222] text-sm">
            {/* green part */}
            <div className="bg-[#34967C] h-[29px]"></div>

            {/* middle part */}
            <div className='grid grid-cols-2 m-10 h-[250px]'>
                <div className="w-[75%]">
                    <Image src={alx} alt='alx' className='mb-6 '/>
                    <p>ALX is a platform where travelers can discover and book unique,
                        comfortable, and affordable lodging options worldwide. 
                        From cozy city apartments and tranquil countryside retreats
                        to exotic beachside villas, ALX connects you with the perfect
                        place to stay for any trip.
                    </p>
                </div>
                <div className='grid grid-cols-3'>
                    <div>
                        <h1 className=' text-2xl mb-4'>Explore</h1>
                        <ul className='leading-loose'>
                            <li>Apartments in Dubai</li>
                            <li>Hotels in New York</li>
                            <li>Villa in Spain</li>
                            <li>Mansion in Indonesia</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='mb-4 text-2xl'>Company</h1>
                        <ul className='leading-loose'>
                            <li>About us</li>
                            <li>Blog</li>
                            <li>Career</li>
                            <li>Customers</li>
                            <li>Brand</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='mb-4 text-2xl'>Help</h1>
                        <ul className='leading-loose'>
                            <li>Support</li>
                            <li>cancel Booking</li>
                            <li>Refunds Process</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* last part */}
            <div className='border-t border-[#CACACA] grid grid-cols-2 mx-10 py-3 h-[60px]'>
                <p>Some hotel requires you to cancel more than 24 hours before check-in. Details 
                    <a className='text-[#34967C]' href="#"> here</a>
                </p>

                <div className='flex flex-wrap justify-end gap-[60px]'>
                    <p>Terms of Service</p>
                    <p>Policy service</p>
                    <p>Cookies Policy</p>
                    <p>Partners</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;