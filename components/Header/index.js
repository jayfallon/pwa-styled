import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
    NProgress.start();
  };
  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };
  Router.onRouteChangeError = () => {
    NProgress.done();
  };

  class Header extends Component {
    render() {
      return (
        <>
          
          <header role="banner">
            <nav className="header__nav" role="navigation">
              <p>nav here</p>
            </nav>
          </header>
        </>
      );
    }
  }

export default Header
