'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MainNav } from '@/components/main-nav'
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header with Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Your Style Journey Starts Here
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            Discover the latest in fashion, beauty, and lifestyle trends.
          </p>
          <div className="mt-12 flex gap-4 justify-center">
            <Button size="lg" className="px-8">Explore Now</Button>
            <Button size="lg" variant="outline" className="px-8">Learn More</Button>
          </div>
        </div>
      </section>
      {/* Featured Categories */}
      <section className="container mx-auto px-4 py-24 bg-muted/30">
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Fashion</h3>
              <p className="text-muted-foreground leading-relaxed">
                Explore the latest trends in style, accessories, and fashion icons.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Beauty</h3>
              <p className="text-muted-foreground leading-relaxed">
                Discover tips and tricks for skincare, makeup, and hair care.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Lifestyle</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get inspired with food, interior design, and travel content.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 h-16 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Style & Life. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}