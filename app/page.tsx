import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="serif-heading text-5xl font-light tracking-wide lg:text-6xl text-foreground">
            Timeless Style, Modern Living
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto sans-text">
            A curated journey through fashion, beauty, and conscious living.
          </p>
          <div className="mt-12 flex gap-4 justify-center">
            <Button size="lg" className="px-8 rounded-none">Explore Now</Button>
            <Button size="lg" variant="outline" className="px-8 rounded-none">Learn More</Button>
          </div>
        </div>
      </section>
      {/* Featured Categories */}
      <section className="container mx-auto px-4 py-24 bg-muted/30">
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="bg-background border-none shadow-sm hover:shadow-md transition-shadow rounded-none">
            <CardContent className="pt-6">
              <h3 className="serif-heading text-xl font-normal mb-3">Fashion</h3>
              <p className="text-muted-foreground leading-relaxed sans-text">
                Explore the art of refined, timeless style.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background border-none shadow-sm hover:shadow-md transition-shadow rounded-none">
            <CardContent className="pt-6">
              <h3 className="serif-heading text-xl font-normal mb-3">Beauty</h3>
              <p className="text-muted-foreground leading-relaxed sans-text">
                Discover natural beauty and self-care rituals.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background border-none shadow-sm hover:shadow-md transition-shadow rounded-none">
            <CardContent className="pt-6">
              <h3 className="serif-heading text-xl font-normal mb-3">Lifestyle</h3>
              <p className="text-muted-foreground leading-relaxed sans-text">
                Embrace mindful living and elegant simplicity.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Additional Content Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="serif-heading text-3xl font-light tracking-wide mb-6">
            Discover Our World
          </h2>
          <p className="text-muted-foreground mb-8 sans-text">
            Immerse yourself in a carefully curated collection of style, beauty, and lifestyle content.
          </p>
          <Button variant="outline" className="px-8 rounded-none">
            View Collections
          </Button>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 h-16 flex items-center justify-center">
          <p className="text-sm text-muted-foreground sans-text">
            © 2024 Style & Life. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}