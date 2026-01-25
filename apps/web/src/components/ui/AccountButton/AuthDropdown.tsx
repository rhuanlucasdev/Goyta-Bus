import { useState } from 'react'
import { EmailStep } from './EmailStep'

type AuthStep = 'email' | 'login' | 'register' | 'loading'

export const AuthDropdown = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState<AuthStep>('email')
  const [email, setEmail] = useState('')

  const checkEmail = async () => {
    setStep('loading')

    const res = await fetch('/auth/check-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    const { exists } = await res.json()

    setStep(exists ? 'login' : 'register')
  }

  return (
    <div>
      {step == 'email' && <EmailStep email={email} onChange={setEmail} onSubmit={checkEmail} />}
    </div>
  )
}
