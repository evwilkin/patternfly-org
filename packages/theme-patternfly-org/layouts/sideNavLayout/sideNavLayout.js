import React, { useEffect, useState, useContext } from 'react';
import {
  Button,
  Page,
  PageHeader,
  PageSidebar,
  PageHeaderTools,
  PageHeaderToolsItem,
  TextInput,
  Brand,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownGroup,
  Divider
} from '@patternfly/react-core';
import { SearchIcon, ExternalLinkAltIcon, TimesIcon } from '@patternfly/react-icons';
import { SideNav, TopNav, GdprBanner } from '../../components';
import ConfigContext from '../../helpers/configContext';
import staticVersions from '../../versions.json';
import logo from '../logo.svg';
import './sideNavLayout.css';

const HeaderTools = ({
  versions,
  hasVersionSwitcher,
  hasSearch,
  pathPrefix
}) => {
  const initialVersion = staticVersions.Releases.find(release => release.latest);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchExpanded, setSearchExpanded] = useState(false);
  const expandAndFocusSearch = () => {
    setSearchExpanded(true);
    setTimeout(() => document.getElementById('global-search-input').focus(), 0);
  }
  const latestVersion = versions.Releases.find(version => version.latest);
  const getDropdownItem = version => (
    <DropdownItem
      key={version.name}
      component={
        <a href={version.latest ? pathPrefix : `/${version.name}`}>
          {`Release ${version.name}`}
        </a>
      }
    />
  );

  return (
    <PageHeaderTools>
      {hasSearch && (
        <PageHeaderToolsItem className={`ws-global-search ${isSearchExpanded ? '' : 'ws-hide-search-input'}`}>
          <TextInput id="global-search-input"  placeholder="Search" />
          {isSearchExpanded
            ? (
              <React.Fragment>
                <SearchIcon className="global-search-icon" />
                <Button variant="plain" className="ws-collapse-search" onClick={() => setSearchExpanded(false)}>
                  <TimesIcon />
                </Button>
              </React.Fragment>
            ) : (
              <Button variant="plain" onClick={expandAndFocusSearch}>
                <SearchIcon className="global-search-icon" />
              </Button>
            )
          }
        </PageHeaderToolsItem>
      )}
      {hasVersionSwitcher && (
        <PageHeaderToolsItem>
          <Dropdown
            className="ws-org-version-switcher"
            onSelect={() => setDropdownOpen(!isDropdownOpen)}
            toggle={(
              <DropdownToggle
                className={`ws-org-version-toggle${isDropdownOpen ? '-expanded': ''}`}
                onToggle={() => setDropdownOpen(!isDropdownOpen)}
              >
                Release {initialVersion.name}
              </DropdownToggle>
            )}
            isOpen={isDropdownOpen}
            dropdownItems={[
              <DropdownGroup key="latest" label="Latest">
                {getDropdownItem(latestVersion)}
              </DropdownGroup>,
              <DropdownGroup key="Previous" label="Previous releases">
                {Object.values(versions.Releases)
                  .filter(version => !version.hidden && !version.latest)
                  .slice(0,3)
                  .map(getDropdownItem)}
              </DropdownGroup>,
              <Divider key="divider" className="ws-switcher-divider"/>,
              <DropdownItem
                key="PatternFly 3"
                className="ws-patternfly-3"
                target="_blank"
                href="https://www.patternfly.org/v3"
              >
                PatternFly 3
                <ExternalLinkAltIcon />
              </DropdownItem>
            ]}
          />
        </PageHeaderToolsItem>
      )}
    </PageHeaderTools>
  );
}

function attachDocSearch(algolia, timeout) {
  const hasGlobalSearchInput = document.getElementById('global-search-input');
  if (window.docsearch && hasGlobalSearchInput) {
    return window.docsearch({
      inputSelector: '#global-search-input',
      debug: false,
      ...algolia
    });
  }
  else {
    setTimeout(() => attachDocSearch(algolia, timeout), timeout);
  }
}

export const SideNavLayout = ({ children }) => {
  const {
    hasGdprBanner,
    algolia,
    hasVersionSwitcher,
    sideNavItems,
    topNavItems,
    prnum,
    prurl,
    pathPrefix,
    // BONUS prop passed from app.js
    groupedRoutes
  } = useContext(ConfigContext);
  const [versions, setVersions] = useState({ ...staticVersions });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (algolia) {
      attachDocSearch(algolia, 1000);
    }
    if (hasVersionSwitcher && window.fetch) {
      fetch('/versions.json').then(res => {
        if (res.ok) {
          res.json().then(json => setVersions(json));
        }
      });
    }
  }, []);

  const SideBar = (
    <PageSidebar
      className="ws-page-sidebar"
      theme="light"
      nav={<SideNav navItems={sideNavItems} groupedRoutes={groupedRoutes} />}
    />
  );

  const Header = (
    <PageHeader
      className="ws-page-header"
      headerTools={(algolia || hasVersionSwitcher) && <HeaderTools
        versions={versions}
        hasSearch={algolia}
        hasVersionSwitcher={hasVersionSwitcher}
        pathPrefix={pathPrefix} />}
      logo={prnum ? `PR #${prnum}` : <Brand src={logo} alt="Patternfly Logo" />}
      logoProps={{ href: prurl || pathPrefix || '/' }}
      showNavToggle
      topNav={topNavItems.length > 0 && <TopNav navItems={topNavItems} />}
    />
  );

  return (
    <React.Fragment>
      <div id="ws-page-banners">
        {hasGdprBanner && <GdprBanner />}
      </div>
      <Page
        id="ws-page"
        mainContainerId="ws-page-main"
        header={Header}
        sidebar={SideBar}
        isManagedSidebar
      >
        {children}
      </Page>
    </React.Fragment>
  );
}
