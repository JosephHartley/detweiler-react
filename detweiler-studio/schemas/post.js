export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at'
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    }
  ]
}
