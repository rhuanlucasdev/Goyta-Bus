import { UserCheck } from 'lucide-react'

export const RegisterStep = ({ onBack }: { email: string; onBack: () => void }) => {
  return (
    <div className="px-12 py-18 space-y-4 bg-white rounded-[40px] w-[90vw]">
      <button onClick={onBack} className="text-sm text-gray-500">
        ← Voltar
      </button>

      <p className="text-xl text-gray-700 font-bold">E-mail não encontrado</p>

      <h1 className="text-blue-900 text-6xl font-semibold mb-10">Cadastre-se!</h1>

      <label htmlFor="e-mail" className="font-semibold text-3xl text-blue-900">E-mail</label>
      <input type="mail" placeholder="ex: email@domain.com" className="w-full border py-5 px-8 text-4xl rounded-[30px] border-slate-300 bg-slate-200 text-slate-500 focus:outline-blue-900 shadow-2xs mb-10 mt-3" id="e-mail" />

      <label htmlFor="password" className="font-semibold text-3xl text-blue-900">Senha</label>
      <input type="password" placeholder="********" className="w-full border py-5 px-8 text-4xl rounded-[30px] border-slate-300 bg-slate-200 text-slate-500 focus:outline-blue-900 shadow-2xs mb-10 mt-3" id="password" />

      <p className="mb-2 text-gray-700 font-semibold text-xl">A senha deve conter</p>

      <ul className="list-disc list-inside text-gray-700 text-xl p-1 mb-7">
        <li>No mínimo 8 caracteres</li>
        <li>Pelo menos 1 letra maiúscula</li>
        <li>Pelo menos 1 letra minúscula</li>
        <li>Pelo menos 1 número</li>
        <li>Pelo menos 1 caractere especial (ex: ! @ # $ % & *)</li>
      </ul>

      <button className="w-1/4 bg-blue-900 text-white py-4 rounded text-3xl hover:scale-[105%] transition-all flex items-center justify-center gap-10 rounded-[30px]">
        Criar Conta
        <UserCheck size={35} />
      </button>
    </div>
  )
}