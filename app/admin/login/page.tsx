'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { login } from '@/lib/auth'

export default function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const router = useRouter()

  const submit = () => {
    if (login(user, pass)) router.push('/admin/dashboard')
  }

  return (
    <div className="auth">
      <h1>Admin Login</h1>
      <input placeholder="Username" onChange={e => setUser(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPass(e.target.value)} />
      <button onClick={submit}>Login</button>
    </div>
  )
}
