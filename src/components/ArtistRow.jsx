export default function ArtistRow() {
  const artists = [
    "ECXO",
    "Lex",
    "Phantom",
    "HalfBuddha",
    "AnimeZone",
    "MovieTalks"
  ]

  return (
    <div className="artist-row">
      {artists.map(artist => (
        <div key={artist} className="artist-card">
          <div className="avatar"></div>
          <p>{artist}</p>
        </div>
      ))}
    </div>
  )
}
