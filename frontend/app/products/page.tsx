'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const ProductsPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition bg-white"
          >
            <div className="h-48 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain"
              />
            </div>

            <h3 className="mt-4 font-semibold text-sm line-clamp-2">
              {product.title}
            </h3>

            <p className="text-lg font-bold mt-2">
              Rs. {product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
