import { sanity } from '@/lib/sanity'

export async function getContact() {
  return sanity.fetch(
    `*[_type == "contact"][0]{ email, phone, whatsapp }`
  )
}
