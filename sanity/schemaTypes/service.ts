import { defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'depth',
      title: 'Parallax Depth',
      type: 'number',
      description: 'Controls how much this card floats on scroll (10–80)',
      initialValue: 40,
    },
    {
      name: 'video',
      title: 'Background Video',
      type: 'file',
      options: { accept: 'video/mp4' },
    },
  ],
})
