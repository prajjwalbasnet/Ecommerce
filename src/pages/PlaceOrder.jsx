import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const { navigate } = useContext(ShopContext)

  const [method, setMethod] = useState('cod')

  return (
    <main className="w-full border-t border-gray-300 pt-16 flex items-start justify-between  flex-row lg:gap-24 gap-8">
      <div className="lg:w-[30%] w-3/5">
        <div className='text-2xl mb-5'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>

        <div className='w-full flex flex-col gap-4'>
          <section className='w-full flex-1 flex items-center gap-4'>
            <input className='w-1/2 border border-gray-300 px-3 py-1 rounded-sm' type="text" placeholder='First name'/>
            <input className='w-1/2 border border-gray-300 px-3 py-1 rounded-sm' type="text" placeholder='Last name'/>
          </section>
          <div className='w-full'>
            <input className='w-full flex-1  border border-gray-300 px-3 py-1 rounded-sm' type="email" placeholder='Email'/>
          </div>
          <input className='w-full flex-1  border border-gray-300 px-3 py-1 rounded-sm' type="text" placeholder='Street'/>
          <section className='w-full flex-1 flex items-center gap-4'>
            <input className='w-1/2 border border-gray-300 px-3 py-1 rounded-sm' type="text" placeholder='City'/>
            <input className='w-1/2 border border-gray-300 px-3 py-1 rounded-sm' type="text" placeholder='State'/>
          </section>
          <section className='w-full flex-1 flex items-center gap-4'>
            <input className='w-1/2 border border-gray-300 px-3 py-1 rounded-sm' type="number" placeholder='Zipcode'/>
            <input className='w-1/2 border border-gray-300 px-3 py-1 rounded-sm' type="text" placeholder='Country'/>
          </section>
          <input className='w-full flex-1  border border-gray-300 px-3 py-1 rounded-sm' type="number" min={0} placeholder='Phone'/>
        </div>
      </div>

      <div className="lg:w-[35%] w-2/5 mt-12">
        <div className='w-full'>
          <CartTotal />

        </div>

        <div className='w-full pt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>

          <div className='flex lg:flex-row flex-col lg:gap-2 w-full'>
            <div onClick={()=>setMethod('stripe')} className='border border-gray-300 flex items-center gap-4 px-3 py-2 mb-4'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>

            <div onClick={()=>setMethod('razorpay')} className='border border-gray-300 flex items-center gap-4 px-3 py-2 mb-4'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>

            <div onClick={()=>setMethod('cod')} className='border border-gray-300 flex items-center gap-4 px-3 py-2 mb-4'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm'>CASH ON DELIVERY</p>
            </div>
          </div>

        </div>
        <div className='w-full flex justify-end'>
          <button onClick={()=>navigate('/orders')} className='bg-black text-white px-12 py-3 mt-4 text-sm cursor-pointer'>PLACE ORDER</button>
        </div>
        
      </div>
    </main>
  )
}

export default PlaceOrder
