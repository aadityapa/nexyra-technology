export function login(username: string, password: string) {
  if (username === 'admin' && password === 'admin123') {
    localStorage.setItem('token', 'fyni-admin-token')
    return true
  }
  return false
}

export function isAuthenticated() {
  return typeof window !== 'undefined' && !!localStorage.getItem('token')
}

export function logout() {
  localStorage.removeItem('token')
}
