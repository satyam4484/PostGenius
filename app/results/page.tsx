"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Copy, RefreshCw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {generateContent} from "../../network/agent";


const baseURL = "https://localhost:8000/api"

// Sample generated posts based on form data
const generateSamplePosts = async (topic: string, tone: string, postType: string) => {
  const response = await generateContent.generateSamplePosts(topic,tone, postType);
  const responseData = await response.data;
  return responseData.data;
}

export default function ResultsPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [formData, setFormData] = useState({ topic: "", tone: "", postType: "" })
  const [posts, setPosts] = useState<any[]>([])
  const [editedPosts, setEditedPosts] = useState<any[]>([])
  const [isRegenerating, setIsRegenerating] = useState(false)

  useEffect(() => {
    // Retrieve form data from session storage
    const storedData = sessionStorage.getItem("postGeneratorData")
    if (!storedData) {
      router.push("/generate")
      return
    }

    const parsedData = JSON.parse(storedData)
    setFormData(parsedData)

    // Generate sample posts based on the form data
    generateSamplePosts(parsedData.topic, parsedData.tone, parsedData.postType).then((generatedPosts) => {
      setPosts(generatedPosts)
      setEditedPosts(generatedPosts)
    })
  }, [router])

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content)
    toast({
      title: "Copied to clipboard",
      description: "Your post has been copied to clipboard",
    })
  }



  const handleEdit = (index: number, newContent: string) => {
    setEditedPosts((prev) => prev.map((post, i) => (i === index ? { ...post, content: newContent } : post)))
  }

  const handleRegenerate = () => {
    setIsRegenerating(true)

    // Simulate API call delay
    setTimeout(() => {
      generateSamplePosts(formData.topic, formData.tone, formData.postType).then((newPosts) => {
        setPosts(newPosts)
        setEditedPosts(newPosts)
        setIsRegenerating(false)

        toast({
          title: "Posts regenerated",
          description: "New post variations have been created",
        })
      })
    }, 1500)
  }


  console.log("postts---",posts)
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
            <Link href="/generate">
              <Button variant="ghost">Generate New</Button>
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
            href="/generate"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Generator
          </Link>

          <div className="mb-8 space-y-4">
            <h1 className="text-3xl font-bold">Your Generated LinkedIn Posts</h1>
            <p className="text-muted-foreground">
              Here are your AI-generated posts about <span className="font-medium">{formData.topic}</span> with a{" "}
              <span className="font-medium">{formData.tone}</span> tone in a{" "}
              <span className="font-medium">{formData.postType}</span> style.
            </p>
            <div className="flex justify-end">
              <Button
                variant="outline"
                onClick={handleRegenerate}
                disabled={isRegenerating}
                className="flex items-center gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${isRegenerating ? "animate-spin" : ""}`} />
                {isRegenerating ? "Regenerating..." : "Regenerate Posts"}
              </Button>
            </div>
          </div>

          <Tabs defaultValue="post1" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="post1">Post 1</TabsTrigger>
              <TabsTrigger value="post2">Post 2</TabsTrigger>
              <TabsTrigger value="post3">Post 3</TabsTrigger>
            </TabsList>

            {editedPosts.map((post, index) => (
              <TabsContent key={index} value={`post${index + 1}`}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">LinkedIn Post {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={post.content}
                      onChange={(e) => handleEdit(index, e.target.value)}
                      className="min-h-[300px] font-medium"
                    />

                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => handleCopy(post.content)}
                      className="flex items-center gap-2"
                    >
                      <Copy className="h-4 w-4" />
                      Copy to Clipboard
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
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

