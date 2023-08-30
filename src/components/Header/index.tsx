import { HeaderContainer } from './styles'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuItems = [
  {text: "Home", path: "/Home"},
  {text: "Trabalhos", path: "/"},
  {text: "Projetos", path: "/"},
  {text: "Sobre Mim", path: "/About"},
  {text: "Contato", path: "/"},
]
export function Header() {
  const pathName = usePathname()
  
  return (
    <HeaderContainer>
        <span>
          <p> Matheus Spindula</p>
        </span>
        <nav>
          { MenuItems.map((item) => 
            {
              const isActive = pathName === item.path;

              return (
                <Link key={item.path} className={isActive ? 'active' : ''}
                href={item.path}><span>#</span> {item.text}</Link>           
              )
            }
          )}
        </nav>
    </HeaderContainer>
  )
}
