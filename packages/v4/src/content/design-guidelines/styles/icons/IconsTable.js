import React from 'react';
import {
  Form, 
  TextInput, 
  Title, 
  EmptyState, 
  EmptyStateVariant, 
  EmptyStateIcon, 
  EmptyStateBody,
} from '@patternfly/react-core';
import * as icons from '@patternfly/react-icons';
import paramCase from 'param-case';
import './icons.css';
import coreIcons from '@patternfly/patternfly/icons/pf-icons';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection
} from '@patternfly/react-table';

const allIcons = Object.entries(icons).filter(([name]) => name.endsWith('Icon'));
let commonIcons = allIcons.filter(([name]) => {
  const hyphenName = paramCase(name.slice(0, -4));
  return Boolean(coreIcons[hyphenName]);
});
console.log('commonIcons: ', commonIcons);
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
      'Icon',
      { title: 'Name', transforms: [sortable] },
      'Style',
      { title: 'Type', transforms: [sortable] },
      'React',
      'Contextual usage'
    ],
    sortBy: {}
  };

  handleSearchChange = (checked, event) => {
    const searchValue = event.target.value;
    this.setState(() => ({
      searchValue
    }));
  };

  onSort = (_event, index, direction) => {
    this.setState({
      sortBy: {
        index,
        direction
      }
    });
  }

  render() {
    const { searchValue, columns, sortBy } = this.state;
    const { direction, index } = sortBy;
    const searchRE = new RegExp(searchValue, 'i');
    const iconRows = commonIcons.map(([id, Icon]) => {
      const name = paramCase(id.slice(0, -4));
      return {
        cells: [
          {
            title: (
              <React.Fragment>
                <Icon />
              </React.Fragment>
            ),
            props: { column: 'Icon'}
          },
          {
            title: ( name ),
            props: { column: 'Name' }
          },
          {
            title: ( '' ),
            props: { column: 'Style'}
          },
          {
            title: ( '' ),
            props: { column: 'Type' }
          },
          {
            title: ( id ),
            props: { column: 'React'}
          },
          {
            title: ( '' ),
            props: { column: 'Contextual usage' }
          }
        ]
      }
    });

    let filteredRows = iconRows.filter(row => {
      return row.cells.some(cell => {
        return typeof cell.title === 'string' && searchRE.test(cell.title);
      })
    })

    if (direction) {
      const sortedRows = filteredRows.sort((a, b) => (a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0));
      filteredRows = direction === SortByDirection.asc ? sortedRows : sortedRows.reverse();
    }
    
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

        <Table
          aria-label="Sortable Table"
          sortBy={sortBy}
          onSort={this.onSort}
          cells={columns}
          rows={filteredRows}
        >
          <TableHeader />
          <TableBody />
        </Table>

        {filteredRows.length === 0 && (
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
