export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
            },
            {
              name: 'buttonLink',
              title: 'Button Link',
              type: 'string',
            },
            {
              name: 'isFeatured',
              title: 'Featured',
              type: 'boolean',
            },
          ],
        },
      ],
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
  ],
}
