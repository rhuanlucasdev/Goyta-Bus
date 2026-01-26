export const RegisterStep = ({ email, onBack }: { email: string; onBack: () => void }) => {
  return (
    <div className="p-4 space-y-4">
      <button onClick={onBack} className="text-sm text-gray-500">
        ← Voltar
      </button>

      <p className="text-sm text-gray-700">{email}</p>

      <input placeholder="none" className="w-full border rounded-md p-2" />
      <input type="password" placeholder="Senha" className="w-full border rounded-md p-2" />

      <button className="w-full bg-blue-900 text-white py-2 rounded">Criar Conta</button>
    </div>
  )
}
