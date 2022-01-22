import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Categories</h3>
      {categories.map((categorie) => (
        <Link key={categorie.id} href={`/category/${categorie.slug}`}>
          <a>
            <span className='block cursor-pointer pb-3 mb-3'>{categorie.name}</span>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Categories
