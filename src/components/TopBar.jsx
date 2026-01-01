export default function TopBar() {
  const categories = [
    "All",
    "Pop",
    "Rock",
    "Hip-Hop",
    "EDM",
    "Indie",
    "Jazz",
    "Lo-Fi"
  ]

  return (
    <div className="topbar">
      {categories.map(cat => (
        <button key={cat}>{cat}</button>
      ))}
    </div>
  )
}
