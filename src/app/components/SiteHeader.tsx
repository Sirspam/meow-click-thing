import ThemeToggle from "@/app/components/ThemeToggle";

export default function SiteHeader() {
    return (
        <header className="flex justify-between">
            <h1>meow click thing</h1>
            <ThemeToggle/>
        </header>
    )
}