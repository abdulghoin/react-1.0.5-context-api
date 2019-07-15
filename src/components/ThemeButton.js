import React from 'react';
import {useThemeConsumer} from '../contexts/theme';

export default useThemeConsumer(function(props) {
  console.log(props);
  const {
    themeContext: {toggleTheme, mode},
  } = props;
  return (
    <span
      onClick={toggleTheme}
      style={{
        padding: '1em 2em',
        border: '2px solid',
        borderRadius: '4px',
        cursor: 'pointer',
      }}>
      {mode}
    </span>
  );
});
