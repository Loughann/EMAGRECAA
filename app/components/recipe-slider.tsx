"use client"

import { useState, useEffect } from "react" // Import useEffect
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface RecipeSliderProps {
  images: string[]
}

export default function RecipeSlider({ images: initialImages }: RecipeSliderProps) {
  // Limit the number of images to a maximum of 5
  const images = initialImages.slice(0, 5)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval) // Clean up the interval on component unmount
  }, [images.length]) // Re-run effect if number of images changes

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      <div className="overflow-hidden rounded-lg shadow-md aspect-square">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt="Receita"
          width={250}
          height={250}
          className="w-full h-full object-cover"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 shadow-md text-gray-600 hover:bg-opacity-90"
        aria-label="Receita anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 shadow-md text-gray-600 hover:bg-opacity-90"
        aria-label="Próxima receita"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="flex justify-center gap-1 mt-3">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-300"}`}
          ></span>
        ))}
      </div>
    </div>
  )
}
