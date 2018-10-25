import { condensed as theme } from 'mdx-deck/themes';
import codeStyle from 'react-syntax-highlighter/styles/prism/okaidia';

export default {
  ...theme,
  font: 'Helvetica',
  colors: {
    ...theme.colors,
    background: '#011627',
    text: '#e6e9ef'
  },
  pre: {
    background: 'red'
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
    style: {
      ...codeStyle,
      'pre[class*="language-"]': {
        ...codeStyle['pre[class*="language-"]'],
        background: 'transparent'
      }
    }
  }
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
