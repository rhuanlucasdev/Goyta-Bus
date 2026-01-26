import { LogIn } from 'lucide-react'

type EmailStepProps = {
  email: string
  onChange: (v: string) => void
  onSubmit: () => void
}

export const EmailStep = ({ email, onChange, onSubmit }: EmailStepProps) => {
  return (
    <div className="p-4 space-y-4 bg-white pt-14 pb-16 px-15 rounded-[40px] flex flex-col ">
      <h3 className="font-semibold text-6xl text-blue-900 pb-8">Insira seu e-mail</h3>

      <input
        value={email}
        onChange={(e) => onChange(e.target.value)}
        placeholder="ex.: email@domain.com"
        className="w-full border py-10 px-8 text-4xl rounded-[40px] border-slate-300 bg-slate-200 text-slate-500 focus:outline-blue-900 shadow-2xs mb-15.5"
      />

      <button
        onClick={onSubmit}
        className="w-105 bg-blue-900 text-blue-100 py-4 px-10 text-center rounded-4xl text-5xl cursor-pointer hover:scale-[105%] transition-all"
      >
        <p className="flex gap-2 items-center justify-center">
          Continuar
          <LogIn size={47} />
        </p>
      </button>
    </div>
  )
}
