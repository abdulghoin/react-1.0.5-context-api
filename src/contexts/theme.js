import React from 'react';

export const themes = {
  light: {
    color: '#000000',
    background: '#eeeeee',
  },
  dark: {
    color: '#ffffff',
    background: '#222222',
  },
};

const initialValue = {mode: 'light', themes, toggleTheme() {}};

const Theme = React.createContext(initialValue);

export class ThemeProvider extends React.Component {
  toggleTheme = () => {
    this.setState(state => ({
      mode: /light/gi.test(state.mode) ? 'dark' : 'light',
    }));
  };

  state = {
    mode: 'light',
    themes,
    toggleTheme: this.toggleTheme,
  };

  render() {
    console.log(this.props);
    return (
      <Theme.Provider value={this.state}>
        {React.cloneElement(this.props.children, {...this.props, test: ''})}
      </Theme.Provider>
    );
  }
}

/*
export const useThemeProvider = Child => {
  return function(props) {
    return (
      <ThemeProvider>
        <Child />
      </ThemeProvider>
    );
  };
};
*/

/*
export const ThemeConsumer = props => {
  const {children: Child} = props;
  return (
    <Theme.Consumer>
      {themeContext => <Child {...{...props, themeContext}} />}
    </Theme.Consumer>
  );
};
*/

export const useThemeConsumer = Child => {
  return function(props) {
    return (
      <Theme.Consumer>
        {themeContext => <Child {...{...props, themeContext}} />}
      </Theme.Consumer>
    );
  };
};

export default Theme;
