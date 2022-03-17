import {
  CashIcon,
  ChartBarIcon,
  DocumentAddIcon,
  TemplateIcon,
} from '@heroicons/react/solid'
import { Dispatch, FC, SetStateAction } from 'react'
import { changeTheme } from '../../service/theme.service'
import Link from './Link'

interface OptionMenuProps {
  className: string
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>
}

const OptionMenu: FC<OptionMenuProps> = ({ className, setShowMobileMenu }) => {
  const options = [
    {
      title: 'Dashbord',
      href: '/',
      Icon: <ChartBarIcon width="16" />,
    },
    {
      title: 'Meu investimentos',
      href: '/investimentos',
      Icon: <CashIcon width="16" />,
    },
    {
      title: 'Cadastrar',
      href: '/cadastrar',
      Icon: <DocumentAddIcon width="16" />,
    },
  ]

  const handleTheme = () => {
    setShowMobileMenu(false)
    changeTheme()
  }

  return (
    <>
      <ul className={className}>
        {options.map(({ title, href, Icon }) => (
          <Link
            setShowMobileMenu={setShowMobileMenu}
            key={title}
            title={title}
            href={href}
          >
            {Icon}
          </Link>
        ))}
        <li>
          <button
            onClick={handleTheme}
            className="flex items-center gap-1 border border-white rounded-md px-4 py-1 active:opacity-75 transition-all"
          >
            <TemplateIcon width="16" /> Mudar tema
          </button>
        </li>
      </ul>
    </>
  )
}

export default OptionMenu
