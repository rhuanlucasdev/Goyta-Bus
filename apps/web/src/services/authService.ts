type CheckEmailResponse = {
  exists: boolean
}

export const authService = {
  async checkEmail(email: string): Promise<CheckEmailResponse> {
    const response = await fetch('http://localhost:8080/auth/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    if (!response.ok) {
      throw new Error('Erro ao verificar email')
    }

    return response.json()
  },
}
