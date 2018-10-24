import React from 'react';

const TargetLogo = () => (
  <span
    style={{
      display: 'inline-block',
      verticalAlign: 'middle',
      marginLeft: '0.2em'
    }}
    dangerouslySetInnerHTML={{
      __html: `
<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax" viewBox="0 0 32 32" height="40" width="40"><g><path fill="#cc0000" d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0m0 26.7c-5.9 0-10.8-4.9-10.8-10.8S10.1 5 16 5s10.7 4.9 10.7 10.8S21.9 26.7 16 26.7"></path><path fill="#cc0000" d="M16 10.5c-3 0-5.5 2.4-5.5 5.5s2.4 5.5 5.5 5.5 5.5-2.4 5.5-5.5-2.5-5.5-5.5-5.5"></path></g></svg>
`
    }}
  />
);

export default TargetLogo;
