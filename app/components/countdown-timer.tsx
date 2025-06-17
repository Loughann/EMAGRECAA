"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ hours, minutes, seconds }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours,
    minutes,
    seconds,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer)
          return prevTime
        }

        let newSeconds = prevTime.seconds - 1
        let newMinutes = prevTime.minutes
        let newHours = prevTime.hours

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }

        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0")
  }

  return (
    <div className="flex justify-center items-center gap-2 my-2">
      <div className="bg-black text-white px-3 py-2 rounded-md">
        <span className="text-xl font-bold">{formatNumber(timeLeft.hours)}</span>
        <span className="text-xs block">horas</span>
      </div>
      <span className="text-xl font-bold">:</span>
      <div className="bg-black text-white px-3 py-2 rounded-md">
        <span className="text-xl font-bold">{formatNumber(timeLeft.minutes)}</span>
        <span className="text-xs block">min</span>
      </div>
      <span className="text-xl font-bold">:</span>
      <div className="bg-black text-white px-3 py-2 rounded-md">
        <span className="text-xl font-bold">{formatNumber(timeLeft.seconds)}</span>
        <span className="text-xs block">seg</span>
      </div>
    </div>
  )
}
