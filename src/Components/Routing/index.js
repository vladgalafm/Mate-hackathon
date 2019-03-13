import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Redirect from 'react-router-dom/es/Redirect';
import HomePage from '../HomePage';
import OurSkills from '../OurSkills';
import AboutUs from '../AboutUs';
import Page404 from '../Page404';
import ContactPage from '../ContactPage';
import PortfolioPage from '../PortfolioPage';
import BlogPage from '../BlogPage';
import Features from '../Features';
import OurTeam from '../OurTeam';


class Routing extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage}/>
          <Route path={process.env.PUBLIC_URL + '/about'} component={AboutUs}/>
          <Route path={process.env.PUBLIC_URL + '/team'} component={OurTeam}/>
          <Route path={process.env.PUBLIC_URL + '/services'} component={OurSkills}/>
          <Route path={process.env.PUBLIC_URL + '/portfolio'} component={PortfolioPage}/>
          <Route path={process.env.PUBLIC_URL + '/blog'} component={BlogPage}/>
          <Route path={process.env.PUBLIC_URL + '/contact'} component={ContactPage}/>
          <Route path={process.env.PUBLIC_URL + '/404'} component={Page404}/>
          <Redirect to={process.env.PUBLIC_URL + '/404'}/>
        </Switch>
      </main>
    );
  }
}

export default Routing;