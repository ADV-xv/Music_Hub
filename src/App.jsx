import Sidebars from "./components/ Sidebars.jsx"
import TopBar from "./components/TopBar.jsx"
import ArtistRow from "./components/ArtistRow.jsx"
import MusicGrid from "./components/MusicGrid.jsx"

export default function App() {
  return (
    <div className="app">
      <Sidebars />
      <div className="main">
        <TopBar />
        <ArtistRow />
        <MusicGrid />
      </div>
    </div>
  )
}
