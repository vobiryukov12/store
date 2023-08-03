export default function IconSwitch({ icon, onSwitch }) {
  return (
    <span className="header__icon material-symbols-outlined" onClick={onSwitch}>{icon}</span>
  )
}

