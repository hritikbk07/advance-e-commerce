'use client'
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';


const Id = () => {
    const params = useParams();
    const [productDetails, setProductDetails] = useState(null);

    const fetchProductDetails = async () =>{
        const {data} = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
        setProductDetails(data);
    }
    useEffect(() =>{
        fetchProductDetails();
    },[])
  return (
    <div className="max-w-6xl mx-auto p-6 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Product Image */}
        <div className="flex justify-center items-center border rounded-lg p-6 bg-white shadow-sm">
          <img src={productDetails?.image} alt={productDetails?.title} className="h-96 object-contain" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold">{productDetails?.title}</h1>
            <p className="text-green-600 text-2xl font-semibold mt-2">Rs. {productDetails?.price}</p>

            {/* Rating */}
            {productDetails?.rating && (
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <AiFillStar
                      key={i}
                      className={i < Math.round(productDetails?.rating.rate) ? 'text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">
                  {productDetails?.rating.rate} ({productDetails?.rating.count} reviews)
                </span>
              </div>
            )}

            {/* Category */}
            <p className="mt-3 text-gray-500 text-sm capitalize">Category: {productDetails?.category}</p>

            {/* Description */}
            <p className="mt-4 text-gray-700 leading-relaxed">{productDetails?.description}</p>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-4">
            <button className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
            <button className="px-6 border rounded-lg hover:bg-gray-100 flex items-center gap-2">
              <AiOutlineHeart /> Wishlist
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Id