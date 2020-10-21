// React imports

import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Okta

import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { config } from './utils/oktaConfig';

// Custom components

import { LoadingComponent } from './components/common';
import { NotFoundPage } from './components/pages/NotFound';
import { ProfileListPage } from './components/pages/ProfileList';
import { LoginPage } from './components/pages/Login';
import { HomePage } from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import NewOrder from './components/pages/NewOrder/NewOrder';
import TopHeader from './components/common/TopHeader';
import Profile from './components/pages/Profile/Profile';

// Reducers
import rootReducer from './state/reducers';

// Styles
import 'antd/dist/antd.less';
import { Layout } from 'antd';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  const { Content } = Layout;

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Layout>
        <TopHeader />
        <Content style={{ padding: '50px' }}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/implicit/callback" component={LoginCallback} />
            {/* any of the routes you need secured should be registered as SecureRoutes */}
            <SecureRoute
              path="/"
              exact
              component={() => <HomePage LoadingComponent={LoadingComponent} />}
            />
            <SecureRoute path="/profile-list" component={ProfileListPage} />
            <SecureRoute path="/dashboard" component={Dashboard} />
            <SecureRoute path="/new-order" component={NewOrder} />
            <SecureRoute path="/profile" component={Profile} />
            <Route component={NotFoundPage} />
          </Switch>
        </Content>
      </Layout>
    </Security>
  );
}
