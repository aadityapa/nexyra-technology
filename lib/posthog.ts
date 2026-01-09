import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
  posthog.init('YOUR_POSTHOG_KEY', {
    api_host: 'https://app.posthog.com',
  })
}

export default posthog
