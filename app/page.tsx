import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="mb-8 decorative-line inline-block">
            <span className="text-sm uppercase tracking-widest text-foreground/60 sans-text">Est. 2024</span>
          </div>
          <h1 className="serif-heading text-5xl font-light tracking-wide lg:text-6xl text-foreground mb-4">
            Timeless Style,<br />Modern Living
          </h1>
          <div className="elegant-border">
            <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto sans-text pb-8">
              A curated journey through fashion, beauty, and conscious living.
            </p>
          </div>
          <div className="mt-12 flex gap-4 justify-center">
            <Button size="lg" className="px-8 rounded-none hover-lift">Explore Now</Button>
            <Button size="lg" variant="outline" className="px-8 rounded-none hover-lift">Learn More</Button>
          </div>
        </div>
      </section>
      {/* Featured Categories */}
      <section className="container mx-auto px-4 py-24 subtle-pattern">
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="bg-background/80 backdrop-blur-sm border-none shadow-sm hover:shadow-md transition-all duration-300 rounded-none hover-lift">
            <CardContent className="pt-6">
              <div className="image-frame mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
                  alt="Fashion"
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
              </div>
              <h3 className="serif-heading text-xl font-normal mb-3">Fashion</h3>
              <p className="text-muted-foreground leading-relaxed sans-text">
                Explore the art of refined, timeless style.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background/80 backdrop-blur-sm border-none shadow-sm hover:shadow-md transition-all duration-300 rounded-none hover-lift">
            <CardContent className="pt-6">
              <div className="image-frame mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80"
                  alt="Beauty"
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
              </div>
              <h3 className="serif-heading text-xl font-normal mb-3">Beauty</h3>
              <p className="text-muted-foreground leading-relaxed sans-text">
                Discover natural beauty and self-care rituals.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background/80 backdrop-blur-sm border-none shadow-sm hover:shadow-md transition-all duration-300 rounded-none hover-lift">
            <CardContent className="pt-6">
              <div className="image-frame mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&q=80"
                  alt="Lifestyle"
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
              </div>
              <h3 className="serif-heading text-xl font-normal mb-3">Lifestyle</h3>
              <p className="text-muted-foreground leading-relaxed sans-text">
                Embrace mindful living and elegant simplicity.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Quote Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-[800px] mx-auto text-center">
          <Separator className="mb-12 w-24 mx-auto opacity-20" />
          <blockquote className="serif-heading text-2xl font-light italic mb-6">
            "Style is a way to say who you are without having to speak."
          </blockquote>
          <p className="text-sm text-muted-foreground sans-text tracking-widest uppercase">
            — Rachel Zoe
          </p>
        </div>
      </section>
      {/* Additional Content Section */}
      <section className="container mx-auto px-4 py-24 bg-muted/20">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="serif-heading text-3xl font-light tracking-wide mb-6 decorative-line inline-block">
            Discover Our World
          </h2>
          <p className="text-muted-foreground mb-8 sans-text">
            Immerse yourself in a carefully curated collection of style, beauty, and lifestyle content.
          </p>
          <Button variant="outline" className="px-8 rounded-none hover-lift">
            View Collections
          </Button>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-[500px] mx-auto text-center">
          <h3 className="serif-heading text-2xl font-light mb-6">Join Our Journey</h3>
          <p className="text-muted-foreground mb-8 sans-text">
            Subscribe to receive curated content and exclusive updates.
          </p>
          <div className="flex gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-none w-full max-w-xs focus:outline-none focus:ring-1 focus:ring-foreground/20"
            />
            <Button className="rounded-none hover-lift">Subscribe</Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            <div>
              <h4 className="serif-heading text-lg mb-4">About</h4>
              <p className="text-sm text-muted-foreground sans-text">
                A space dedicated to timeless style and conscious living.
              </p>
            </div>
            <div>
              <h4 className="serif-heading text-lg mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground sans-text">
                hello@styleandlife.com
              </p>
            </div>
            <div>
              <h4 className="serif-heading text-lg mb-4">Follow</h4>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground sans-text">Instagram</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground sans-text">Pinterest</a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground sans-text">
              © 2024 Style & Life. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}