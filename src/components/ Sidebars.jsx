import Logo from "./Logo"

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Logo />

      <nav>
        <a>Home</a>
        <a>Discover</a>
        <a>Genres</a>
        <a>Trending</a>
        <a>Library</a>
      </nav>
    </aside>
  )
}
