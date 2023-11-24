import ThemeToggle from "@/app/components/ThemeToggle";

export default function SiteHeader() {
    return (
        <header className="py-3 px-3 flex justify-between border-b-2 border-cyan-300 dark:border-night-rider-500 bg-cyan-200 dark:bg-night-rider-900">
            <h1 className="font-extrabold tracking-wide text-2xl text-cyan-900 dark:text-night-rider-200">meow click thing</h1>
            <ThemeToggle/>
        </header>
    )
}