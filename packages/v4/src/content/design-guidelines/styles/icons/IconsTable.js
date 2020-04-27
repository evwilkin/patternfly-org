import React from 'react';
import {
  Gallery, 
  Form, 
  TextInput, 
  Title, 
  EmptyState, 
  EmptyStateVariant, 
  EmptyStateIcon, 
  EmptyStateBody,
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection
} from '@patternfly/react-core';
import * as icons from '@patternfly/react-icons';
import paramCase from 'param-case';
import coreIcons from './pf-icons.json';
import './icons.css';

const allIcons = Object.entries(icons).filter(([name]) => name.endsWith('Icon'));
let commonIcons = allIcons.filter(([name]) => {
  const hyphenName = paramCase(name.slice(0, -4));
  return Boolean(coreIcons[hyphenName]);
});
commonIcons = commonIcons.sort((a , b) => {
  return a[0] > b[0] ? 1 : -1;
});

// const reactOnlyIcons = allIcons.filter(([name]) => {
//   const hyphenName = paramCase(name.slice(0, -4));
//   return !coreIcons[hyphenName];
// });

export class IconsTable extends React.Component {
  state = {
    searchValue: '',
    columns: [
      { title: 'Icon', transforms: [sortable] },
      'Branches',
      { title: 'Name', transforms: [sortable] },
      'ID'
    ],
    rows: [['one', 'two', 'a', 'four', 'five'], ['a', 'two', 'k', 'four', 'five'], ['p', 'two', 'b', 'four', 'five']],
    sortBy: {}
  };

  handleSearchChange = (checked, event) => {
    const searchValue = event.target.value;
    this.setState(() => ({
      searchValue
    }));
  };

  onSort = (_event, index, direction) => {
    const sortedRows = this.state.rows.sort((a, b) => (a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0));
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    });
  }

  render() {
    const { searchValue, columns, rows, sortBy } = this.state;
    const searchRE = new RegExp(searchValue, 'i');
    const filteredIcons = commonIcons.filter(c => {
      return searchRE.test(c[0]);
    });
    let filteredRows = [];
    filteredIcons.map(([id, Icon, name]) => {
      const rowArr = [id, Icon, name];
      filteredRows.push(rowArr);
      return null;
    });
    return (
      <React.Fragment>
        <Form className="ws-content-search-icons" onSubmit={event => { event.preventDefault(); return false; }}>
          <TextInput
            type="text"
            id="primaryIconsSearch"
            name="primaryIconsSearch"
            placeholder="Search Icons"
            aria-label="Search Icons"
            value={searchValue}
            onChange={this.handleSearchChange}
          />
        </Form>
        <Gallery gutter="sm" className="ws-content-icons">
          {filteredIcons.map(([id, Icon]) => {
            const name = paramCase(id.slice(0, -4));
            return <IconCard key={id} id={id} icon={Icon} name={name} />;
          })}
        </Gallery>

        <Table aria-label="Sortable Table" sortBy={sortBy} onSort={this.onSort} cells={columns} rows={filteredRows}>
          <TableHeader />
          <TableBody />
        </Table>

        {filteredIcons.length === 0 && (
          <EmptyState variant={EmptyStateVariant.full}>
            <EmptyStateIcon icon={icons.SearchIcon}/>
            <Title headingLevel="h5" size="2xl">
              No results found for "{ searchValue }".
            </Title>
            <EmptyStateBody>
              We couldn't find any icons that matched your search. Try entering a new search term to find what you're looking for.
            </EmptyStateBody>
          </EmptyState>
        )}
      </React.Fragment>
    );
  }
}
