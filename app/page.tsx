import Link from "next/link"
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Sparkles className="h-5 w-5 text-blue-500" />
            <span>PostGenius</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/generate">
              <Button variant="ghost">Generate Post</Button>
            </Link>
            {/* <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link> */}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Generate LinkedIn Posts Instantly
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Create engaging, professional LinkedIn content in seconds with our AI-powered tool. Save time and
                  boost your professional presence.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/generate">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    Generate a Post Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our tool is designed to make content creation effortless and effective.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-3">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">AI-Powered</h3>
                <p className="text-center text-muted-foreground">
                  Leverage advanced AI to create professional, engaging content tailored to your needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-3">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Multiple Tones</h3>
                <p className="text-center text-muted-foreground">
                  Choose from various tones to match your personal brand and communication style.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-3">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Customizable</h3>
                <p className="text-center text-muted-foreground">
                  Edit and refine generated posts to perfectly match your voice and message.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Boost Your LinkedIn Presence?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Start creating engaging posts that resonate with your network and showcase your expertise.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/generate">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    Generate a Post Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Hear from professionals who have transformed their LinkedIn presence with our tool.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div>
                  <p className="mb-4 italic text-muted-foreground">
                    "This tool has saved me hours of content creation time. The posts are engaging and professional."
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Marketing Director</p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div>
                  <p className="mb-4 italic text-muted-foreground">
                    "I've seen a 40% increase in engagement since I started using this tool for my weekly posts."
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Tech Entrepreneur</p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div>
                  <p className="mb-4 italic text-muted-foreground">
                    "The variety of tones and styles helps me maintain a consistent yet diverse content strategy."
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Priya Patel</p>
                  <p className="text-sm text-muted-foreground">Career Coach</p>
                </div>
              </div>
            </div>
          </div>
        </section>
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

