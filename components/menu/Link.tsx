import { useRouter } from 'next/dist/client/router'
import { Dispatch, FC, ReactNode, SetStateAction } from 'react'

interface LinkProps {
  title: string
  href: string
  children: ReactNode
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>
  action?: () => void
}

const Link: FC<LinkProps> = ({
  title,
  href,
  children,
  setShowMobileMenu,
  action,
}) => {
  const router = useRouter()

  return (
    <li>
      <a
        onClick={() => {
          setShowMobileMenu(false)
          router.push(href)
          action && action()
        }}
        className="flex items-center gap-2 hover:underline cursor-pointer"
      >
        {children}
        {title}
      </a>
    </li>
  )
}

export default Link
