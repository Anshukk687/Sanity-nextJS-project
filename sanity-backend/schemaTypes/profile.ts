export default {
    name: 'profile',
    type: 'document',
    title: 'Profile',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
              {
                type: 'block'
              },
              {
                type: 'image',
                fields: [
                  {
                    type: 'text',
                    name: 'alt',
                    title: 'Alternative text',
                    description: `Some of your visitors cannot see images,
                      be they blind, color-blind, low-sighted;
                      alternative text is of great help for those
                      people that can rely on it to have a good idea of
                      what's on your page.`,
                    options: {
                      isHighlighted: true
                    }
                  }
                ]
              }
            ]
        },
        {
            name: 'fbLink',
            title: 'FB Link',
            type: 'url',
        },
        {
            name: 'twitterLink',
            title: 'Twitter Link',
            type: 'url',
        },
        {
            name: 'instaLink',
            title: 'Instagram Link',
            type: 'url',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'email',
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'number',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string'
        }
    ]
}