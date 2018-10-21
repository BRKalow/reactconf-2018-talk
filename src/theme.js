import { condensed as theme } from 'mdx-deck/themes';
import codeStyle from 'react-syntax-highlighter/styles/prism/atom-dark';

export default {
  ...theme,
  font: 'Roboto',
  colors: {
    ...theme.colors,
    background: '#011627',
    text: '#e6e9ef'
    // text: 'white'
  },
  heading: {
    ...theme.heading,
    textTransform: ''
  },
  blockquote: {
    p: {
      fontWeight: 'normal'
    }
  },
  css: {
    ...theme.css,
    textAlign: 'left',
    '& .Slide': {
      width: '100%',
      alignItems: 'center'
    }
  },
  prism: {
    style: codeStyle
  }
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
