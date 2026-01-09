import { defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Info',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
    },
  ],
})
