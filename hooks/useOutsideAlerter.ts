import { MutableRefObject, useEffect } from 'react'

export default function useOutsideAlerter(
  ref: MutableRefObject<any>,
  handleOutside: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleOutside()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}
