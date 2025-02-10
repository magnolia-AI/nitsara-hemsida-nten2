import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import Link from "next/link"
const categories = {
  fashion: {
    name: "Fashion",
    items: [
      { title: "Style", href: "/fashion/style" },
      { title: "Accessories", href: "/fashion/accessories" },
      { title: "Icons", href: "/fashion/icons" },
    ]
  },
  beauty: {
    name: "Beauty",
    items: [
      { title: "Skin", href: "/beauty/skin" },
      { title: "Makeup", href: "/beauty/makeup" },
      { title: "Hair", href: "/beauty/hair" },
    ]
  },
  lifestyle: {
    name: "Lifestyle",
    items: [
      { title: "Food", href: "/lifestyle/food" },
      { title: "Interior", href: "/lifestyle/interior" },
      { title: "Travel", href: "/lifestyle/travel" },
    ]
  }
}
export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.values(categories).map((category) => (
          <NavigationMenuItem key={category.name}>
            <NavigationMenuTrigger className="serif-heading font-normal">{category.name}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4">
                {category.items.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="block select-none space-y-1 rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground sans-text"
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}