"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function GeneratePage() {
  const router = useRouter()
  const [isGenerating, setIsGenerating] = useState(false)
  const [formData, setFormData] = useState({
    topic: "",
    tone: "professional",
    postType: "engaging",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate API call delay
    setTimeout(() => {
      setIsGenerating(false)
      // Store form data in session storage to use in results page
      sessionStorage.setItem("postGeneratorData", JSON.stringify(formData))
      router.push("/results")
    }, 4000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Sparkles className="h-5 w-5 text-blue-500" />
            <span>PostGenius</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
            {/* <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link> */}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container max-w-4xl py-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl">Generate LinkedIn Post</CardTitle>
              <CardDescription>Fill in the details below to create your perfect LinkedIn post</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="topic">Enter your topic or keywords</Label>
                  <Input
                    id="topic"
                    placeholder="e.g., Leadership skills, Remote work tips, Industry trends"
                    value={formData.topic}
                    onChange={(e) => handleChange("topic", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="tone">Select Tone</Label>
                    <Select value={formData.tone} onValueChange={(value) => handleChange("tone", value)}>
                      <SelectTrigger id="tone">
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="persuasive">Persuasive</SelectItem>
                        <SelectItem value="inspirational">Inspirational</SelectItem>
                        <SelectItem value="educational">Educational</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="postType">Post Type</Label>
                    <Select value={formData.postType} onValueChange={(value) => handleChange("postType", value)}>
                      <SelectTrigger id="postType">
                        <SelectValue placeholder="Select post type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engaging">Engaging</SelectItem>
                        <SelectItem value="informative">Informative</SelectItem>
                        <SelectItem value="storytelling">Storytelling</SelectItem>
                        <SelectItem value="question">Question</SelectItem>
                        <SelectItem value="announcement">Announcement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                onClick={handleSubmit}
                disabled={!formData.topic || isGenerating}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              >
                {isGenerating ? (
                  <>
                    <svg
                      className="mr-2 h-4 w-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    Generate Post
                    <Sparkles className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 PostGenius. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

