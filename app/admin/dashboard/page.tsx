'use client'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'
import { logout } from '@/lib/auth'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()

  return (
    <div className="dashboard">
      <h1>Analytics</h1>

      <Line
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr'],
          datasets: [{
            label: 'Visitors',
            data: [120, 300, 280, 500],
            borderColor: '#8b5cf6'
          }]
        }}
      />

      <button onClick={() => {
        logout()
        router.push('/')
      }}>
        Logout
      </button>
    </div>
  )
}
