import { useState } from 'react'
import { EmailStep } from './EmailStep'
import { LoginStep } from './LoginStep'
import { RegisterStep } from './RegisterStep'
import { authService } from '../../../services/authService'

type AuthStep = 'email' | 'login' | 'register' | 'loading'

export const AuthDropdown = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState<AuthStep>('email')
  const [email, setEmail] = useState('')

  const checkEmail = async () => {
    try {
      setStep('loading')

      const {exists} = await authService.checkEmail(email)

      setStep(exists ? 'login' : 'register')
    } catch(error) {
      console.error(error)
      setStep('email')
    }
  }

  return (
    <div className="absolute top-full right-0 mt-2 z-50 w-80 rounded-xl bg-white shadow-lg border">
      {step == 'email' && <EmailStep email={email} onChange={setEmail} onSubmit={checkEmail} />}
      {step == 'login' && <LoginStep email={email} onBack={() => setStep('email')} />}
      {step == 'register' && <RegisterStep email={email} onBack={() => setStep('email')} />}
    </div>
  )
}
