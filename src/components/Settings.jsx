export const Settings = ({ onClick }) => {
  return (
    <div className="text-xl font-mono text-slate-500 dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors duration-300">
        <button onClick={onClick}>Settings</button>
    </div>
  )
}