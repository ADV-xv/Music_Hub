export default function Logo() {
  return (
    <div className="logo">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 18V6l10-2v12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="7" cy="18" r="3" fill="currentColor" />
        <circle cx="17" cy="16" r="3" fill="currentColor" />
      </svg>
      <span>MusicHub</span>
    </div>
  )
}
