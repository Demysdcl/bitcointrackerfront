const Card = ({ children, className }: any) => {
  return (
    <div className={`shadow border p-4 rounded-lg ${className}`}>
      {children}
    </div>
  )
}

export default Card
