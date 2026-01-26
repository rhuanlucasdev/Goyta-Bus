import { useEffect, useRef, useState } from 'react'
import { EmailStep } from './EmailStep'
import { LoginStep } from './LoginStep'
import { RegisterStep } from './RegisterStep'
import { authService } from '../../../services/authService'

type AuthStep = 'email' | 'login' | 'register' | 'loading'

export const AuthDropdown = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState<AuthStep>('email')
  const [email, setEmail] = useState('')

  const dropdownRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose()
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [onClose])

  const checkEmail = async () => {
    try {
      setStep('loading')

      const { exists } = await authService.checkEmail(email)

      setStep(exists ? 'login' : 'register')
    } catch (error) {
      console.error(error)
      setStep('email')
    }
  }

  return (
    <div
      ref={dropdownRef}
      className="absolute top-20 right-4 mt-2 z-50 w-auto rounded-[40px] bg-[url('/fundo-modal.svg')] shadow-lg pt-11 px-10 pb-9"
    >
      {step == 'email' && <EmailStep email={email} onChange={setEmail} onSubmit={checkEmail} />}
      {step == 'login' && <LoginStep onBack={() => setStep('email')} />}
      {step == 'register' && <RegisterStep email={email} onBack={() => setStep('email')} />}
    </div>
  )
}
