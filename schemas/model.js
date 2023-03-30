import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'model',
  title: 'Model',
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