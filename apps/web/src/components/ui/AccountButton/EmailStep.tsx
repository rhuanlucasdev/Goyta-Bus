type EmailStepProps = {
  email: string
  onChange: (v: string) => void
  onSubmit: () => void
}

export const EmailStep = ({ email, onChange, onSubmit }: EmailStepProps) => {
  return (
    <div className="p-4 space-y-4">
      <h3 className="font-semibold">Insira seu e-mail</h3>

      <input
        value={email}
        onChange={(e) => onChange(e.target.value)}
        placeholder="ex.: email@domain.com"
        className="w-full border rounded-md p-2"
      />

      <button onClick={onSubmit} className="w-full bg-blue-900 text-white py-2 rounded">
        Continuar
      </button>
    </div>
  )
}
