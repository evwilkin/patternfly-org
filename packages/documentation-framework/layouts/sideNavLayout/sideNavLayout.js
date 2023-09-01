import React, { useEffect, useState } from 'react';
import {
  Button,
  Page,
  PageSidebar,
  PageSidebarBody,
  Brand,
  Dropdown,
  DropdownItem,
  DropdownGroup,
  DropdownList,
  Divider,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadContent,
  MastheadBrand,
  MenuToggle,
  PageToggleButton,
  Toolbar,
  ToolbarGroup,
  ToolbarContent,
  ToolbarItem,
  SkipToContent,
  Switch,
  SearchInput
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';
import AlignLeftIcon from '@patternfly/react-icons/dist/esm/icons/align-left-icon';
import AlignRightIcon from '@patternfly/react-icons/dist/esm/icons/align-right-icon';
import { SideNav, TopNav, GdprBanner } from '../../components';
import staticVersions from '../../versions.json';
import logoMd from '../logo__pf--reverse-on-md.svg';
import logo from '../logo__pf--reverse--base.svg';
import logoBase from '../logo__pf--reverse--base.png';
import v5Logo from '../PF-HorizontalLogo-Reverse.svg';

const HeaderTools = ({
  versions,
  hasVersionSwitcher,
  algolia,
  hasDarkThemeSwitcher,
  hasRTLSwitcher,
  topNavItems
}) => {
  const initialVersion = staticVersions.Releases.find(release => release.latest);
  const latestVersion = versions.Releases.find(version => version.latest);
  const hasSearch = algolia;
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const getDropdownItem = (version, isLatest = false) => (
    <DropdownItem itemId={version.name} key={version.name} to={isLatest ? '/' : `/${version.name}`}>
      {`Release ${version.name}`}
    </DropdownItem>
  );

  const onChange = (_evt, value) => {
    setSearchValue(value);
  };

  const onToggleExpand = (_evt, isSearchExpanded) => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  useEffect(() => {
    // reattach algolia to input each time search is expanded
    if (hasSearch && isSearchExpanded) {
      attachDocSearch(algolia, '.ws-global-search .pf-v5-c-text-input-group__text-input', 1000);
    }
  }, [isSearchExpanded])

  return (
    <Toolbar isFullHeight>
      <ToolbarContent>
        {topNavItems.length > 0 && (
          <ToolbarItem className="pf-m-overflow-container">
            <TopNav navItems={topNavItems} />
          </ToolbarItem>
        )}
        <ToolbarGroup
          align={{ default: 'alignRight' }}
          spaceItems={{ default: 'spacerNone', md: 'spacerMd' }}
        >
          {hasDarkThemeSwitcher && (
            <ToolbarItem>
              <Switch id="ws-theme-switch" label="Dark theme" defaultChecked={false} onChange={() =>
                document.querySelector('html').classList.toggle('pf-v5-theme-dark')} />
            </ToolbarItem>
          )}
          {hasRTLSwitcher && (
            <ToolbarItem>
              <Switch id="ws-rtl-switch" label={isRtl ? 'RTL' : 'LTR'} defaultChecked={false} onChange={() =>{
                const examplePreviews = document.querySelectorAll('.ws-example .ws-preview');
                examplePreviews.forEach(ex => ex.classList.toggle('pf-v5-m-dir-rtl'));
                setIsRtl(isRTL => !isRTL);
              }} />
            </ToolbarItem>
          )}
          {hasSearch && (
            <ToolbarItem>
              <SearchInput
                className="ws-global-search"
                placeholder="Search"
                value={searchValue}
                onChange={onChange}
                onClear={(_evt) => onChange(_evt, '')}
                expandableInput={{ isExpanded: isSearchExpanded, onToggleExpand, toggleAriaLabel: 'Expandable search input toggle' }}
              />
            </ToolbarItem>
          )}
          <ToolbarItem>
            <Button
              component="a"
              variant="plain"
              href="//github.com/patternfly"
              target="top"
              aria-label="PatternFly GitHub page"
            >
              <GithubIcon />
            </Button>
          </ToolbarItem>
          {hasVersionSwitcher && (
            <ToolbarItem>
              <Dropdown
                onSelect={() => setDropdownOpen(!isDropdownOpen)}
                onOpenChange={(isOpen) => setDropdownOpen(isOpen)}
                isOpen={isDropdownOpen}
                toggle={(toggleRef) => (
                  <MenuToggle
                    isFullHeight
                    ref={toggleRef}
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                    isExpanded={isDropdownOpen}
                  >
                    Release {initialVersion.name}
                  </MenuToggle>
                )}
              >
                <DropdownGroup key="Latest" label="Latest">
                  <DropdownList>
                    {getDropdownItem(latestVersion, true)}
                  </DropdownList>
                </DropdownGroup>
                <DropdownGroup key="Previous releases" label="Previous releases">
                  <DropdownList>
                    {Object.values(versions.Releases)
                      .filter(version => !version.hidden && !version.latest)
                      .slice(0,3)
                      .map(version => getDropdownItem(version))}
                  </DropdownList>
                </DropdownGroup>
                <Divider key="divider" className="ws-switcher-divider"/>
                <DropdownGroup key="Previous versions" label="Previous versions">
                  <DropdownList>
                    <DropdownItem
                      key="PatternFly 4"
                      className="ws-patternfly-3"
                      isExternalLink
                      to="http://v4-archive.patternfly.org/v4/"
                      itemId="patternfly-4"
                    >
                      PatternFly 4
                    </DropdownItem>
                    <DropdownItem
                      key="PatternFly 3"
                      className="ws-patternfly-3"
                      isExternalLink
                      to="https://pf3.patternfly.org/"
                      itemId="patternfly-3"
                    >
                      PatternFly 3
                    </DropdownItem>
                  </DropdownList>
                </DropdownGroup>
              </Dropdown>
            </ToolbarItem>
          )}
        </ToolbarGroup></ToolbarContent>
    </Toolbar>
  );
}

// https://github.com/algolia/autocomplete.js#global-options
export function attachDocSearch(algolia, inputSelector, timeout) {
  if (window.docsearch) {
    return window.docsearch({
      inputSelector,
      autocompleteOptions: {
        hint: false,
        appendTo: `.ws-global-search .pf-v5-c-text-input-group`,
      },
      debug: process.env.NODE_ENV !== 'production',
      ...algolia
    });
  }
  else {
    setTimeout(() => attachDocSearch(algolia, inputSelector, timeout), timeout);
  }
}

export const SideNavLayout = ({ children, groupedRoutes, navOpen: navOpenProp }) => {
  const algolia = process.env.algolia;
  const hasGdprBanner = process.env.hasGdprBanner;
  const hasVersionSwitcher = process.env.hasVersionSwitcher;
  const hasDarkThemeSwitcher = process.env.hasDarkThemeSwitcher;
  const hasRTLSwitcher = process.env.hasRTLSwitcher;
  const sideNavItems = process.env.sideNavItems;
  const topNavItems = process.env.topNavItems;
  const prnum = process.env.prnum;
  const prurl = process.env.prurl;

  const [versions, setVersions] = useState({ ...staticVersions });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
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
    >
      <PageSidebarBody>
        <SideNav navItems={sideNavItems} groupedRoutes={groupedRoutes} />
      </PageSidebarBody>
    </PageSidebar>
  );

  const Header = (
    <Masthead className="ws-masthead">
      <MastheadToggle>
        <PageToggleButton variant="plain" aria-label="Global navigation">
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand href={prurl || '/'}>
          {prnum ? `PR #${prnum}` : (
            <Brand src={v5Logo} alt="PatternFly" heights={{ default: '36px' }} />
          )}
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        {(algolia || hasVersionSwitcher) && (
          <HeaderTools
            versions={versions}
            algolia={algolia}
            hasVersionSwitcher={hasVersionSwitcher}
            hasDarkThemeSwitcher={hasDarkThemeSwitcher}
            hasRTLSwitcher={hasRTLSwitcher}
            topNavItems={topNavItems}
          />
        )}
      </MastheadContent>
    </Masthead>
  )

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
        skipToContent={<SkipToContent href="#ws-page-main">Skip to content</SkipToContent>}
        isManagedSidebar
        defaultManagedSidebarIsOpen={navOpenProp}
      >
        {children}
      </Page>
    </React.Fragment>
  );
}
