import React, {Component} from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Layout } from 'antd';


import { Navigation, DayNightMode, Search } from './components'

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    const { nightMode } = this.props
    return (
      <Layout className={ nightMode ? 'theme-dark' : 'theme-light'}>
        <Header>
          <div className="header-wrap">
            <Link to="/">
              <h2 style={{float: 'left', marginRight: '20px'}}>Explorer</h2>
            </Link>
            <Navigation />
            <DayNightMode />
            <Search/>
          </div>
        </Header>
        <Content>
          <div className="content-wrap">
            {this.props.children}
          </div>
        </Content>
        <Footer>
          <p>Powered by <b>Remme</b> © 2019<br/>Block Explorer and Analytics Platform for Remme blockchain</p>
        </Footer>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nightMode: state.conf.nightMode,
  }
};

export default connect(mapStateToProps)(App);
