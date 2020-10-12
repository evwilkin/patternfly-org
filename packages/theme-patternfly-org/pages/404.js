import React from 'react';
import { Link } from 'theme-patternfly-org/components';
import { Button, PageSection, TextInput, Title } from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

const Page404 = () => (
  <PageSection className="ws-section">
    <Title size="xl" className="pf-u-mb-lg ws-page-title" headingLevel="h1">
      404 Error
    </Title>
    <p>We can't find the page you're looking for. Try searching patternfly.org or go home.</p>
    <TextInput id="global-search-input"  placeholder="Search" />
    <SearchIcon className="global-search-icon" />
    <Button aria-label="Expand search input" variant="plain" className="ws-collapse-search" onClick={() => setSearchExpanded(false)}>
      <TimesIcon />
    </Button>
    <ul>
      <li><Link to="/">Return to home page</Link></li>
    </ul>
  </PageSection>
);

export default Page404;
