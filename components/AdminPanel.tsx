'use client'
import Link from 'next/link'

export default function AdminPanel({ open, onClose }: any) {
  return (
    <aside className={`admin-panel ${open ? 'open' : ''}`}>
      <h2>Admin Access</h2>
      <Link href="/admin/login">Login</Link>
      <button onClick={onClose}>Close</button>
    </aside>
  )
}
