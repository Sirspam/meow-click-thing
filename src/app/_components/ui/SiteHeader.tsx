import ThemeToggle from "@/app/_components/ui/ThemeToggle"

export default function SiteHeader() {
  return (
    <header className="h-16 flex border-b-2 border-cyan-300 dark:border-night-rider-500 bg-cyan-200 dark:bg-night-rider-900">
      <div className="container flex max-w-screen-2xl justify-between items-center">
        <h1 className="font-extrabold tracking-wide text-2xl text-cyan-900 dark:text-night-rider-200">
          meow click thing
        </h1>
        <ThemeToggle />
      </div>
    </header>
  )
}
