"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Download,
  Eye,
  CheckCircle,
  Youtube,
  Facebook,
  Instagram,
  Camera,
  MessageCircle,
  Play,
  Grid3X3,
  Gamepad2,
  MessageSquare,
  MoreHorizontal,
  Sparkles,
  Shield,
  Zap,
  Copy,
  Link,
} from "lucide-react"
import Image from "next/image"

export default function VideoDownloader() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [videoDetails, setVideoDetails] = useState({
    title: "Champion Stars Unlimited | Episode 313 | 23rd December 2023 | TV Derana",
    thumbnail: "/images/video-thumbnail.png",
    ready: false,
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [focusedPlatform, setFocusedPlatform] = useState<number | null>(null)
  const [buttonClicked, setButtonClicked] = useState<string | null>(null)
  const [inputFocused, setInputFocused] = useState(false)

  const platforms = [
    { name: "YouTube", icon: Youtube, color: "text-red-500", bgColor: "bg-red-50", hoverColor: "hover:bg-red-100" },
    {
      name: "Facebook",
      icon: Facebook,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      hoverColor: "hover:bg-pink-100",
    },
    { name: "TikTok", icon: Camera, color: "text-gray-600", bgColor: "bg-gray-50", hoverColor: "hover:bg-gray-100" },
    {
      name: "Twitter",
      icon: MessageCircle,
      color: "text-sky-500",
      bgColor: "bg-sky-50",
      hoverColor: "hover:bg-sky-100",
    },
    { name: "Vimeo", icon: Play, color: "text-blue-600", bgColor: "bg-blue-50", hoverColor: "hover:bg-blue-100" },
    {
      name: "Snapchat",
      icon: Grid3X3,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      hoverColor: "hover:bg-yellow-100",
    },
    {
      name: "Twitch",
      icon: Gamepad2,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
    },
    {
      name: "Reddit",
      icon: MessageSquare,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-100",
    },
    {
      name: "More...",
      icon: MoreHorizontal,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      hoverColor: "hover:bg-emerald-100",
    },
  ]

  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Download videos in seconds", delay: "delay-0" },
    { icon: Shield, title: "100% Secure", description: "Your privacy is protected", delay: "delay-100" },
    { icon: Sparkles, title: "HD Quality", description: "Best quality downloads", delay: "delay-200" },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handlePreview = async () => {
    if (!url.trim()) return

    setButtonClicked("preview")
    setTimeout(() => setButtonClicked(null), 200)

    setIsLoading(true)
    setShowSuccess(false)
    setProgress(0)
    setVideoDetails((prev) => ({ ...prev, ready: false }))

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 40)

    setTimeout(() => {
      clearInterval(progressInterval)
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        setVideoDetails((prev) => ({ ...prev, ready: true }))
        setShowSuccess(true)
      }, 300)
    }, 2000)
  }

  const handleDownload = () => {
    setButtonClicked("download")
    setTimeout(() => setButtonClicked(null), 200)
    console.log("Downloading video...")
  }

  const handlePlatformClick = (index: number) => {
    setFocusedPlatform(index)
    setTimeout(() => setFocusedPlatform(null), 300)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>

      <div
        className={`relative z-10 max-w-4xl mx-auto px-4 py-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header Section */}
        <div className="text-center space-y-6 mb-12">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 text-gray-600 text-sm font-medium shadow-sm transition-all duration-500 hover:shadow-md hover:scale-105 ${isVisible ? "animate-bounce-in" : ""}`}
          >
            <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
            Professional Video Downloader
          </div>
          <h1
            className={`text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-purple-700 to-blue-700 bg-clip-text text-transparent leading-tight transition-all duration-700 ${isVisible ? "animate-slide-up" : ""}`}
          >
            Video Downloader
          </h1>
          <p
            className={`text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-900 ${isVisible ? "animate-fade-in-up" : ""}`}
          >
            Download videos from your favorite platforms in the highest quality. Fast, secure, and completely free.
          </p>
        </div>

        {/* Features Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer group ${feature.delay} ${isVisible ? "animate-slide-in-left" : ""}`}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-200">
                <feature.icon className="w-5 h-5 text-white group-hover:animate-pulse" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold group-hover:text-purple-700 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Input Section */}
        <Card
          className={`bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl mb-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${isVisible ? "animate-scale-in" : ""}`}
        >
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="relative group">
                <Input
                  value={url}
                  onChange={handleInputChange}
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
                  placeholder="Paste your video URL here..."
                  className={`bg-gray-50/50 border-gray-200 text-gray-900 placeholder:text-gray-500 text-lg py-6 px-6 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md ${inputFocused ? "scale-[1.02] shadow-lg" : ""}`}
                />
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 transition-opacity duration-300 pointer-events-none ${inputFocused ? "opacity-100" : "opacity-0"}`}
                ></div>
                {url && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-purple-500 transition-colors duration-200 hover:scale-110">
                      <Link className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-purple-500 transition-colors duration-200 hover:scale-110">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleDownload}
                  className={`bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex-1 hover:scale-105 active:scale-95 ${buttonClicked === "download" ? "animate-pulse scale-95" : ""}`}
                  disabled={isLoading || !url.trim()}
                >
                  <Download
                    className={`w-5 h-5 mr-2 transition-transform duration-200 ${buttonClicked === "download" ? "animate-bounce" : ""}`}
                  />
                  Download Video
                </Button>

                <Button
                  onClick={handlePreview}
                  className={`bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95 ${buttonClicked === "preview" ? "animate-pulse scale-95" : ""}`}
                  disabled={isLoading || !url.trim()}
                >
                  <Eye
                    className={`w-5 h-5 mr-2 transition-transform duration-200 ${buttonClicked === "preview" ? "animate-bounce" : ""}`}
                  />
                  {isLoading ? "Analyzing..." : "Preview"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loading Section */}
        {isLoading && (
          <Card className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl mb-8 animate-slide-in-up">
            <CardContent className="p-8">
              <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-gray-200 border-t-cyan-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-spin animation-delay-150"></div>
                  <div className="absolute inset-2 w-12 h-12 border-2 border-transparent border-t-blue-400 rounded-full animate-spin animation-delay-300"></div>
                </div>

                <div className="text-center space-y-2 animate-fade-in">
                  <h3 className="text-2xl font-bold text-gray-900">Analyzing Video</h3>
                  <p className="text-gray-600">Fetching video details and preparing download...</p>
                </div>

                <div className="w-full max-w-md space-y-3">
                  <div className="flex justify-between text-sm text-gray-700 font-medium">
                    <span>Progress</span>
                    <span className="animate-pulse">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-full transition-all duration-100 ease-out shadow-sm relative overflow-hidden"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-md space-y-4 mt-6">
                  <div className="flex gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-100 animate-pulse-subtle">
                    <div className="w-20 h-14 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse animation-delay-100"></div>
                      <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse animation-delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Video Preview Card */}
        {videoDetails.ready && (
          <Card className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl mb-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-slide-in-up">
            <CardContent className="p-8">
              <div className="flex gap-6">
                <div className="w-32 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden flex-shrink-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <Image
                    src="/placeholder.svg?height=80&width=128"
                    alt="Video thumbnail"
                    width={128}
                    height={80}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-gray-900 font-bold text-xl leading-tight hover:text-purple-700 transition-colors duration-200 cursor-pointer">
                    {videoDetails.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200 hover:bg-emerald-100 transition-all duration-200 hover:scale-105 animate-bounce-in">
                      <CheckCircle className="w-4 h-4 animate-pulse" />
                      Ready to download
                    </span>
                    <span className="text-gray-500 text-sm animate-fade-in">HD Quality Available</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Success Message */}
        {showSuccess && (
          <Card className="bg-emerald-50/80 backdrop-blur-xl border border-emerald-200 shadow-xl mb-8 animate-slide-in-up">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-emerald-700">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center animate-bounce-in">
                  <CheckCircle className="w-6 h-6 animate-pulse" />
                </div>
                <div className="animate-fade-in-right">
                  <h4 className="font-semibold text-lg">Success!</h4>
                  <p className="text-emerald-600">Video details loaded successfully and ready for download.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Supported Platforms */}
        <Card className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Supported Platforms</h2>
              <p className="text-gray-600">Download from all major video platforms</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handlePlatformClick(index)}
                >
                  <div
                    className={`flex flex-col items-center space-y-3 p-4 rounded-xl bg-gray-50/50 hover:bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-2 ${platform.hoverColor} ${focusedPlatform === index ? "scale-110 shadow-lg -translate-y-2" : ""}`}
                  >
                    <div
                      className={`w-14 h-14 ${platform.bgColor} rounded-xl flex items-center justify-center group-hover:scale-125 transition-all duration-300 shadow-sm group-hover:shadow-md ${focusedPlatform === index ? "animate-bounce" : ""}`}
                    >
                      <platform.icon className={`w-7 h-7 ${platform.color} group-hover:animate-pulse`} />
                    </div>
                    <span className="text-gray-700 font-medium text-center group-hover:text-gray-900 transition-colors duration-200">
                      {platform.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
