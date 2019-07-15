import React from 'react';

import {useThemeConsumer} from '../contexts/theme';

export default useThemeConsumer(function(props) {
  const {
    themeContext: {mode, themes},
    children,
  } = props;
  return (
    <section
      style={{
        ...themes[mode],
        transition: 'all 0.8s ease',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      {children}
    </section>
  );
});
