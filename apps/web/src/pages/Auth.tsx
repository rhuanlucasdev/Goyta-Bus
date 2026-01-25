type AuthProps = {
  onClose: () => void
}

export const Auth = ({ onClose }: AuthProps) => {
  return (
    <div className="modal">
      <div>MODAL DE LOGIN TESTE</div>
      <button onClick={onClose}>Close</button>
    </div>
  )
}
