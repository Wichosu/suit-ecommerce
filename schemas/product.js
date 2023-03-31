import { defineField, defineType } from "sanity";

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    }),
    defineField({
      name: 'img',
      title: 'Img',
      type: 'image',
    }),
    defineField({
      name: 'desc',
      title: 'Desc',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'size'}}],
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{type: 'reference', to: {type: 'color'}}],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'materials',
      title: 'Materials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'material'}}],
    }),
    defineField({
      name: 'designer',
      title: 'Designer',
      type: 'array',
      of: [{type: 'reference', to: {type: 'designer'}}]
    })
  ],

  preview: {
    select: {
      title: 'name',
      media: 'img',
    },
  }
})