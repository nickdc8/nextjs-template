import ThemeToggle from '@components/components/ThemeToggle'
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline dark:text-white">
        Hello world!
      </h1>
      <ThemeToggle />
    </div>
  )
}
