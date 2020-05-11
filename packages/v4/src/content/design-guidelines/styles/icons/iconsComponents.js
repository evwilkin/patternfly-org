import React from 'react';
import { Dropdown, DropdownToggle } from '@patternfly/react-core';
import { CaretDownIcon } from '@patternfly/react-icons';

export const IconsDropdown = () => (
  <Dropdown
    toggle={
      <DropdownToggle id="toggle-id" iconComponent={CaretDownIcon}>
        Dropdown
      </DropdownToggle>
    }
  />
);
