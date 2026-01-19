import Link from "next/link";

// Adicionei tipagem simples caso use TypeScript, se for JS ignore os ": string"
const NavBtn = ({ active = false, children, href = "#" }: { active?: boolean, children: React.ReactNode, href?: string }) => {
  return (
    <Link 
      href={href} 
      className={`text-sm hover:font-bold transition-all duration-150 ease-in hover:-translate-y-1 hover:border-zinc-400 uppercase tracking-wider border p-2 px-4 rounded-full hover:text-zinc-900 ${
        active ? 'font-bold border-zinc-400 text-zinc-900' : 'border-transparent text-zinc-600'
      }`}
    >
      {children}
    </Link>
  )
}

export default NavBtn;