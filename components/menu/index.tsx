import { MenuIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import OutsideAlerter from '../Outsider'
import OptionMenu from './OptionMenu'
const Menu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <>
      <OptionMenu
        setShowMobileMenu={setShowMobileMenu}
        className="hidden md:flex items-center gap-4"
      />

      <div className="flex md:hidden relative">
        <MenuIcon
          width="24"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />

        {showMobileMenu && (
          <OutsideAlerter handleOutside={() => setShowMobileMenu(false)}>
            <OptionMenu
              setShowMobileMenu={setShowMobileMenu}
              className="min-w-max z-10 gap-4 absolute right-0 top-6 bg-indigo-600 p-10 flex flex-col"
            />
          </OutsideAlerter>
        )}
      </div>
    </>
  )
}

export default Menu
