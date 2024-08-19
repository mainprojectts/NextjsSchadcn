import ProtectedRoute from '@/components/pagecomponents/ProtectedRoute'
import { ProductCard } from '@/components/Product/Product'
import React from 'react'

export default function page() {
  return (
    <ProtectedRoute>
    <ProductCard/>
    </ProtectedRoute>
  )
}
