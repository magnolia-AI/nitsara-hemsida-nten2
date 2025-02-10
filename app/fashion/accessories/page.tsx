import { Card, CardContent } from "@/components/ui/card"
export default function AccessoriesPage() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <h1 className="text-4xl font-bold mb-8">Accessories</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Must-Have Accessories</h2>
            <p className="text-muted-foreground">Complete your look with these essential accessories.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}