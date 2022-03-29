import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

import LayoutDefault from './layouts/LayoutDefault';


import NotFound from './views/NotFound';

import routes from "./routes";

ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
  }, [location]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.route) {
        return <AppRoute exact path={route.route} component={route.component} key={route.key} layout={LayoutDefault} />
      }
      return null;
    });

   

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          {getRoutes(routes)}
          <AppRoute exact path="*" component={NotFound} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;