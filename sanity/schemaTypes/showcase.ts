export default {
  name: 'showcase',
  title: 'Showcase',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {name: 'subtitle', title: 'Sub Title', type: 'string'},
    {
      name: 'showcaseImage',
      title: 'Showcase Image',
      type: 'image',
    },
    {
      name: 'showcaseTitle',
      title: 'Showcase Title',
      description: 'Showcase Title',
      type: 'string',
    },
    {
      name: 'showcaseDescription',
      title: 'Showcase Description',
      description: 'Showcase Description',
      type: 'string',
    },
    {
      name: 'showcaseButton',
      title: 'Showcase Button',
      description: 'Showcase Button',
      type: 'string',
    },
  ],
}
