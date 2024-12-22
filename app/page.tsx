import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import Reviews from '@/components/Reviews'
import { Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='pb-10'>
        <Navbar />
        <Hero />
        <Portfolio />
        <Reviews />
        {/* contact us */}

        <section id='contact' className="flex flex-col justify-center p-5 items-center gap-6">
          <h2 className='text-center text-3xl'>Contact <span className='text-primary font-extrabold'>Us</span> </h2>

          <div className="justify-center items-center flex gap-10">

            <Link href={'https://instagram.com/thee.lens_guyy?igshid=MmVlMjlkMTBhMg=='} className='flex items-center hover:shadow-md  gap-4 shadow-sm p-3'>
            <Instagram size={30}className='text-primary' />
            <h1 className='font-bold text-lg '>@thee.lens_guyy</h1>
            </Link>
            <Link href={'https://wa.me/+2347082350480'} className='flex items-center gap-4 p-3 hover:shadow-md  shadow-sm'>
            {/* <MessageCircle size={30}className='text-primary' /> */}
            <Image src={'/what.png'} alt='whatsapp' width={20} height={20}  className='' />
            <h1 className='font-bold text-lg '>+234 7082350480</h1>
            </Link>

            <Link href={'https://www.tiktok.com/@lens_guyy?_t=ZM-8sQrCdF1WOj&_r=1'} className='flex items-center gap-4 p-3 hover:shadow-md shadow-sm'>
            {/* <MessageCircle size={30}className='text-primary' /> */}
            <Image src={'/tiktok.png'} alt='whatsapp' width={20} height={20}  className='' />
            <h1 className='font-bold text-lg '>@lens_guyy</h1>
            </Link>
          </div>
        </section>
    </div>
  )
}

export default Home