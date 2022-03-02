import { CashIcon, ChartBarIcon, DocumentAddIcon } from '@heroicons/react/solid'
import { Dispatch, FC, SetStateAction } from 'react'
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

  return (
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
    </ul>
  )
}

export default OptionMenu
