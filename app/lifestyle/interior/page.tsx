import { Card, CardContent } from "@/components/ui/card"
export default function InteriorPage() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <h1 className="text-4xl font-bold mb-8">Interior Design</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Home Styling</h2>
            <p className="text-muted-foreground">Interior design inspiration and decoration tips.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}