import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>

      <div className='border-t border-gray-300 pt-8 text-2xl text-center'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='flex flex-col md:flex-row justify-center mt-10 mb-28 gap-10'>
        <img className='w-full md:max-w-[450px]' src={assets.contact_img} alt="" />

        <div className='flex flex-col gap-6 justify-center items-start'>
          <p className='font-semibold text-gray-600 text-xl'>Our Store</p>
          <p className='text-gray-500'>241 Station Street <br />Suite 304, Sydney, NSW</p>
          <p className='text-gray-500'>Tel: (+61) 404603733 <br />Email: prajjwal302@gmail.com</p>
          <p className='font-semibold text-gray-600 text-xl'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>

          <button className=' border px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>

        </div>
      </div>

      <NewsLetterBox />
      
    </div>
  )
}

export default Contact 
