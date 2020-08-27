export const model = [
  {
    type: 'title', value: 'Test title', options: {
      tag: 'h2',
      styles: 'background: darkred; color: #fff; text-align: center;'
    }
  },
  {
    type: 'text', value: 'Lorem ipsum dolor sit amet, adipisicing elit. Animi', options: {
      styles: 'background: darkblue; color: yellow;'
    }
  },
  {
    type: 'textColumns', value: [
      '1st text',
      '2nd text',
      '3rd text',
      '4th text',
      '5th text',
    ], options: {
      styles: 'padding: 1rem;'
    }
  }
]
