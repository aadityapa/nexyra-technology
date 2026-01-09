import { defineType } from 'sanity'

export default defineType({
  name: 'pricing',
  title: 'Pricing Plan',
  type: 'document',
  fields: [
    { name: 'name', title: 'Plan Name', type: 'string' },
    { name: 'price', title: 'Price', type: 'string' },
    { name: 'featured', title: 'Featured', type: 'boolean' },
  ],
})
