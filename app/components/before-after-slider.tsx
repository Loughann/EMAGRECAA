"use client"

import { useState } from "react"
import Image from "next/image"

export default function BeforeAfterSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Ana, 34 anos",
      before: "/placeholder.svg",
      after: "/placeholder.svg",
      weight: "- 10kg",
      time: "3 meses",
    },
    {
      name: "Patrícia, 42 anos",
      before: "/placeholder.svg",
      after: "/placeholder.svg",
      weight: "- 8kg",
      time: "2 meses",
    },
    {
      name: "Fernanda, 29 anos",
      before: "/placeholder.svg",
      after: "/placeholder.svg",
      weight: "- 12kg",
      time: "4 meses",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const current = testimonials[currentIndex]

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="text-center mb-2">
        <h3 className="font-bold">{current.name}</h3>
      </div>

      <div className="flex gap-2 mb-2">
        <div className="flex-1 relative">
          <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">ANTES</div>
          <Image
            src={current.before || "/placeholder.svg"}
            alt={`Antes - ${current.name}`}
            width={150}
            height={250}
            className="w-full h-[200px] object-cover rounded"
          />
        </div>

        <div className="flex-1 relative">
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">DEPOIS</div>
          <Image
            src={current.after || "/placeholder.svg"}
            alt={`Depois - ${current.name}`}
            width={150}
            height={250}
            className="w-full h-[200px] object-cover rounded"
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-2">
        <div className="bg-pink-100 px-3 py-1 rounded-full text-pink-600 font-bold text-sm">{current.weight}</div>
        <div className="bg-green-100 px-3 py-1 rounded-full text-green-600 font-bold text-sm">{current.time}</div>
      </div>

      <div className="flex justify-between mt-3">
        <button onClick={prevSlide} className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm">
          ← Anterior
        </button>
        <button onClick={nextSlide} className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm">
          Próximo →
        </button>
      </div>
    </div>
  )
}
