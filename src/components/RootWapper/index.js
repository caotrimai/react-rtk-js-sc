import React from 'react';
import {store} from '~/app/store';
import {Provider} from 'react-redux';
import DefaultStyleVariables from '~/components/DefaultStyleVariables';
import GlobalStyles from '~/components/GlobalStyle';

export default function RootWrapper({children}) {
  return (
    <Provider store={store}>
      <DefaultStyleVariables>
        <GlobalStyles>
          {children}
        </GlobalStyles>
      </DefaultStyleVariables>
    </Provider>
  );
}