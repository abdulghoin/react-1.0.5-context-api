import React from 'react';

import {
  ThemeProvider,
  //ThemeConsumer,
  //useThemeProvider,
  //useThemeConsumer,
} from './contexts/theme';

import Layout from './components/Layout';
import ThemeButton from './components/ThemeButton';

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <ThemeButton />
      </Layout>
    </ThemeProvider>
  );
}

/*
export default function App() {
  return (
    <ThemeProvider>
      <>
        <ThemeConsumer>
          {props => {
            console.log(props);
            return <p>test</p>;
          }}
        </ThemeConsumer>
        <Layout>
          <ThemeButton />
          <List />
        </Layout>
      </>
    </ThemeProvider>
  );
}
*/

/*
export default useThemeProvider(
  useThemeConsumer(function App(props) {
    console.log(props);
    return (
      <Layout>
        <ThemeButton />
        <List />
      </Layout>
    );
  }),
);
*/
