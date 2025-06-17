"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Testimonial {
  image: string
  weight: string
  time: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  interval?: number // Intervalo em milissegundos para a troca automática
}

export default function TestimonialCarousel({ testimonials, interval = 3000 }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, interval)

    return () => clearInterval(timer)
  }, [testimonials.length, interval])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden max-w-sm mx-auto">
      <div className="relative aspect-square">
        <Image
          src={currentTestimonial.image || "/placeholder.svg"}
          alt={`Depoimento - ${currentTestimonial.weight} em ${currentTestimonial.time}`}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white rounded-full h-16 w-16 flex flex-col items-center justify-center shadow-lg">
            <span className="text-[#FF9D00] font-bold text-lg leading-none">{currentTestimonial.weight}</span>
            <span className="text-[#555555] text-[10px] leading-tight">{currentTestimonial.time}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-3">
        <div className="flex gap-1">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-[#333333]" : "bg-[#DDDDDD]"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
