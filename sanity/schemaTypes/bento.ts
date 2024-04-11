export default {
  name: 'bento',
  title: 'Bento',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'highlighted',
      title: 'Highlighted',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'bento',
      title: 'Bento',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'bentoHeader',
              title: 'Bento Header',
              type: 'string',
            },
            {
              name: 'bentoDescription',
              title: 'Button Description',
              type: 'string',
            },
            {
              name: 'bentoImage',
              title: 'Bento Image',
              type: 'image',
            },
            {
              name: 'wide',
              title: 'Wide',
              type: 'boolean',
            },
          ],
        },
      ],
    },
  ],
}
