import { Card, CardContent } from "@/components/ui/card"
export default function FoodPage() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <h1 className="text-4xl font-bold mb-8">Food & Dining</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Culinary Experiences</h2>
            <p className="text-muted-foreground">Explore recipes and dining recommendations.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}