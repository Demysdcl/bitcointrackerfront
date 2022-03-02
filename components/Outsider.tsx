import { FC, ReactNode, useRef } from 'react'
import useOutsideAlerter from '../hooks/useOutsideAlerter'

interface OutsideAlerterProps {
  handleOutside: () => void
  children: ReactNode
  className?: string
}

const OutsideAlerter: FC<OutsideAlerterProps> = ({
  handleOutside,
  children,
  className,
}) => {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, handleOutside)

  return (
    <div className={className} ref={wrapperRef}>
      {children}
    </div>
  )
}

export default OutsideAlerter
