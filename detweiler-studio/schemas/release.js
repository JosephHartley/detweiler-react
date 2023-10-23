export default {
  name: 'release',
  type: 'document',
  title: 'Release',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'releaseDate',
      type: 'date',
      title: 'Release Date'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'link',
      type: 'url',
      title: 'Buy Link'
    },
    {
      name: 'stream',
      type: 'url',
      title: 'Stream Link'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      }
    }
  ]
}
