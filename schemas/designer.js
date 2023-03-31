import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'designer',
  title: 'Designer',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
  ],
})