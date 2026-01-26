import { LogIn } from 'lucide-react'

export const LoginStep = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="py-6 px-20 space-y-2 bg-white rounded-[40px] w-[90vw]">
      <button
        onClick={onBack}
        className="group text-xl text-gray-500 cursor-pointer flex items-center gap-2 hover:text-gray-800 transition-colors"
      >
        <span className="font-bold transition-transform group-hover:-translate-x-1.5 duration-200">
          ←
        </span>
        <span>Voltar</span>
      </button>

      <p className="text-4xl text-slate-700">e-mail encontrado!</p>
      <h3 className="font-semibold text-6xl text-blue-900 pb-8">Digite sua senha!</h3>
      <input
        type="password"
        placeholder="Senha"
        className="w-full border py-8 px-8 text-4xl rounded-[40px] border-slate-300 bg-slate-200 text-slate-500 focus:outline-blue-900 shadow-2xs mb-10"
        required
      />

      <button className="w-105 bg-blue-900 text-blue-100 py-4 px-10 text-center rounded-4xl text-5xl cursor-pointer hover:scale-[105%] transition-all">
        <p className="flex gap-2 items-center justify-center">
          Continuar
          <LogIn size={47} />
        </p>
      </button>
    </div>
  )
}
