export default {
  name: 'casestudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'caseStudy',
      title: 'Case Study',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'casestudyTitle',
              title: 'Casestudy Title',
              type: 'string',
            },
            {
              name: 'casestudyDescription',
              title: 'Casestudy Description',
              type: 'array',
              of: [{type: 'block'}],
            },
            {
              name: 'casestudyLink',
              title: 'Casestudy Link',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],
}
