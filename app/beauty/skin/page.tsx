import { Card, CardContent } from "@/components/ui/card"
export default function SkinPage() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <h1 className="text-4xl font-bold mb-8">Skincare</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Skincare Routines</h2>
            <p className="text-muted-foreground">Learn about effective skincare routines and products.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}