export default {
  name: 'gig',
  type: 'document',
  title: 'Gig',
  fields: [
    {
      name: 'date',
      type: 'datetime',
      title: 'Date'
    },
    {
      name: 'venue',
      type: 'string',
      title: 'Venue'
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location'
    },
    {
      name: 'ticketLink',
      type: 'url',
      title: 'Ticket Link'
    },
    {
      name: 'venueLink',
      type: 'url',
      title: 'Venue Link'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}
